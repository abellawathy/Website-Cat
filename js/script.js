// Ambil elemen dropdown
const menuDropdownButton = document.getElementById('menuDropdownButton');
const menuDropdown = document.getElementById('menuDropdown');

// Tambahkan event listener untuk klik tombol menu
menuDropdownButton.addEventListener('click', () => {
    menuDropdown.classList.toggle('active'); // Toggle kelas 'active' pada dropdown menu
});

// Tutup dropdown ketika klik di luar elemen
document.addEventListener('click', (event) => {
    if (!menuDropdownButton.contains(event.target) && !menuDropdown.contains(event.target)) {
        menuDropdown.classList.remove('active');
    }
});
