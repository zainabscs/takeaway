// SMOKD Grill - Main App JS

// ===================== STATE =====================
let cart = [];
let favorites = new Set();
let activeFilter = 'all';
let searchQuery = '';
let orderType = 'pickup';
let currentModalItem = null;
let modalQty = 1;
let appliedDiscount = 0;

const COUPONS = {
  'SMOKD10': 0.10,
  'WELCOME': 0.15,
  'FIRE20': 0.20
};

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initParallax();
  renderMenuGrid(window.MENU_DATA);
  initFilterTabs();
  initSearch();
  initScrollAnimations();
});

// ===================== LOADER =====================
function initLoader() {
  const loader = document.getElementById('loader');
  const fill = document.querySelector('.loader-fill');
  if (!loader) return;
  let w = 0;
  const iv = setInterval(() => {
    w += Math.random() * 25;
    if (w >= 100) { w = 100; clearInterval(iv); }
    fill.style.width = w + '%';
  }, 120);
  setTimeout(() => {
    loader.classList.add('out');
    setTimeout(() => loader.remove(), 600);
  }, 1400);
}

// ===================== NAVBAR =====================
function initNavbar() {
  const nav = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ===================== PARALLAX =====================
function initParallax() {
  const heroImg = document.getElementById('heroImg');
  if (!heroImg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroImg.style.transform = `scale(1.08) translateY(${y * 0.3}px)`;
  }, { passive: true });
}

// ===================== MENU RENDERING =====================
function renderMenuGrid(items) {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const filtered = items.filter(item => {
    const catMatch = activeFilter === 'all' || item.cat === activeFilter;
    const searchMatch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="menu-empty"><p>No items found. Try a different search or filter.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map((item, i) => `
    <div class="menu-card" data-id="${item.id}" style="animation-delay:${(i % 12) * 40}ms">
      <div class="mc-img-wrap" onclick="openItemModal(${item.id})">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        ${item.popular ? '<div class="mc-badge">Popular</div>' : ''}
      </div>
      <div class="mc-body">
        <div class="mc-top">
          <span class="tag small">${item.tag}</span>
          <button class="fav-btn ${favorites.has(item.id) ? 'active' : ''}" onclick="toggleFav(${item.id}, this)" aria-label="Favourite">
            ${favorites.has(item.id) ? '❤️' : '🤍'}
          </button>
        </div>
        <h4 class="mc-name">${item.name}</h4>
        <p class="mc-desc">${item.desc}</p>
        <div class="mc-footer">
          <span class="price">$${item.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Animate cards in
  grid.querySelectorAll('.menu-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 40);
    });
  });
}

function initFilterTabs() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.cat;
      renderMenuGrid(window.MENU_DATA);
    });
  });
}

function initSearch() {
  const input = document.getElementById('menuSearch');
  if (!input) return;
  let debounce;
  input.addEventListener('input', e => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      searchQuery = e.target.value.trim();
      renderMenuGrid(window.MENU_DATA);
    }, 250);
  });
}

// ===================== FAVORITES =====================
function toggleFav(id, btn) {
  if (favorites.has(id)) {
    favorites.delete(id);
    btn.innerHTML = '🤍';
    btn.classList.remove('active');
  } else {
    favorites.add(id);
    btn.innerHTML = '❤️';
    btn.classList.add('active');
    btn.classList.add('pop');
    setTimeout(() => btn.classList.remove('pop'), 400);
  }
}

// ===================== CART =====================
function addToCart(name, price, img) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }
  updateCartUI();
  showToast(`${name} added to order`);

  // Animate cart button
  const btn = document.getElementById('cartBtn');
  btn.classList.add('bump');
  setTimeout(() => btn.classList.remove('bump'), 400);
}

function removeFromCart(name) {
  cart = cart.filter(i => i.name !== name);
  updateCartUI();
}

function changeCartQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(name); return; }
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartCount').style.display = count > 0 ? 'flex' : 'none';

  const cartItems = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');

  if (cart.length === 0) {
    cartItems.innerHTML = '';
    cartEmpty.style.display = 'flex';
    cartFooter.style.display = 'none';
    return;
  }

  cartEmpty.style.display = 'none';
  cartFooter.style.display = 'block';

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" />
      <div class="ci-info">
        <strong>${item.name}</strong>
        <span>$${item.price.toFixed(2)}</span>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discounted = subtotal * appliedDiscount;
  const total = subtotal - discounted;

  document.getElementById('cartSubtotal').textContent = '$' + subtotal.toFixed(2);
  document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);
  document.getElementById('discountRow').style.display = appliedDiscount > 0 ? 'flex' : 'none';
  document.getElementById('discountAmt').textContent = '-$' + discounted.toFixed(2);
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cartBtn').addEventListener('click', openCart);

function setOrderType(type, btn) {
  orderType = type;
  document.querySelectorAll('.ot-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const wrap = document.getElementById('deliveryAddressWrap');
  if (wrap) wrap.style.display = type === 'delivery' ? 'block' : 'none';
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  if (COUPONS[code]) {
    appliedDiscount = COUPONS[code];
    updateCartUI();
    showToast(`Coupon applied! ${Math.round(appliedDiscount * 100)}% off`, 'success');
  } else {
    showToast('Invalid coupon code', 'error');
  }
}

// ===================== CHECKOUT =====================
function openCheckout() {
  closeCart();
  const overlay = document.getElementById('checkoutOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal * (1 - appliedDiscount);

  document.getElementById('checkoutItems').innerHTML = cart.map(i =>
    `<div class="ct-row"><span>${i.name} x${i.qty}</span><span>$${(i.price * i.qty).toFixed(2)}</span></div>`
  ).join('');
  document.getElementById('checkoutTotal').textContent = '$' + total.toFixed(2);
}

function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function placeOrder() {
  if (cart.length === 0) return;
  closeCheckout();
  const overlay = document.getElementById('successOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  cart = [];
  appliedDiscount = 0;
  updateCartUI();

  // Animate tracking steps
  const steps = document.querySelectorAll('.track-step');
  steps.forEach((s, i) => {
    setTimeout(() => s.classList.add('active'), i * 1000 + 500);
  });
}

function closeSuccess() {
  document.getElementById('successOverlay').classList.remove('open');
  document.body.style.overflow = '';
  document.querySelectorAll('.track-step').forEach(s => s.classList.remove('active'));
  document.querySelector('.track-step').classList.add('active');
}

// ===================== ITEM MODAL =====================
function openItemModal(id) {
  const item = window.MENU_DATA.find(i => i.id === id);
  if (!item) return;
  currentModalItem = item;
  modalQty = 1;
  document.getElementById('imImg').src = item.img;
  document.getElementById('imImg').alt = item.name;
  document.getElementById('imTag').textContent = item.tag;
  document.getElementById('imName').textContent = item.name;
  document.getElementById('imDesc').textContent = item.desc;
  document.getElementById('imPrice').textContent = '$' + (item.price * modalQty).toFixed(2);
  document.getElementById('qtyDisplay').textContent = modalQty;
  document.getElementById('itemOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeItemModal() {
  document.getElementById('itemOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentModalItem = null;
}

function changeQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('qtyDisplay').textContent = modalQty;
  if (currentModalItem) {
    document.getElementById('imPrice').textContent = '$' + (currentModalItem.price * modalQty).toFixed(2);
  }
}

function addFromModal() {
  if (!currentModalItem) return;
  for (let i = 0; i < modalQty; i++) {
    addToCart(currentModalItem.name, currentModalItem.price, currentModalItem.img);
  }
  closeItemModal();
  openCart();
}

// ===================== TOAST =====================
function showToast(msg, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${msg}</span>`;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, 2800);
}

// ===================== SCROLL ANIMATIONS =====================
function initScrollAnimations() {
  const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('visible'), parseInt(delay));
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

// ===================== PRICE UPDATE LISTENER =====================
// Listen for admin updates
window.addEventListener('storage', (e) => {
  if (e.key === 'smokd_menu') {
    window.MENU_DATA = JSON.parse(e.newValue);
    renderMenuGrid(window.MENU_DATA);
    showToast('Menu updated by admin', 'success');
  }
});