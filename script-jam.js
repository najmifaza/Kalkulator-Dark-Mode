// Tempatkan kode ini di bagian bawah file script.js Anda

function updateTimeAndDate() {
    // 1. Dapatkan objek Date dan Time saat ini
    const now = new Date();

    // 2. Format Waktu (Contoh: 14:30:45)
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false // format 24 jam
    };
    const formattedTime = now.toLocaleTimeString('id-ID', timeOptions);

    // 3. Format Tanggal (Contoh: Senin, 1 Januari 2024)
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString('id-ID', dateOptions);

    // 4. Perbarui elemen HTML
    document.getElementById('time-display').textContent = formattedTime;
    document.getElementById('date-display').textContent = formattedDate;
}

// Jalankan fungsi sekali saat halaman dimuat
updateTimeAndDate(); 

// Jalankan fungsi setiap 1000 milidetik (1 detik) untuk membuat jam berjalan
setInterval(updateTimeAndDate, 1000);