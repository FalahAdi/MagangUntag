<?php

namespace App\Http\Controllers\Utility\Elektrik;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Http\Controllers\HakAksesController;
use PhpParser\Node\Stmt\TryCatch;

$fileContent = Storage::get('webdictionary.txt');
echo $fileContent;

class InputGangguanElektrikController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $divisi = DB::connection('ConnUtility')->select('exec SP_LIST_DIVISI_PELAPOR');
        $teknisi = DB::connection('ConnUtility')->select('exec SP_LIST_TEKNISI_ELEKTRIK');
        $access = (new HakAksesController)->HakAksesFiturMaster('Utility');
        return view('Utility.Elektrik.InputGangguan.InputGangguan', compact('teknisi', 'divisi', 'access'));
    }

    public function postData(Request $request)
    {
        try {
            // dd($request->all());
            $tanggal = $request->input('tanggal');
            $l_div_pelapor = $request->input('divisi_pelapor1');
            $nama_pelapor = $request->input('nama_pelapor');
            $penerima_laporan = $request->input('penerima_laporan');
            $jamlapor = $request->input('jam_lapor');
            $jampelaksanaan = $request->input('jam_perbaikan');
            $jamselesai = $request->input('jam_selesai');
            $Type_gangguan = $request->input('tipe_gangguan');
            $penyebab = $request->input('penyebab');
            $penyelesaian = $request->input('penyelesaian');
            $keterangan = $request->input('keterangan');
            $teknisi = $request->input('teknisi');
            $lanjut = $request->input('agree');
            $ketGambar1 = $request->input('ketgambar1');
            $ketGambar2 = $request->input('ketgambar2');
            $user_input = Auth::user()->NomorUser;

            $image = $request->file('gambar1data');
            $imageBinary = null;
            if ($image) {
                $binaryReader = fopen($image, 'rb');
                $imageBinary = fread($binaryReader, $image->getSize());
                fclose($binaryReader);
            }

            // gambar 2
            $image2 = $request->file('gambar2data');
            $imageBinary2 = null;
            if ($image2) {
                $binaryReader2 = fopen($image2, 'rb');
                $imageBinary2 = fread($binaryReader2, $image2->getSize());
                fclose($binaryReader2);
            }

            DB::connection('ConnUtility')->statement('exec SP_INSERT_GANGGUAN_ELEKTRIK ?,?,?,?,?,?,?,?,?,?,?,?,?,?', [
                $tanggal,
                $l_div_pelapor,
                $nama_pelapor,
                $penerima_laporan,
                $jamlapor,
                $jampelaksanaan,
                $jamselesai,
                $Type_gangguan,
                $penyebab,
                $penyelesaian,
                $keterangan,
                $teknisi,
                $lanjut,
                $user_input
            ]);

            $insertedId = DB::connection('ConnUtility')->getPdo()->lastInsertId();

            $save = DB::connection('ConnUtility')->table('GAMBAR_ELEKTRIK')->insert([
                'IdLaporan' => $insertedId,
                'Gambar1' => $imageBinary ? DB::raw('0x' . bin2hex($imageBinary)) : null,
                'KeteranganGambar1' => $imageBinary ? $ketGambar1 : null,
                'Gambar2' => $imageBinary2 ? DB::raw('0x' . bin2hex($imageBinary2)) : null,
                'KeteranganGambar2' => $imageBinary2 ? $ketGambar2 : null,
                'UserInput' => $user_input,
                'UserKoreksi' => null,
            ]);

            return response()->json(['success' => true, 'data' => $save]);
        } catch (\Throwable $th) {
            report($th);
            return $th;
        }
    }

    public function getData(Request $request)
    {

        $tanggal1 = $request->input('tanggal1');
        $tanggal2 = $request->input('tanggal2');
        $l_div_pelapor = $request->input('divisi');
        $data = DB::connection('ConnUtility')->select('exec SP_DT_LIST_GANGGUAN_ELEKTRIK_BLN_THN2 @date1 = ?, @date2 = ?,  @divisi = ?', [$tanggal1, $tanggal2, $l_div_pelapor]);
        return datatables($data)->make(true);
    }
    public function deleteData(Request $request)
    {

        $Id_Laporan = $request->input('id');

        try {
            foreach ($Id_Laporan as $id) {
                DB::connection('ConnUtility')->statement('exec SP_HAPUS_GANGGUAN_ELEKTRIK @id_laporan = ?', [$id]);
                DB::connection('ConnUtility')->table('GAMBAR_ELEKTRIK')->where('IdLaporan', $id)->delete();
            }

            return response()->json(['success' => true, 'message' => 'Data deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Error deleting data: ' . $e->getMessage()]);
        }
    }


    public function updateData(Request $request)
    {
        try {
            $id_laporan = $request->input('Idlaporan');
            $jampelaksanaan = $request->input('jam_perbaikan');
            $jamselesai = $request->input('jam_selesai');
            $type_gangguan = $request->input('tipe_gangguan');
            $penyebab = $request->input('penyebab');
            $penyelesaian = $request->input('penyelesaian');
            $keterangan = $request->input('keterangan');
            $teknisi = $request->input('teknisi');
            $user_input = Auth::user()->NomorUser;
            $lanjut = $request->input('agree');

            $data = DB::connection('ConnUtility')->statement('exec SP_KOREKSI_GANGGUAN_ELEKTRIK ?,?,?,?,?,?,?,?,?,?', [
                $jampelaksanaan,
                $jamselesai,
                $type_gangguan,
                $penyebab,
                $penyelesaian,
                $keterangan,
                $teknisi,
                $user_input,
                $id_laporan,
                $lanjut
            ]);


            if ($data) {
                return response()->json(['success' => true]);
            } else {
                return response()->json(['error' => 'Gagal update data.'], 500);
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
