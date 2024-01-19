var bulan = document.getElementById("bulan");
var sampaiDengan = document.getElementById("sampaiDengan");

if (bulan && sampaiDengan) {
var tanggal_akhirOutput = new Date().toISOString().split("T")[0];
bulan.value = tanggal_akhirOutput;
sampaiDengan.value = tanggal_akhirOutput;

var currentDateTime = new Date();
var hours = currentDateTime.getHours().toString().padStart(2, '0');
var minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
var timeString = hours + ':' + minutes;

}
