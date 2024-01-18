    //button
    let inputButton = document.getElementById("inputButton")
    let koreksiButton = document.getElementById("koreksiButton")
    let hapusinputButton = document.getElementById("hapusButton")
    let prosesButton = document.getElementById("prosesButton")
    let batalButton = document.getElementById("batalButton")

    //form
    let tanggal = document.getElementById("tanggal")
    let divisi_pelapor1 = document.getElementById("divisi_pelapor1")
    let nama_pelapor = document.getElementById("nama_pelapor")
    let penerima_laporan = document.getElementById("penerima_laporan")
    let jam_lapor = document.getElementById("jam_lapor")
    let jam_perbaikan = document.getElementById("jam_perbaikan")
    let jam_selesai = document.getElementById("jam_selesai")
    let tipe_gangguan = document.getElementById("tipe_gangguan")
    let penyebab = document.getElementById("penyebab")
    let penyelesaian = document.getElementById("penyelesaian")
    let keterangan = document.getElementById("keterangan")
    let teknisi = document.getElementById("teknisi")
    let gambar1 = document.getElementById("gambar1")
    let ket_gambar1 = document.getElementById("ket_gambar1")
    let hasil_gambar1 = document.getElementById("hasil_gambar1")
    let gambar2 = document.getElementById("gambar2")
    let ket_gambar2 = document.getElementById("ket_gambar2")
    let hasil_gambar2 = document.getElementById("hasil_gambar2")
    let bulan = document.getElementById("bulan")
    let sampaiDengan = document.getElementById("sampaiDengan")
    let divisi_pelapor2 = document.getElementById("divisi_pelapor2")
    let refreshButton = document.getElementById("refreshButton")
    let imagePreviewContainer1 = document.getElementById("imagePreviewContainer1")
    let imagePreviewContainer2 = document.getElementById("imagePreviewContainer2")
    let agree = document.getElementById("agree")


    var bulanInput = document.getElementById("bulan");
    var sampaiDenganInput = document.getElementById("sampaiDengan");
    var tanggalInput = document.getElementById("tanggal");
    var JamLapor = document.getElementById("jam_lapor");

    if (bulanInput && tanggalInput && JamLapor && sampaiDenganInput) {
    var tanggal_akhirOutput = new Date().toISOString().split("T")[0];
    bulanInput.value = tanggal_akhirOutput;
    tanggalInput.value = tanggal_akhirOutput;
    sampaiDengan.value = tanggal_akhirOutput;

    var currentDateTime = new Date();
    var hours = currentDateTime.getHours().toString().padStart(2, '0');
    var minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes;

    JamLapor.value = timeString;
}




    // Initially disable all form elements
    enableFormElements(false);

    // Event listener for Input Button
    inputButton.addEventListener('click', function() {
        // Enable all input fields and buttons
        enableFormElements(true);
    });

    batalButton.addEventListener('click', function() {
        // Disable all input fields and buttons
        enableFormElements(false);
    });

    // Function to enable/disable form elements
    function enableFormElements(enable) {
        var inputElements = document.querySelectorAll('input, select, button');
        inputElements.forEach(function(element) {
            if (element !== inputButton&& element !== bulan && element !== sampaiDengan && element !== divisi_pelapor2 && element !== refreshButton) {
                element.disabled = !enable;
            }
        }
    );
    }


    // Event listener untuk Gambar 1
    document.getElementById('gambar1').addEventListener('change', function() {
        var fileInput = this;
        var fileName = fileInput.value.split('\\').pop();

        // Menampilkan nama file yang dipilih di label
        document.querySelector('.btn-link').textContent = fileName;

        // Membaca file gambar yang dipilih
        var reader = new FileReader();
        reader.onload = function(e) {
            var imagePreview = document.getElementById('hasil_gambar1');
            // Menetapkan sumber gambar saat file berhasil dibaca
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block'; // Menampilkan elemen gambar
        };
        reader.readAsDataURL(fileInput.files[0]); // Membaca file sebagai URL data
    });

    // Event listener untuk Gambar 2
    document.getElementById('gambar2').addEventListener('change', function() {
        var fileInput = this;
        var fileName = fileInput.value.split('\\').pop();

        // Menampilkan nama file yang dipilih di label
        document.querySelector('.btn-link').textContent = fileName;

        // Membaca file gambar yang dipilih
        var reader = new FileReader();
        reader.onload = function(e) {
            var imagePreview = document.getElementById('hasil_gambar1');
            // Menetapkan sumber gambar saat file berhasil dibaca
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block'; // Menampilkan elemen gambar
        };
        reader.readAsDataURL(fileInput.files[0]); // Membaca file sebagai URL data
    });


    $(document).ready(function () {
        $("#prosesButton").click(function (e) {


            var Token = $('meta[name="csrf-Token"]').attr("content");
            var requestData = {
                tanggal : tanggal.value,
                divisi_pelapor1 : divisi_pelapor1.value,
                nama_pelapor : nama_pelapor.value,
                penerima_laporan : penerima_laporan.value,
                jam_lapor : jam_lapor.value,
                jam_perbaikan : jam_perbaikan.value,
                jam_selesai : jam_selesai.value,
                tipe_gangguan : tipe_gangguan.value,
                penyebab : penyebab.value,
                penyelesaian : penyelesaian.value,
                keterangan : keterangan.value,
                teknisi : teknisi.value,
                agree : true,
            };



            console.log(requestData);
            $.ajax({
                url: "/postData",
                method: "POST",
                data: requestData,
                headers:{
                    "X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr('content'),
                },
                // dataType: "json",
                success: function (response) {
                    console.log(response);

                    Swal.fire({
                        icon: 'success',
                        title: 'Data berhasil disimpan',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });


        });
        // Define the getData function outside the click event handler
        $("#refreshButton").click(function (e) {
            e.preventDefault();

            // Call the getData function when the button is clicked
            getData();
        });

        function getData() {
            var Tanggal = $("#bulan").val();
            var Divisi = $("#divisi_pelapor2").val();

            var requestData = {
                tanggal: Tanggal,
                divisi: Divisi,
            };

            $.ajax({
                url: '/getData',
                data: requestData,
                dataType: "json",
                method: 'GET',
                success: function (data) {
                    // Clear the table body before adding new data
                    $("#tabel_input_gangguan tbody").empty();
                    console.log('sukses',data);

                    $.each(data, function (index, row) {
                        console.log('Row:', row);
                        var formattedDate = new Date(row.tanggal);
                        var day = formattedDate.getDate();
                        var month = formattedDate.getMonth() + 1;
                        var year = formattedDate.getFullYear();

                        var formattedDateString =
                            (day < 10 ? "0" : "") +
                            day +
                            "-" +
                            (month < 10 ? "0" : "") +
                            month +
                            "-" +
                            year;

                        $("table tbody").append(
                            "<tr>" +
                            "<td>" + formattedDateString + "</td>" +
                            "<td>" + row.L_div_pelapor + "</td>" +
                            "<td>" + row.Nama_pelapor + "</td>" +
                            "<td>" + row.Penerima_laporan + "</td>" +
                            "<td>" + row.Jam_lapor + "</td>" +
                            "<td>" + row.jam_pelaksanan + "</td>" +
                            "<td>" + row.Jam_selesai + "</td>" +
                            "<td>" + row.Type_gangguan + "</td>" +
                            "<td>" + row.Penyebab + "</td>" +
                            "<td>" + row.Penyelesaian + "</td>" +
                            "<td>" + row.Keterangan + "</td>" +
                            "<td>" + row.Teknisi + "</td>" +
                            "</tr>"
                        );
                    });
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching data:', error);
                },
            });
        }


        // Attach the click event handler to #refreshButton
        // $("#refreshButton").click(function (e) {
        //     e.preventDefault();
        //     // Call the getData function when the button is clicked
        //     getData();
        // });

        // Initial fetch of data when the page loads

    });

