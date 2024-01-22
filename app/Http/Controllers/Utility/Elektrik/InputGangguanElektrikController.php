<?php

namespace App\Http\Controllers\Utility\Elektrik;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Controllers\HakAksesController;
use PhpParser\Node\Stmt\TryCatch;

class InputGangguanElektrikController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $divisi = DB::connection('ConnUtility')->select('exec SP_LIST_DIVISI_PELAPOR');
        $teknisi = DB::connection('ConnUtility')->select('exec SP_LIST_TEKNISI_ELEKTRIK');
        $access = (new HakAksesController)->HakAksesFiturMaster('Utility');

        return view('Utility.Elektrik.InputGangguan.InputGangguan', compact('teknisi','divisi','access'));
    }

    public function postData(Request $request)
    {
        //
        try {
            $tanggal = $request->input('tanggal') ;
            $l_div_pelapor = $request->input ('divisi_pelapor1');
            $nama_pelapor = $request->input('nama_pelapor'); ;
            $penerima_laporan = $request->input ('penerima_laporan');
            $jamlapor = $request->input ('jam_lapor') ;
            $jampelaksanaan =$request->input ('jam_perbaikan') ;
            $jamselesai = $request->input ('jam_selesai') ;
            $Type_gangguan = $request->input ('tipe_gangguan') ;
            $penyebab = $request->input ('penyebab') ;
            $penyelesaian = $request->input ('penyelesaian') ;
            $keterangan =$request->input ('keterangan') ;
            $teknisi =$request->input ('teknisi') ;
            $lanjut  = $request->input ('agree') ;
            $user_input = Auth::user()->NomorUser ;


            $data = DB::connection('ConnUtility')->statement('exec SP_INSERT_GANGGUAN_ELEKTRIK ?,?,?,?,?,?,?,?,?,?,?,?,?,?',[
                $tanggal,$l_div_pelapor,$nama_pelapor,$penerima_laporan,$jamlapor,$jampelaksanaan,$jamselesai,$Type_gangguan,$penyebab,$penyelesaian,$keterangan,
                $teknisi,$lanjut,$user_input]);

            if ($data) {
                return response()->json(['success' => true]);
            } else {
                return response()->json(['error' => 'Gagal menyimpan data.'], 500);
            }
                    } catch (\Throwable $th) {
                        return response()->json(['error' => 'Terjadi kesalahan internal.'], 500);}
    }
    // public function postDataGambar(Request $request)
    // {
    //     //
    //     try {
    //         $IdLaporan = $request->input ('IdLaporan') ;
    //         $Gambar1 = $request->input ('gambar1') ;
    //         $KetGambar1 = $request->input ('ket_gambar1');
    //         $Gambar2  = $request->input ('gambar2') ;
    //         $KetGambar2  = $request->input ('ket_gambar2') ;
    //         $user_input = Auth::user()->NomorUser ;
    //         $data = DB::connection('ConnUtility')->statement('exec SP_1273_UTY_INSERT_GAMBAR_GANGGUAN_ELEKTRIK ?,?,?,?,?,?',[
    //             $IdLaporan,$Gambar1,$KetGambar1,$Gambar2,$KetGambar2,$user_input]);

    //         if ($data) {
    //             return response()->json(['success' => true]);
    //         } else {
    //             return response()->json(['error' => 'Gagal menyimpan data.'], 500);
    //         }
    //                 } catch (\Throwable $th) {
    //                     return response()->json(['error' => 'Terjadi kesalahan internal.'], 500);}
    // }


    public function getData(Request $request)
    {
        // dd($request->all(), 'hehe');
            // $tanggal1 = $request->input('tanggal1');
            // $tanggal2 = $request->input('tanggal2');
            // $l_div_pelapor = $request->input ('divisi');

            // // Execute the stored procedure and fetch data
            // $data = DB::connection('ConnUtility')->select('exec SP_DT_LIST_GANGGUAN_ELEKTRIK_BLN_THN2 @date1 = \''.$tanggal1.'\', @date2 = \''.$tanggal2.'\',  @divisi = '.$l_div_pelapor);
            // // dd($data);
            // // Return data as a JSON response
            // return datatables($data)->make(true);
            // // return response()->json($data);

            $tanggal1 = $request->input('tanggal1') ;
            $tanggal2 = $request->input('tanggal2') ;
            $l_div_pelapor = $request->input ('divisi');

            // Execute the stored procedure and fetch data
            $data = DB::connection('ConnUtility')->select('exec SP_DT_LIST_GANGGUAN_ELEKTRIK_BLN_THN2 @date1 = ?, @date2 = ?,  @divisi = ?', [$tanggal1, $tanggal2, $l_div_pelapor]);
            // Return data as a JSON response
            return datatables($data)->make(true);



    }
    public function deleteData(Request $request)
    {

        $Id_Laporan = $request->input('id');

        try {
            // Your deletion logic here
            // Example: Delete records from the database based on IDs
            foreach($Id_Laporan as $id) {
                DB::connection('ConnUtility')->statement('exec SP_HAPUS_GANGGUAN_ELEKTRIK @id_laporan = ?',[$id]);
            }

            // Return a success response
            return response()->json(['success' => true, 'message' => 'Data deleted successfully']);
        } catch (\Exception $e) {
            // Return an error response
            return response()->json(['success' => false, 'message' => 'Error deleting data: ' . $e->getMessage()]);
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
