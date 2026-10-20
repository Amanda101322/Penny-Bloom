// This is to select DOM elements for the sidebar menu functionality
const menuToggle = document.getElementById('menu-toggle');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Opens Sidebar Function
const openSidebar = () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
};

// Closes Sidebar Function
const closeSidebar = () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
};
menuToggle.addEventListener('click', openSidebar);
closeMenuBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

document.querySelectorAll('.placeholder-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('This section is coming soon!');
  });
});

lucide.createIcons();

const currencySelect = document.getElementById('currency-select');
const savedCurrency = localStorage.getItem('pennyBloomCurrency');

if (savedCurrency && currencySelect) {
    currencySelect.value = savedCurrency;
}
if (currencySelect) {
    currencySelect.addEventListener('change', () => {
        localStorage.setItem('pennyBloomCurrency', currencySelect.value);
    });
}

const currencySymbols = {
  NGN: '₦',
  USD: '$',
  GBP: '£',
  EUR: '€'
};
function formatCurrency(amount, currency) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}
const totalSavings = document.getElementById('total-savings');
const monthlySavings = document.getElementById('monthly-savings');
let monthlySavingsAmount = 0;
function updateMonthlySavings() {
  if (!monthlySavings || !currencySelect) return;

  monthlySavings.textContent = formatCurrency(
    monthlySavingsAmount,
    currencySelect.value
  );
}
if (currencySelect) {
  currencySelect.addEventListener('change', updateMonthlySavings);
}

updateMonthlySavings();
let totalSavingsAmount = 0;

function updateTotalSavings() {
    if (!totalSavings || !currencySelect) return;

    totalSavings.textContent = formatCurrency(
        totalSavingsAmount,
        currencySelect.value
    );
}

if (currencySelect) {
  currencySelect.addEventListener('change', updateTotalSavings);
}

updateTotalSavings();