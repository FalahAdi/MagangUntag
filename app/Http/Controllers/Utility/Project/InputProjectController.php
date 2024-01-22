<?php

namespace App\Http\Controllers\Utility\Project;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\HakAksesController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
class InputProjectController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $access = (new HakAksesController)->HakAksesFiturMaster('Utility');

        return view('Utility.Project.InputProject.InputProject', compact('access'));
    }

    // public function postData(Request $request)
    // {
    //     //
    //     try {
    //         // $Kode (1);
    //         $NamaProject  = $request->input('NamaProject') ;
    //         $NamaMesin  = $request->input('NamaMesin') ;
    //         $TglMulai = $request->input('TglMulai') ;
    //         $TglSelesai  = $request->input('TglSelesai') ;
    //         $Keterangan  = $request->input('Keterangan') ;
    //         $KeteranganKerja  = $request->input('KeteranganKerja') ;
    //         $UserId  = $request->input('UserId') ;
    //         $Id   = $request->input('Id') ;
    //         $bulan  =$request->input('bulan') ;
    //         $tahun  = $request->input('tahun') ;
    //         $MerkMesin =$request->input('MerkMesin') ;
    //         $LokasiMesin =$request->input('LokasiMesin') ;
    //         $TahunBuat =$request->input('TahunBuat') ;
    //         $Perbaikan =$request->input('Perbaikan') ;


    //         $data = DB::connection('ConnUtility')->statement('exec SP_1273_UTY_LIST_PROJECT ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?',[
    //             $NamaProject,$NamaMesin,$TglMulai,$TglSelesai,$Keterangan,$KeteranganKerja,$UserId,$Id,$bulan,$tahun,$MerkMesin,
    //             $LokasiMesin,$TahunBuat,$Perbaikan]);

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

                // $Kode = $request->input('kode') ;
                // $Id = $request->input('Id') ;

                // // Execute the stored procedure and fetch data
                // $data = DB::connection('ConnUtility')->select('exec SP_1273_UTY_LIST_PROJECT  @kode = ?, @Id = ?', [$Kode, $Id]);
                // // Return data as a JSON response
                // return datatables($data)->make(true);

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
