function safeUseGA(...args) {
  if (window && window.ga && typeof window.ga === 'function') {
    window.ga(...args);
  }
}

export function initializeEcommerce() {
  safeUseGA('require', 'ecommerce');
}

export function ecommerceAddItem({ id, name, price, quantity }) {
  safeUseGA('ecommerce:addItem', { id, name, price, quantity, currency: 'BRL' });
}

export function ecommerceFinalize() {
  safeUseGA('ecommerce:send');
}
