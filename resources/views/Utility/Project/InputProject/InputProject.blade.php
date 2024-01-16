@extends('layouts.appUtility')
@section('content')
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-10 RDZMobilePaddingLR0">
                <div class="card">
                    <div class="card-header">Input Project</div>
                    <div class="card-body RDZOverflow RDZMobilePaddingLR0">
                        <div class="form">
                            <div class="row-24 d-flex">
                                <div class="col-4">
                                    <div class="col-8">
                                        <div class="nama_pelapor">Nama Project</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">
                                        <div class="nama_pelapor">Nama Mesin</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">
                                        <div class="nama_pelapor">Merk Mesin</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">
                                        <div class="nama_pelapor">Lokasi Mesin</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">
                                        <div class="nama_pelapor">Tahun Pembuatan</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">
                                        <div class="jam_lapor">Tanggal Mulai</div>
                                        <input type="date" name="tanggal_dibutuhkan" id="tanggal_dibutuhkan"
                                            class="input mb-3">
                                        <div class="jam_lapor">Tanggal Selasai</div>
                                        <input type="date" name="tanggal_dibutuhkan" id="tanggal_dibutuhkan"
                                            class="input mb-3">
                                        <div class="nama_pelapor">Keterangan Kerusakan</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">
                                        <div class="nama_pelapor">Perbaikan</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">






                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="row-4">
                                        <div class="div">
                                            <label for="">Keterangan</label>
                                        </div>
                                        <label>
                                            <input type="radio" name="gender" value="Selesai">
                                            Selesai
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" value="Belum Selesai">
                                            Belum Selesai
                                        </label>

                                        <form id="uploadForm1" action="/upload" method="post" enctype="multipart/form-data"
                                            class=" ">
                                            <label for="fileInput1" class="btn btn-link ">Pilih Gambar 1</label>
                                            <input type="file" id="fileInput1" name="fileInput" style="display: none;"
                                                accept="image/*">
                                        </form>

                                        <div id="imagePreviewContainer1">
                                            <img id="imagePreview1" src="" alt="Preview 1"
                                                style="display: none; max-width: 100%; height: auto;">
                                        </div>
                                        <div class="nama_pelapor">Ket. Gambar 1</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">

                                        <form id="uploadForm2" action="/upload" method="post" enctype="multipart/form-data"
                                            class="mt-3">
                                            <label for="fileInput2" class="btn btn-link">Pilih Gambar 2</label>
                                            <input type="file" id="fileInput2" name="fileInput"
                                                style="display: none;" accept="image/*">
                                        </form>

                                        <div id="imagePreviewContainer2">
                                            <img id="imagePreview2" src="" alt="Preview 2"
                                                style="display: none; max-width: 100%; height: auto;">
                                        </div>
                                        <div class="nama_pelapor">Ket. Gambar 2</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">


                                    </div>
                                    <script>
                                        // Event listener untuk Gambar 1
                                        document.getElementById('fileInput1').addEventListener('change', function() {
                                            var fileInput = this;
                                            var fileName = fileInput.value.split('\\').pop();

                                            // Menampilkan nama file yang dipilih di label
                                            document.querySelector('.btn-link').textContent = fileName;

                                            // Membaca file gambar yang dipilih
                                            var reader = new FileReader();
                                            reader.onload = function(e) {
                                                var imagePreview = document.getElementById('imagePreview1');
                                                // Menetapkan sumber gambar saat file berhasil dibaca
                                                imagePreview.src = e.target.result;
                                                imagePreview.style.display = 'block'; // Menampilkan elemen gambar
                                            };
                                            reader.readAsDataURL(fileInput.files[0]); // Membaca file sebagai URL data
                                        });

                                        // Event listener untuk Gambar 2
                                        document.getElementById('fileInput2').addEventListener('change', function() {
                                            var fileInput = this;
                                            var fileName = fileInput.value.split('\\').pop();

                                            // Menampilkan nama file yang dipilih di label
                                            document.querySelector('.btn-link').textContent = fileName;

                                            // Membaca file gambar yang dipilih
                                            var reader = new FileReader();
                                            reader.onload = function(e) {
                                                var imagePreview = document.getElementById('imagePreview2');
                                                // Menetapkan sumber gambar saat file berhasil dibaca
                                                imagePreview.src = e.target.result;
                                                imagePreview.style.display = 'block'; // Menampilkan elemen gambar
                                            };
                                            reader.readAsDataURL(fileInput.files[0]); // Membaca file sebagai URL data
                                        });
                                    </script>
                                </div>


                                <div class="col-4 d-grid gap-2 d-md-block d-flex">
                                    <button type="button" class="btn btn-primary w-50 mb-1">Input</button>
                                    <button type="button" class="btn btn-primary w-50 mb-1">Koreksi</button>
                                    <button type="button" class="btn btn-primary w-50 mb-4">Hapus</button>

                                    <button type="button" class="btn btn-primary w-50 mb-1">Proses</button>
                                    <button type="button" class="btn btn-primary w-50 mb-1">Batal</button>
                                </div>
                            </div>


                        </div>
                        <label class="">Filter</label>
                        <div class="row-24 d-flex mt-4">

                            <label for="">Bulan</label>
                            <input type="month" name="tanggal_dibutuhkan" id="tanggal_dibutuhkan"
                                class="input mb-3 ml-1">
                            <label for=""class="ml-3">Tahun</label>
                            <input type="date" name="tanggal_dibutuhkan" id="tanggal_dibutuhkan"
                                class="input mb-3 ml-1 ">

                            <button type="button" style="height: 30px" class="btn btn-primary ml-3">Refresh</button>
                        </div>
                        <div id="div_tablePO" class="acs-form3">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Nama Project</th>
                                        <th scope="col">Nama Mesin </th>
                                        <th scope="col">Tanggal Mulai</th>
                                        <th scope="col">Tanggal Selesai</th>
                                        <th scope="col">Keterangan Kerusakan</th>
                                        <th scope="col">Keterangan</th>
                                        <th scope="col">User</th>

                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
