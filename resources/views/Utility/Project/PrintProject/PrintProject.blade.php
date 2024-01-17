@extends('layouts.appUtility')
@section('content')
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-10 RDZMobilePaddingLR0">
                <div class="card">
                    <div class="card-header">Print Project</div>
                    <div class="card-body RDZOverflow RDZMobilePaddingLR0">

                        <label class="">Filter</label>
                        <div class="row-24 d-flex mt-4">

                            <label for="">Bulan</label>
                            <input type="date" name="tanggal_dibutuhkan" id="tanggal_dibutuhkan" class="input mb-3 ml-1">
                            <label for=""class="ml-3">S/D</label>
                            <input type="date" name="tanggal_dibutuhkan" id="tanggal_dibutuhkan"
                                class="input mb-3 ml-1 ">
                            <label for="" class="ml-3">Divisi Pelapor</label>
                            <select name="divisi_pelapor" id="divisi_pelapor" class="form-control mb-2 ml-1"
                                style="width: 270px;">
                                @foreach ($divisi as $divisi_pelapor)
                                    <option value="{{ $divisi_pelapor->Id_divisi }}">
                                        {{ $divisi_pelapor->Nama_divisi }}
                                    </option>
                                @endforeach
                            </select>
                            <button type="button" style="height: 30px" class="btn btn-primary ml-3">Refresh</button>
                        </div>
                        <div id="div_tablePO" class="acs-form3">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Nama Project</th>
                                        <th scope="col">Nama Mesin </th>
                                        <th scope="col">Tanggal Mulai</th>
                                        <th scope="col"> Tanggal Selesai</th>
                                        <th scope="col">Keterangan Kerja </th>
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
