# 💡 Najmi's Calculator (Dark Mode Ready)

Sebuah aplikasi kalkulator sederhana, responsif, dan lengkap dengan fitur mode gelap serta tampilan jam/tanggal real-time. Proyek ini dibuat menggunakan HTML, CSS, dan JavaScript murni, berfungsi sebagai dasar yang bagus untuk memahami DOM manipulation, *error handling*, dan penggunaan `Date()` object.

---

## 🚀 Fitur Utama

* **Operasi Dasar:** Mendukung penjumlahan (`+`), pengurangan (`-`), perkalian (`*` atau `X`), dan pembagian (`/`).
* **Jam & Tanggal Real-Time:** Menampilkan waktu (format 24 jam) dan tanggal saat ini yang diperbarui setiap detik menggunakan lokal `id-ID` (Indonesia).
* **Mode Gelap (Dark Mode):** Fungsi *toggle* untuk beralih antara tampilan terang dan gelap dengan transisi CSS yang halus.
* **Error Handling (Custom):** Menggunakan `try...catch` untuk menangani ekspresi yang tidak valid dan menampilkan pesan unik: `YANG BENER NYED!`.
* **Desain Responsif:** Tata letak tombol grid yang bersih dan mudah digunakan di berbagai ukuran layar.

---

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Struktur dasar aplikasi.
* **CSS3:** *Styling*, tata letak grid, dan transisi untuk Dark Mode.
* **JavaScript (ES6+):** Logika kalkulator utama (`appendValue`, `clearDisplay`, `calculate` dengan `eval()`), kontrol Dark Mode, dan pembaruan Jam/Tanggal secara real-time.

---
## 🔗 Live Demo & Deployment

Situs ini ter-deploy otomatis melalui Vercel.

[**Coba Kalkulator Live di Vercel**](https://kalkulator-dark-mode.vercel.app/)

Repositori ini telah dikonfigurasi untuk **Continuous Deployment (CD)**. Setiap kali ada perubahan yang di-*push* ke *branch* `main`, Vercel akan secara otomatis memperbarui situs *live*.
