<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMemberRequest;
use App\Http\Requests\UpdateMemberRequest;
use App\Models\Member;
use Illuminate\Http\Request;
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
        if ($request->file('foto_anggota')) {
            $fileName = Str::random(70);
            $request->file('foto_anggota')->storeAs('profile', $fileName, 'public');
        }

        $member = Member::create([
            'id_anggota' => $request->id_anggota,
            'nama' => $request->nama,
            'jenis_kelamin' => $request->jenis_kelamin,
            'kelas' => $request->kelas,
            'no_telepon' => $request->no_telepon,
            'foto_anggota' => $fileName ?? '-',
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

        if ($request->file('foto_anggota')) {
            if ($member->foto_anggota) {
                Storage::disk('public')->delete("profile/$member->foto_anggota");
            }

            $fileName = Str::random(70);
            $request->file('foto_anggota')->storeAs('profile', $fileName, 'public');
        }

        $member->update([
            'id_anggota' => $request->id_anggota,
            'nama' => $request->nama,
            'jenis_kelamin' => $request->jenis_kelamin,
            'kelas' => $request->kelas,
            'no_telepon' => $request->no_telepon,
        ]);

        if ($request->foto_anggota) {
            $member->update(['foto_anggota' => $fileName]);
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
        if ($member->foto_anggota) {
            Storage::disk('public')->delete("profile/$member->foto_anggota");
        }

        Member::destroy($member->id);

        return response()->json([
            'status' => 'Member telah dihapus!',
        ]);
    }
}
