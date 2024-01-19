var tanggal_mulai = document.getElementById("tanggal_mulai");
var tanggal_selesai = document.getElementById("tanggal_selesai");

if (tanggal_mulai && tanggal_selesai) {
var tanggal_akhirOutput = new Date().toISOString().split("T")[0];
tanggal_mulai.value = tanggal_akhirOutput;
tanggal_selesai.value = tanggal_akhirOutput;

var currentDateTime = new Date();
var hours = currentDateTime.getHours().toString().padStart(2, '0');
var minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
var timeString = hours + ':' + minutes;

}
