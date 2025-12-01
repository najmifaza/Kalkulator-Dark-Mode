//Tambahin BOM biar asik
let nama = prompt('Nama Kamu Siapa');
alert(`Halo, ${nama}👋🏻 Mau Ngitung yaaa? btw ada fitur dark mode loh, Silakan menekan OK di bawah untuk memunculkan Kalkulator`);

//Fitur Utama
function appendValue(value) { 
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    const display = document.getElementById("display");
    try {
        console.log('calculating', display.value);
        display.value = eval(display.value); 
    } catch (e) { 
        console.error('eror! value tidak sesuai');
        display.value = 'YANG BENER NYED!';
    }
}

