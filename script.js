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

// Event Listeners for Sidebar Menu
menuToggle.addEventListener('click', openSidebar);
closeMenuBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Some placeholder links are not yet functional so this is to prevent default behavior and show an alert instead
document.querySelectorAll('.placeholder-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('This section is coming soon!');
  });
});