<?php

namespace App\Http\Controllers;

use App\Enums\JenisKelaminMember;
use App\Http\Requests\StoreMemberRequest;
use App\Http\Requests\UpdateMemberRequest;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        if (!Auth::user()->tokenCan('manage-members')) {
            return response()->json([
                'status' => 'error',
                'message' => 'You not have an access.'
            ], 403);
        }

        $members = Member::latest('created_at')->where(function ($q) {
            $search = request('q');

            if ($search) {
                return $q->where('id_anggota', 'like', "%$search%")
                    ->orWhere('nama', 'like', "%$search%")
                    ->orWhere('jenis_kelamin', 'like', "%$search%")
                    ->orWhere('kelas', 'like', "%$search%")
                    ->orWhere('no_telepon', 'like', "%$search%");
            }
        })->get();

        return response()->json([
            'status' => 'OK',
            'members' => $members,
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
        if (!Auth::user()->tokenCan('manage-members')) {
            return response()->json([
                'status' => 'error',
                'message' => 'You not have an access.'
            ], 403);
        }

        $member = Member::findOrFail($id);

        return response()->json([
            'status' => 'OK',
            'member' => $member,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreMemberRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreMemberRequest $request)
    {
        if ($request->file('profil_anggota')) {
            $fileName = Str::random(70);
            $request->file('profil_anggota')->storeAs('profil', $fileName, 'public');
        }

        $status = $request->enum('jenis_kelamin', JenisKelaminMember::class);

        $member = Member::create([
            'id_anggota' => $request->id_anggota,
            'nama' => $request->nama,
            'jenis_kelamin' => $status,
            'kelas' => $request->kelas,
            'no_telepon' => $request->no_telepon,
            'profil_anggota' => $fileName ?? '-',
        ]);

        return response()->json([
            'member' => $member,
            'status' => 'Member telah dibuat!',
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateMemberRequest $request
     * @param mixed $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateMemberRequest $request, $id)
    {
        $member = Member::findOrFail($id);

        if ($request->file('profil_anggota')) {
            if ($member->profil_anggota) {
                Storage::disk('public')->delete("profil/$member->profil_anggota");
            }

            $fileName = Str::random(70);
            $request->file('profil_anggota')->storeAs('profil', $fileName, 'public');
        }

        $status = $request->enum('jenis_kelamin', JenisKelaminMember::class);

        $member->update([
            'id_anggota' => $request->id_anggota,
            'nama' => $request->nama,
            'jenis_kelamin' => $status,
            'kelas' => $request->kelas,
            'no_telepon' => $request->no_telepon,
        ]);

        if ($request->profil_anggota) {
            $member->update(['profil_anggota' => $fileName]);
        }

        return response()->json([
            'member' => $member,
            'status' => 'Informasi member telah diubah!',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Member $member
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Member $member)
    {
        if (!Auth::user()->tokenCan('manage-members')) {
            return response()->json([
                'status' => 'error',
                'message' => 'You not have an access.'
            ], 403);
        }

        if ($member->profil_anggota) {
            Storage::disk('public')->delete("profil/$member->profil_anggota");
        }

        Member::destroy($member->id);

        return response()->json([
            'status' => 'Member telah dihapus!',
        ]);
    }
}
