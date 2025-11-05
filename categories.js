
        // Categories data
        const categories = [
            {
                id: 'cpu',
                name: 'Processors',
                icon: '🔧',
                count: 24,
                description: 'High-performance CPUs from AMD and Intel. Power your build with the latest processors for gaming, content creation, and productivity.',
                features: [
                    'Latest Gen AMD Ryzen & Intel Core',
                    'Multi-core performance',
                    'Overclocking support',
                    'Energy efficient designs'
                ]
            },
            {
                id: 'gpu',
                name: 'Graphics Cards',
                icon: '🎮',
                count: 32,
                description: 'Premium graphics cards for gaming and professional work. From NVIDIA RTX to AMD Radeon, find the perfect GPU for your needs.',
                features: [
                    'Ray tracing technology',
                    '4K gaming ready',
                    'AI-enhanced performance',
                    'Creator-optimized features'
                ]
            },
            {
                id: 'ram',
                name: 'Memory (RAM)',
                icon: '💾',
                count: 18,
                description: 'DDR4 and DDR5 memory kits for optimal system performance. Choose from various speeds, capacities, and RGB options.',
                features: [
                    'DDR5 & DDR4 support',
                    'RGB customization',
                    'XMP/DOCP profiles',
                    'High-speed performance'
                ]
            },
            {
                id: 'storage',
                name: 'Storage',
                icon: '💿',
                count: 28,
                description: 'Fast NVMe SSDs and spacious HDDs. Store your games, applications, and files with reliable storage solutions.',
                features: [
                    'NVMe Gen 4 & Gen 5',
                    'High capacity options',
                    'Lightning-fast speeds',
                    'Durable and reliable'
                ]
            },
            {
                id: 'motherboard',
                name: 'Motherboards',
                icon: '🖥️',
                count: 21,
                description: 'Feature-rich motherboards with the latest chipsets. Build on a solid foundation with boards supporting cutting-edge technology.',
                features: [
                    'PCIe 5.0 support',
                    'WiFi 6E connectivity',
                    'Premium VRM designs',
                    'RGB lighting control'
                ]
            },
            {
                id: 'cooling',
                name: 'Cooling',
                icon: '❄️',
                count: 16,
                description: 'Keep your system cool with AIO liquid coolers and premium air coolers. Quiet operation with maximum cooling efficiency.',
                features: [
                    'AIO & Air cooling',
                    'RGB lighting effects',
                    'Quiet operation',
                    'High TDP support'
                ]
            }
        ];

        // Products data
        const products = [
            { id: 1, name: "AMD Ryzen 9 7950X", category: "cpu", price: 549.99, icon: "🔥" },
            { id: 2, name: "Intel Core i9-14900K", category: "cpu", price: 589.99, icon: "⚡" },
            { id: 3, name: "NVIDIA RTX 4090", category: "gpu", price: 1599.99, icon: "🎮" },
            { id: 4, name: "AMD RX 7900 XTX", category: "gpu", price: 999.99, icon: "🎯" },
            { id: 5, name: "G.Skill Trident Z5 32GB", category: "ram", price: 139.99, icon: "💾" },
            { id: 6, name: "Corsair Vengeance 64GB", category: "ram", price: 249.99, icon: "🚀" },
            { id: 7, name: "Samsung 990 PRO 2TB", category: "storage", price: 179.99, icon: "💿" },
            { id: 8, name: "WD Black SN850X 4TB", category: "storage", price: 349.99, icon: "📀" },
            { id: 9, name: "ASUS ROG Strix X670E", category: "motherboard", price: 499.99, icon: "🖥️" },
            { id: 10, name: "MSI MAG Z790", category: "motherboard", price: 379.99, icon: "⚙️" },
            { id: 11, name: "NZXT Kraken 360", category: "cooling", price: 199.99, icon: "❄️" },
            { id: 12, name: "Arctic Liquid Freezer II", category: "cooling", price: 139.99, icon: "🧊" }
        ];

        // Render categories
        function renderCategories() {
            const grid = document.getElementById('categoriesGrid');
            if (!grid) return;
            
            grid.innerHTML = categories.map(cat => `
                <div class="category-card">
                    <div class="category-header">
                        <div class="category-icon">${cat.icon}</div>
                        <h2 class="category-title">${cat.name}</h2>
                        <p class="category-count">${cat.count} Products Available</p>
                    </div>
                    <div class="category-body">
                        <p class="category-description">${cat.description}</p>
                        <ul class="category-features">
                            ${cat.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    
                    </div>
                </div>
            `).join('');
        }

        // View category - redirect to products page
        function viewCategory(categoryId) {
            window.location.href = `products.html?category=${categoryId}`;
        }

        // Show category products
        function showCategoryProducts(categoryId) {
            const categoryProducts = products.filter(p => p.category === categoryId);
            const category = categories.find(c => c.id === categoryId);
            const container = document.getElementById('productsContainer');
            
            if (!container) return;

            // Hide all product sections first
            document.querySelectorAll('.products-by-category').forEach(section => {
                section.classList.remove('active');
            });

            // Create or update section
            const sectionId = `products-${categoryId}`;
            let section = document.getElementById(sectionId);
            
            if (!section) {
                section = document.createElement('div');
                section.id = sectionId;
                section.className = 'products-by-category';
                container.appendChild(section);
            }

            section.innerHTML = `
                <h3 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: #00d4ff;">
                    ${category.icon} ${category.name}
                </h3>
                <div class="product-grid">
                    ${categoryProducts.map(product => `
                        <div class="product-card">
                            <div class="product-image">${product.icon}</div>
                            <div class="product-info">
                                <div class="product-name">${product.name}</div>
                                <div class="product-price">₱${product.price.toFixed(2)}</div>
                                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            section.classList.add('active');

            // Scroll to products
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        // Show category info
        function showCategoryInfo(categoryId) {
            const category = categories.find(c => c.id === categoryId);
            alert(`${category.name}\n\n${category.description}\n\nFeatures:\n${category.features.map(f => '• ' + f).join('\n')}`);
        }

        // Add to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) {
                showNotification('Product not found!');
                return;
            }
            
            const cartItem = {
                id: product.id,
                name: product.name,
                category: product.category,
                price: product.price,
                icon: product.icon
            };
            
            if (typeof window.addToCart === 'function') {
                window.addToCart(cartItem);
            } else {
                showNotification('Cart system not available. Please refresh the page.');
            }
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const filtered = categories.filter(c => 
                    c.name.toLowerCase().includes(query) || 
                    c.description.toLowerCase().includes(query) ||
                    c.features.some(f => f.toLowerCase().includes(query))
                );

                const grid = document.getElementById('categoriesGrid');
                if (!grid) return;
                
                grid.innerHTML = filtered.map(cat => `
                    <div class="category-card">
                        <div class="category-header">
                            <div class="category-icon">${cat.icon}</div>
                            <h2 class="category-title">${cat.name}</h2>
                            <p class="category-count">${cat.count} Products Available</p>
                        </div>
                        <div class="category-body">
                            <p class="category-description">${cat.description}</p>
                            <ul class="category-features">
                                ${cat.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                            <div class="category-cta">
                                <a href="products.html?category=${cat.id}" class="cta-btn btn-primary">View Products</a>
                                <button class="cta-btn btn-secondary" onclick="showCategoryInfo('${cat.id}')">Learn More</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            });
        }

        // Initialize
        renderCategories();
    
