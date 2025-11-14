(function(){
  'use strict';

  // --- UI refs ---
  const partsList = document.getElementById('partsList');
  const searchInput = document.getElementById('builderSearch');
  const categoryFilter = document.getElementById('categoryFilter');
  const subtotalText = document.getElementById('subtotalText');
  const buildCategoryText = document.getElementById('buildCategoryText');
  const buildScale = document.getElementById('buildScale');

  if(!partsList){
    console.error('buildpc: #partsList not found');
    return;
  }

  // --- state ---
  let G_CATALOG = []; // global catalog accessible to jumpToCategory/select handlers
  const slots = { Processor:null, Motherboard:null, Memory:null, GPU:null, Storage:null, Cooling:null, PSU:null };
  window.slots = slots;
  // Helpers
  function money(v){ return '₱' + Number(v||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2}); }
  function mapCategory(src){
    if(!src) return 'Other';
    const v = String(src).toLowerCase();
    if (v.includes('cpu') || v.includes('processor')) return 'Processor';
    if (v.includes('gpu') || v.includes('graphics') || v.includes('vga')) return 'GPU';
    if (v.includes('ram') || v.includes('memory')) return 'Memory';
    if (v.includes('motherboard') || v.includes('mb')) return 'Motherboard';
    if (v.includes('ssd') || v.includes('nvme') || v.includes('storage') || v.includes('hdd')) return 'Storage';
    if (v.includes('cool') || v.includes('fan') || v.includes('liquid')) return 'Cooling';
    if (v.includes('psu') || v.includes('power')) return 'PSU';
    return src.charAt(0).toUpperCase() + src.slice(1);
  }
  function normalizeProduct(p){
    return {
      id: p.id ?? p.sku ?? p.productId ?? p.slug ?? ('p_'+Math.random().toString(36).slice(2,9)),
      name: p.title || p.name || p.productName || p.label || 'Unnamed product',
      price: Number(p.price ?? p.salePrice ?? p.amount ?? 0),
      category: mapCategory(p.category ?? p.type ?? p.collection ?? p.group ?? p.tag),
      socket: p.socket || p.cpuSocket || null,
      image: p.image || p.imageUrl || p.thumb || (p.media && p.media[0] && p.media[0].url) || null,
      shortDesc: p.shortDesc || p.description || p.summary || (p.raw && p.raw.description) || '',
      raw: p
    };
  }

  // render parts list (catalog optional; falls back to global)
  function renderParts(catalogParam, q = '', category = 'all'){
    const catalog = Array.isArray(catalogParam) ? catalogParam : G_CATALOG;
    q = (q||'').trim().toLowerCase();
    const list = catalog.filter(it => (category==='all' || it.category===category) &&
      (it.name.toLowerCase().includes(q) || (it.category||'').toLowerCase().includes(q))
    );
    if(list.length === 0){
      partsList.innerHTML = '<div style="padding:12px;color:var(--muted)">No components found.</div>';
      return;
    }
    partsList.innerHTML = list.map(it => {
      const thumb = it.image ? `<img src="${it.image}" alt="${it.name}" style="max-width:72px;max-height:64px;border-radius:6px">` : (it.raw && it.raw.icon ? it.raw.icon : '🔧');
      return `
        <div class="part" data-id="${it.id}" data-cat="${it.category}">
          <div class="thumb">${thumb}</div>
          <div style="flex:1">
            <div style="font-weight:700">${it.name}</div>
            <div style="color:var(--muted);font-size:13px">${it.socket?('Socket: ' + it.socket):it.category}</div>
            <div style="color:var(--muted);font-size:12px;margin-top:6px">${(it.shortDesc||'').slice(0,120)}</div>
          </div>
          <div style="text-align:right;display:flex;flex-direction:column;gap:8px;align-items:flex-end">
            <div style="font-weight:700">${money(it.price)}</div>
            <div style="display:flex;gap:8px">
              <button class="btn info" data-info="${it.id}">INFO</button>
              <button class="btn select" data-select="${it.id}">SELECT</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // wire buttons
    partsList.querySelectorAll('[data-select]').forEach(btn=>{
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-select');
        const item = G_CATALOG.find(c=>String(c.id)===String(id));
        assignToSlot(item);
      });
    });
    partsList.querySelectorAll('[data-info]').forEach(btn=>{
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-info');
        const item = G_CATALOG.find(c=>String(c.id)===String(id));
        if(item) alert(item.name + '\n\n' + (item.shortDesc || '') + '\n\nPrice: ' + money(item.price));
      });
    });
  }

  // update UI for slots (name, desc, image)
  function updateSlotsUI(){
    Object.keys(slots).forEach(k=>{
      const elLabel = document.getElementById('slot-'+k);
      const elName = document.getElementById('slot-'+k+'-name');
      const elImg = document.getElementById('slot-'+k+'-img');
      const elDesc = document.getElementById('slot-'+k+'-desc');
      if(!elLabel || !elName) return;
      const s = slots[k];
      if(!s){
        elName.textContent = k;
        elLabel.textContent = k === 'Cooling' ? 'Optional' : 'Select ' + k.toLowerCase();
        if(elImg) { elImg.src = ''; elImg.style.display = 'none'; }
        if(elDesc) elDesc.textContent = '';
      } else {
        elName.textContent = s.name + ' — ' + money(s.price);
        elLabel.textContent = s.socket ? 'Socket: ' + s.socket : s.category;
        if(elImg){
          if(s.image){ elImg.src = s.image; elImg.style.display = ''; }
          else { elImg.src = ''; elImg.style.display = 'none'; }
        }
        if(elDesc) elDesc.textContent = s.shortDesc || (s.raw && (s.raw.shortDesc || s.raw.description || '')) || '';
      }
    });

    const total = Object.values(slots).filter(Boolean).reduce((s,i)=>s+(i.price||0),0);
    if(subtotalText) subtotalText.textContent = 'Subtotal: ' + money(total);
    updateBuildOverview(total);
  }

  function assignToSlot(item){
    if(!item) return;
    const normalized = item && item.id && item.price !== undefined && item.category ? item : normalizeProduct(item);
    const cat = normalized.category;
    if(slots[cat] === undefined){
      const map = { CPU:'Processor' };
      const key = map[cat] || cat;
      slots[key] = normalized;
    } else {
      slots[cat] = normalized;
    }
    // compatibility check
    if(slots.Processor && slots.Motherboard && slots.Processor.socket && slots.Motherboard.socket && slots.Processor.socket !== slots.Motherboard.socket){
      slots.Motherboard = null;
      alert('Processor and motherboard sockets differ — cleared motherboard. Please choose compatible motherboard.');
    }
    updateSlotsUI();
  }
  
    

  // build overview
  function updateBuildOverview(total){
    const entry = 10000;
    const mid = 50000;
    let label = 'ENTRY';
    if(total >= mid) label = 'HIGH';
    else if(total >= entry) label = 'MID';
    if(buildCategoryText) buildCategoryText.textContent = label;
    if(buildScale){
      const pct = Math.min(100, Math.round((total / mid) * 100));
      buildScale.style.width = pct + '%';
      buildScale.style.transition = 'width 300ms ease';
    }
    const poly = document.getElementById('shape');
    if(poly){
      const ratio = Math.min(1, total / mid);
      const center = [130,130], baseR = 60 + ratio*60;
      const pts = [[0,-1],[0.86,-0.5],[0.53,0.85],[-0.53,0.85],[-0.86,-0.5]].map(p=>(center[0]+p[0]*baseR)+','+(center[1]+p[1]*baseR)).join(' ');
      poly.setAttribute('points', pts);
      poly.setAttribute('opacity', 0.12 + ratio*0.45);
    }
  }

  // global selector for other pages and buttons -> ensures only that category displays
  window.jumpToCategory = function(cat){
    // set filter value and render using global catalog
    if(categoryFilter){
      categoryFilter.value = (['Processor','Motherboard','Memory','GPU','Storage','Cooling','PSU'].includes(cat) ? cat : 'all');
    }
    renderParts(G_CATALOG, searchInput?.value || '', categoryFilter?.value || 'all');
    partsList.scrollIntoView({behavior:'smooth',block:'center'});
  };

  // allow external selection by id
  window.selectProductForBuilder = function(productId){
    const found = G_CATALOG.find(p => String(p.id) === String(productId) || String(p.raw?.id) === String(productId));
    if(found) assignToSlot(found);
    else console.warn('selectProductForBuilder: product not found', productId);
  };
  window.addEventListener('builder:select-product', (e)=> { if(e && e.detail) window.selectProductForBuilder(e.detail); });

  // init: load global PRODUCTS or other globals, normalize and render
  (function init(){
    const srcRaw = window.PRODUCTS || window.products || window.allProducts || window.productsData || findProductsGlobal() || [];
    G_CATALOG = Array.isArray(srcRaw) ? srcRaw.map(normalizeProduct) : [];
    // populate category filter
    if(categoryFilter){
      const cats = Array.from(new Set(G_CATALOG.map(c=>c.category))).sort();
      if(cats.length){
        categoryFilter.innerHTML = `<option value="all">All</option>` + cats.map(c=>`<option value="${c}">${c}</option>`).join('');
      }
      categoryFilter.addEventListener('change', ()=> renderParts(G_CATALOG, searchInput?.value||'', categoryFilter.value));
    }
    if(searchInput) searchInput.addEventListener('input', ()=> renderParts(G_CATALOG, searchInput.value, categoryFilter?.value || 'all'));

    renderParts(G_CATALOG);
    updateSlotsUI();
  })();
  

})();
