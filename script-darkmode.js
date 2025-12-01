// Fitur Dark Mode
let body = document.querySelector('body');
let buttonmode = document.querySelector('.btnmode'); 

function mode() {
    body.classList.toggle('dark-mode');
    
    // Ubah Tulisan Tombol Mode
    if (body.classList.contains('dark-mode')) {
        buttonmode.textContent = 'Light Mode ☀️';
        console.log('dark mode dijalankan');
    } else {
        buttonmode.textContent = 'Dark Mode 🌙';
        console.log('light mode dijalankan')
    }
}