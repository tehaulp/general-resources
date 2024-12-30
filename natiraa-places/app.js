// Loading screen
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
      loadingScreen.classList.add("hidden");
  }, 1000);
});


// User menu dropdown toggling
function toggleUserDropdown(event) {
  const dropdownMenu = document.getElementById('dropdown-user');
  dropdownMenu.classList.toggle('hidden');
}

document.addEventListener('click', function(event) {
  const dropdownMenu = document.getElementById('dropdown-user');
  const dropdownButton = document.querySelector('[data-dropdown-toggle="dropdown-user"]');
  
  if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});


// Side menu
function toggleSideMenu(event) {
  const sideMenu = document.getElementById('logo-sidebar');
  sideMenu.classList.toggle('-translate-x-full');
}