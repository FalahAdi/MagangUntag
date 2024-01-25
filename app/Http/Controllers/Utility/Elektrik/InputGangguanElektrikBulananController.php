<?php

namespace App\Http\Controllers\Utility\Elektrik;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\HakAksesController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
class InputGangguanElektrikBulananController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $divisi = DB::connection('ConnUtility')->select('exec SP_LIST_DIVISI_PELAPOR');

        $access = (new HakAksesController)->HakAksesFiturMaster('Utility');

        return view('Utility.Elektrik.InputGangguanBulanan.InputGangguanBulanan', compact('divisi','access'));
    }

    public function gangguanBulanan(Request $request)
    {
        //
        try {
            $bln = $request->input('tanggal') ;
            $nama_pengecek = $request->input ('divisi_pelapor1');
            $pabrik = $request->input('nama_pelapor'); ;
            $masalah = $request->input ('penerima_laporan');
            $gambar1 = $request->input ('jam_lapor') ;
            $status =$request->input ('jam_perbaikan') ;
            $solusi = $request->input ('jam_selesai') ;
            $gambar2 = $request->input ('tipe_gangguan') ;
            $kode = $request->input ('penyebab') ;
            $no = $request->input ('penyelesaian') ;


            $data = DB::connection('ConnUtility')->statement('exec SP_4372_Insert_Gangguan_Electric_Bulanan ?,?,?,?,?,?,?,?,?,?,?,?,?,?',[
                $tanggal,$l_div_pelapor,$nama_pelapor,$penerima_laporan,$jamlapor,$jampelaksanaan,$jamselesai,$Type_gangguan,$penyebab,$penyelesaian,$keterangan,
                $teknisi,$lanjut,$user_input]);

            if ($data) {
                return response()->json(['success' => true]);
            } else {
                return response()->json(['error' => 'Gagal menyimpan data.'], 500);
            }
                    } catch (\Throwable $th) {
                        return response()->json(['error' => 'Terjadi kesalahan internal.'], 500);
                    }
    }

    //Show the form for creating a new resource.
    public function create()
    {
        //
    }

    //Store a newly created resource in storage.
    public function store(Request $request)
    {
        //
    }

    //Display the specified resource.
    public function show($id)
    {
        //
    }

    //Show the form for editing the specified resource.
    public function edit($id)
    {
        //
    }

    //Update the specified resource in storage.
    public function update(Request $request, $id)
    {
        //
    }

    //Remove the specified resource from storage.
    public function destroy($id)
    {
        //
    }
}
