<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'username' => ['required'],
            'password' => ['required', 'confirmed', 'min:8'],
            'avatar' => ['nullable', 'mimes:png,jpg,jpeg,webp', 'max:1024'],
        ], [
            'name.required' => 'Masukkan Nama Anda!',
            'email.required' => 'Masukkan Email Anda!',
            'username.required' => 'Masukkan Username Anda!',
            'password.required' => 'Masukkan Password Anda!',
            'password.confirmed' => 'Samakan Dengan Password Sebelumnya!',
            'password.min' => 'Password Harus Minimal 8 Digit!',
            'avatar.max' => 'Ukuran File Tidak Boleh Melebihi Dari 1mb.',
            'email.email' => 'Masukkan Email Anda Yang Benar!',
            'avatar.mimes' => 'File Haruslah Bertipe png,jpg,webp,jpeg.',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => $request->password,
            'role' => 'user',
            'permissions' => '-',
            'avatar' => '-',
        ]);

        return response()->json([
            'status' => 'User Has Been Created!',
            'user' => $user,
        ]);
    }
}
