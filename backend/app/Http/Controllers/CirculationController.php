<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCirculationRequest;
use App\Http\Requests\UpdateCirculationRequest;
use App\Models\Circulation;
use Illuminate\Http\Request;

class CirculationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $circulations = Circulation::latest('created_at')->with(['buku'])->where(function ($q) {
            $search = request('q');

            if ($search) {
                return $q->where('id_skl', 'like', "%$search%")
                    ->orWhere('peminjam', 'like', "%$search%")
                    ->orWhere('tanggal_pinjam', 'like', "%$search%")
                    ->orWhere('jatuh_tempo', 'like', "%$search%")
                    ->orWhere('denda', 'like', "%$search%")
                    ->orWhereRelation('buku', 'judul_buku', 'like', "%$search%");
            }
        })->get();

        return response()->json([
            'status' => 'OK',
            'circulations' => $circulations,
        ]);
    }

    /**
     * Displaying the specified resource.
     *
     * @param mixed $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $circulation = Circulation::findOrFail($id);

        return response()->json([
            'status' => 'OK',
            'circulation' => $circulation,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreCirculationRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreCirculationRequest $request)
    {
        $circulation = Circulation::create($request->validated());

        return response()->json([
            'circulation' => $circulation,
            'status' => 'Sirkulasi telah dibuat!',
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateCirculationRequest $request
     * @param mixed $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateCirculationRequest $request, $id)
    {
        $circulation = Circulation::findOrFail($id);

        $circulation->update($request->validated());

        return response()->json([
            'circulation' => $circulation,
            'status' => 'Informasi sirkulasi telah diperbaharui!',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param mixed $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Circulation::destroy($id);

        return response()->json([
            'status' => 'Data telah dihapus!',
        ]);
    }
}
