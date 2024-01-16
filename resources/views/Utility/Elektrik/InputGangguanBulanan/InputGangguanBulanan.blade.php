@extends('layouts.appUtility')
@section('content')
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-10 RDZMobilePaddingLR0">
                <div class="card">
                    <div class="card-header">Gangguan Elektrik Bulanan</div>
                    <div class="card-body RDZOverflow RDZMobilePaddingLR0">
                        <div class="form">
                            <div class="row-24 d-flex">
                                <div class="col-3">
                                    <div class="col-8">
                                        <label class="tanggal">Tanggal</label>
                                        <input type="date" name="tanggal_dibutuhkan" id="tanggal_dibutuhkan"
                                            class="input mb-3">
                                        <div class="nama_pelapor">Nama Pengecek</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">
                                        <div class="divisi_pelapor">Pabrik Pengecek</div>
                                        <select name="divisi_pelapor" id="divisi_pelapor" class="form-control mb-2">
                                            <option value="divisi1">Divisi 1</option>
                                            <option value="divisi2">Divisi 2</option>
                                            <option value="divisi3">Divisi 3</option>
                                        </select>
                                        <div class="nama_pelapor">Jenis Masalah</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">

                                        <form id="uploadForm1" action="/upload" method="post" enctype="multipart/form-data"
                                            class="mb-3 ">
                                            <label for="fileInput1" class="btn btn-link ">Gambar Gangguan</label>
                                            <input type="file" id="fileInput1" name="fileInput" style="display: none;"
                                                accept="image/*">
                                        </form>
                                        <div id="imagePreviewContainer1">
                                            <img id="imagePreview1" src="" alt="Preview 1"
                                                style="display: none; max-width: 100%; height: auto;">
                                        </div>

                                        <div class="div">
                                            <label for="">Status</label>
                                        </div>
                                        <label>
                                            <input type="radio" name="gender" value="Selesai">
                                            Selesai
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" value="Belum Selesai">
                                            Belum Selesai
                                        </label>
                                        <div class="nama_pelapor">Solusi</div>
                                        <input type="text" name="nama_pelapor" id="nama_pelapor"
                                            class="form-control mb-2" placeholder="">
                                        <form id="uploadForm2" action="/upload" method="post" enctype="multipart/form-data"
                                            class="mb-3 ">
                                            <label for="fileInput2" class="btn btn-link ">Gambar Selesai</label>
                                            <input type="file" id="fileInput2" name="fileInput" style="display: none;"
                                                accept="image/*">
                                        </form>
                                        <div id="imagePreviewContainer2">
                                            <img id="imagePreview2" src="" alt="Preview 2"
                                                style="display: none; max-width: 100%; height: auto;">
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
                                </div>

                            </div>

                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Bulan </th>
                                        <th scope="col">Nama </th>
                                        <th scope="col">Pabrik</th>
                                        <th scope="col">Masalah</th>
                                        <th scope="col">Solusi</th>
                                        <th scope="col">Status</th>

                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                            <div class="row-12 d-flex flex-wrap">
                                <div class="col-12">
                                    <div class="d-flex  p-2 justify-content-end">
                                        <button type="button" class="btn btn-primary  ml-2">Input</button>
                                        <button type="button" class="btn btn-primary  ml-2">Ubah</button>
                                        <button type="button" class="btn btn-primary  ml-2">Hapus</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
@endsection
