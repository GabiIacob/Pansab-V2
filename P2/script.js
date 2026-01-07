// Data model for products and packages
const products = [
  { item: 'Baguette', desc: 'Classic crusty French loaf', price: 2.5 },
  { item: 'Croissant', desc: 'Buttery, flaky viennoiserie', price: 1.8 },
  { item: 'Slice of Cake', desc: 'Single slice from display cakes', price: 3.5 },
  { item: 'Small Celebration Cake', desc: 'Serves 6–8, custom decoration', price: 25.0 },
  { item: 'Large Celebration Cake', desc: 'Serves 12–16, custom flavours', price: 45.0 },
  { item: 'Wedding Cake (per person)', desc: 'Tiered cakes, custom design', price: 4.5 }
];

const packages = [
  { name: 'Breakfast Box', desc: '6 pastries and 2 loaves', price: 18.0 },
  { name: 'Party Pack', desc: '24 assorted mini pastries', price: 32.0 },
  { name: 'Celebration Bundle', desc: 'Small cake + 12 slices + assorted pastries', price: 65.0 }
];

function renderPricingTable() {
  const tbody = document.querySelector('.pricing-table tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  products.forEach(p => {
    const tr = document.createElement('tr');
    const tdItem = document.createElement('td'); tdItem.textContent = p.item;
    const tdDesc = document.createElement('td'); tdDesc.textContent = p.desc;
    const tdPrice = document.createElement('td'); tdPrice.textContent = `$${p.price.toFixed(2)}`;
    tr.appendChild(tdItem); tr.appendChild(tdDesc); tr.appendChild(tdPrice);
    tbody.appendChild(tr);
  });
}

function renderPackagesList() {
  const ul = document.querySelector('.packages');
  if (!ul) return;
  ul.innerHTML = '';
  packages.forEach(pkg => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${pkg.name}</strong> — ${pkg.desc} — $${pkg.price.toFixed(2)}`;
    ul.appendChild(li);
  });
}

function calculateTotalPrices() {
  const prodTotal = products.reduce((s, p) => s + (p.price || 0), 0);
  const pkgTotal = packages.reduce((s, p) => s + (p.price || 0), 0);
  return prodTotal + pkgTotal;
}

// Initialize page: render data and hook up button
document.addEventListener('DOMContentLoaded', () => {
  renderPricingTable();
  renderPackagesList();

  const btn = document.getElementById('calc-total');
  const out = document.getElementById('total-result');
  if (btn && out) {
    btn.addEventListener('click', () => {
      const total = calculateTotalPrices();
      out.textContent = `Total value of listed products: $${total.toFixed(2)}`;
    });
  }
});
