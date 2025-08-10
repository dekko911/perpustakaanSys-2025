<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        if (!Auth::user()->tokenCan('manage-users')) {
            return response()->json([
                'status' => 'error',
                'message' => 'You not have an access.'
            ], 403);
        }

        $users = User::oldest('created_at')->where(function ($q) {
            $search = request('q');

            if ($search) {
                return $q->where('name', 'like', "%$search%")
                    ->orWhere('email', 'like', "%$search%")
                    ->orWhere('username', 'like', "%$search%")
                    ->orWhere('role', 'like', "%$search%")
                    ->orWhere('permissions', 'like', "%$search%");
            }
        })->get();

        return response()->json([
            'status' => 'OK',
            'users' => $users,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param mixed $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        if (!Auth::user()->tokenCan('manage-users')) {
            return response()->json([
                'status' => 'error',
                'message' => 'You not have an access.'
            ], 403);
        }

        $user = User::findOrFail($id);

        return response()->json([
            'status' => 'OK',
            'user' => $user,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreUserRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreUserRequest $request)
    {
        if ($request->file('avatar')) {
            $fileName = Str::random(70);
            $request->file('avatar')->storeAs('avatar', $fileName, 'public');
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => $request->password,
            'role' => $request->role,
            'permissions' => $request->permissions,
            'avatar' => $fileName ?? '-',
        ]);

        return response()->json([
            'status' => 'User Has Created!',
            'user' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateUserRequest $request
     * @param mixed $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUserRequest $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'role' => $request->role,
            'permissions' => $request->permissions,
        ]);

        if ($request->file('avatar')) {
            if ($user->avatar) {
                Storage::disk('public')->delete("avatar/$user->avatar");
            }

            $fileName = Str::random(70);
            $request->file('avatar')->storeAs('avatar', $fileName, 'public');
        }

        if ($request->password) {
            $user->update(['password' => $request->password]);
        }

        if ($request->avatar) {
            $user->update(['avatar' => $fileName]);
        }

        return response()->json([
            'user' => $user,
            'status' => 'User Has Updated!',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(User $user)
    {
        if (!Auth::user()->tokenCan('manage-users')) {
            return response()->json([
                'status' => 'error',
                'message' => 'You not have an access.'
            ], 403);
        }

        if ($user->avatar) {
            Storage::disk('public')->delete("avatar/$user->avatar");
        }

        User::destroy($user->id);

        return response()->json([
            'status' => 'User Has Deleted!',
        ]);
    }
}
