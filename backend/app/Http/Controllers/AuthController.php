<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    private $request;

    /**
     * whatever your like to put in here.
     *
     * @param \Illuminate\Http\Request $authRequest
     */
    public function __construct(Request $authRequest)
    {
        $this->request = $authRequest;
    }

    /**
     * For checking input login is using email or username.
     *
     * @return array
     */
    protected function credentials(): array
    {
        $login = $this->request->validate([
            'login' => ['required'],
        ], [
            'login.required' => 'Masukkan Email Atau Username Anda!',
        ]);

        if (filter_var($login, FILTER_VALIDATE_EMAIL)) {
            return ['email' => $login, 'password' => $this->request->input('password')];
        }

        return ['username' => $login, 'password' => $this->request->input('password')];
    }

    /**
     * For authenticate the user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        if (Auth::attempt($this->credentials(), $this->request->boolean('remember'))) {
            $user = User::where('email', $this->credentials())->orWhere('username', $this->credentials())->first();

            $token = $user->createToken($user->name, (array) $user->permissions, now('Asia/Kuala_Lumpur')->addHours(6));

            return response()->json([
                'status' => 'success',
                'token' => $token,
                'user' => $user,
            ]);
        }

        return response()->json([
            'status' => 'failed',
            'message' => 'Salah Email || Username || Password !'
        ]);
    }
}
