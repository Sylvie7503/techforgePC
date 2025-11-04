// cart.js - Simple Working Cart System with Checkout Form

let cart = [];

// Load cart from localStorage
function loadCart() {
    try {
        const saved = localStorage.getItem('techforge_cart');
        if (saved) {
            cart = JSON.parse(saved);
        }
        updateCartCount();
    } catch (e) {
        console.log('No saved cart found');
        cart = [];
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('techforge_cart', JSON.stringify(cart));
}

// Update cart count display
function updateCartCount() {
    const elements = document.querySelectorAll('#cartCount');
    const count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    elements.forEach(el => {
        if (el) el.textContent = count;
    });
}

// Add item to cart
function addToCart(item) {
    console.log('Adding to cart:', item);
    
    if (!item || !item.name) {
        console.error('Invalid item:', item);
        showNotification('Error: Invalid product');
        return;
    }

    // Check if item exists
    const existing = cart.find(i => i.id === item.id && i.name === item.name);
    
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({
            ...item,
            cartId: Date.now() + Math.random(),
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showNotification(`${item.name} added to cart!`);
    
    // Update modal if open
    if (document.getElementById('cartModal')?.classList.contains('active')) {
        renderCartModal();
    }
}

// Remove from cart
function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
    updateCartCount();
    renderCartModal();
}

// Update quantity
function updateCartItemQuantity(cartId, quantity) {
    const item = cart.find(item => item.cartId === cartId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        updateCartCount();
        renderCartModal();
    }
}

// Show cart modal
function showCart() {
    renderCartModal();
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.add('active');
    }
}

// Close cart modal
function closeCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Render cart modal
function renderCartModal() {
    const modalBody = document.getElementById('modalBody');
    if (!modalBody) return;

    if (cart.length === 0) {
        modalBody.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some amazing products to get started!</p>
            </div>
        `;
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const tax = subtotal * 0.08;
    const shipping = subtotal > 50 ? 0 : 9.99;
    const total = subtotal + tax + shipping;

    modalBody.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-category">${item.category || 'Product'}</div>
                        <div class="cart-item-quantity">
                            <button class="qty-btn" onclick="updateCartItemQuantity(${item.cartId}, ${(item.quantity || 1) - 1})">-</button>
                            <input type="number" class="qty-input" value="${item.quantity || 1}" min="1" 
                                   onchange="updateCartItemQuantity(${item.cartId}, parseInt(this.value) || 1)">
                            <button class="qty-btn" onclick="updateCartItemQuantity(${item.cartId}, ${(item.quantity || 1) + 1})">+</button>
                        </div>
                    </div>
                    <div class="cart-item-price">₱${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</div>
                    <button class="remove-btn" onclick="removeFromCart(${item.cartId})">Remove</button>
                </div>
            `).join('')}
        </div>

        <div class="cart-total">
            <div class="cart-total-row">
                <span>Subtotal:</span>
                <span>₱${subtotal.toFixed(2)}</span>
            </div>
            <div class="cart-total-row">
                <span>Tax (8%):</span>
                <span>₱${tax.toFixed(2)}</span>
            </div>
            <div class="cart-total-row">
                <span>Shipping:</span>
                <span>${shipping === 0 ? 'FREE' : '₱' + shipping.toFixed(2)}</span>
            </div>
            <div class="cart-total-row total">
                <span>Total:</span>
                <span>₱${total.toFixed(2)}</span>
            </div>
        </div>

        <div class="checkout-form">
            <h3 style="margin-bottom:1rem;color:#00d4ff;">Checkout Information</h3>
            <div class="form-group">
                <label>Full Name *</label>
                <input type="text" id="fullName" placeholder="John Doe" required>
            </div>
            <div class="form-group">
                <label>Email Address *</label>
                <input type="email" id="email" placeholder="john@example.com" required>
            </div>
            <div class="form-group">
                <label>Phone Number *</label>
                <input type="tel" id="phone" placeholder="+1 (555) 123-4567" required>
            </div>
            <div class="form-group">
                <label>Shipping Address *</label>
                <input type="text" id="address" placeholder="123 Main Street" required>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>City *</label>
                    <input type="text" id="city" placeholder="New York" required>
                </div>
                <div class="form-group">
                    <label>ZIP Code *</label>
                    <input type="text" id="zip" placeholder="10001" required>
                </div>
            </div>

            <h3 style="margin:1.5rem 0 1rem;color:#00d4ff;">Payment Information</h3>
            <div class="form-group">
                <label>Cardholder Name *</label>
                <input type="text" id="cardName" placeholder="John Doe" required>
            </div>
            <div class="form-group">
                <label>Card Number *</label>
                <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Expiry Date *</label>
                    <input type="text" id="expiryDate" placeholder="MM/YY" required>
                </div>
                <div class="form-group">
                    <label>CVV *</label>
                    <input type="text" id="cvv" placeholder="123" maxlength="4" required>
                </div>
            </div>

            <button class="checkout-btn" onclick="processCheckout(${total})">Place Order - ₱${total.toFixed(2)}</button>
        </div>
    `;
}

// Process checkout with validation
function processCheckout(total) {
    const requiredFields = ['fullName','email','phone','address','city','zip','cardName','cardNumber','expiryDate','cvv'];
    for (const id of requiredFields) {
        const field = document.getElementById(id);
        if (!field || !field.value.trim()) {
            showNotification('Please fill out all required fields.');
            field?.focus();
            return;
        }
    }

    showNotification(`Order placed successfully! Total: ₱${total.toFixed(2)}`);
    cart = [];
    saveCart();
    updateCartCount();
    closeCart();
}

// Show notification
function showNotification(message) {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        if (notif.parentNode) {
            notif.parentNode.removeChild(notif);
        }
    }, 3000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    
    // Close modal when clicking outside
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCart();
            }
        });
    }
});

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.showCart = showCart;
window.closeCart = closeCart;
window.showNotification = showNotification;
