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

document.addEventListener('DOMContentLoaded', function() {
  alert('Hello');
})