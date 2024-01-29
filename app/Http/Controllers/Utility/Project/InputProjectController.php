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

    public function postDataProject(Request $request)
    {
        // dd($request->all());
        //
        try {
            $Kode = '1';
            $NamaProject = $request->input('nama_project');;
            $NamaMesin = $request->input('nama_mesin');
            $TglMulai = $request->input('tanggal_mulai');
            $TglSelesai = $request->input('tanggal_selesai');
            $Keterangan = $request->input('Keterangan');
            $KeteranganKerja = $request->input('keterangan_kerusakan');
            $user_input = Auth::user()->NomorUser;
            $MerkMesin = $request->input('merk_mesin');
            $LokasiMesin = $request->input('lokasi_mesin');
            $TahunBuat = $request->input('tahun_pembuatan');
            $Perbaikan = $request->input('perbaikan');



            $data = DB::connection('ConnUtility')->statement('exec SP_1273_UTY_MAINT_PROJECT ?,?,?,?,?,?,?,?,?,?,?,?', [
                $Kode,
                $NamaProject,
                $NamaMesin,
                $TglMulai,
                $TglSelesai,
                $Keterangan,
                $KeteranganKerja,
                $user_input,
                $MerkMesin,
                $LokasiMesin,
                $TahunBuat,
                $Perbaikan,
            ]);

            if ($data) {
                return response()->json(['success' => true]);
            } else {
                return response()->json(['error' => 'Gagal menyimpan data.'], 500);
            }
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Terjadi kesalahan internal.'], 500);
        }
        // return($request->all());
    }


        public function getDataProject(Request $request)
        {

            try {
                $bulan = $request->input('bulan');
                $tahun = $request->input('tahun');

                // Execute the stored procedure and fetch data
                $data = DB::connection('ConnUtility')->select('exec SP_1273_UTY_LIST_PROJECT @Kode=?, @bulan=?, @tahun=?', [ 4, $bulan, $tahun]);

                // Jika data ditemukan, kembalikan dalam format yang sesuai

                    return datatables($data)->make(true);

            } catch (\Exception $e) {
                // Tangani kesalahan jika terjadi
                return response()->json(['error' => 'Internal Server Error.'], 500);
            }

        }
        public function deleteDataProject(Request $request)
        {

            $Id = $request->input('id');

            try {
                // Your deletion logic here
                // Example: Delete records from the database based on IDs
                foreach ($Id as $id) {
                    DB::connection('ConnUtility')->statement('exec SP_1273_UTY_MAINT_PROJECT @Id = ?', [$id]);
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
