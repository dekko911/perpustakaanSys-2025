<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->tokenCan('manage-users') || $this->user()->tokenCan('can-create');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'email' => ['required', 'email'],
            'username' => ['required'],
            'password' => ['required', 'confirmed', 'min:8'],
            'role' => ['required'],
            'permissions' => ['required'],
            'avatar' => ['nullable', 'mimes:png,jpg,jpeg,webp', 'max:1024'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array<string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Masukkan Nama Anda!',
            'email.required' => 'Masukkan Email Anda!',
            'username.required' => 'Masukkan Username Anda!',
            'password.required' => 'Masukkan Password Anda!',
            'password.confirmed' => 'Samakan Dengan Password Sebelumnya!',
            'password.min' => 'Password Harus Minimal 8 Digit!',
            'role.required' => 'Masukkan Role Untuk User!',
            'permissions.required' => 'Masukkan Permission Untuk User!',
            'avatar.max' => 'Ukuran File Tidak Boleh Melebihi Dari 1mb.',
            'email.email' => 'Masukkan Email Anda Yang Benar!',
            'avatar.mimes' => 'File Haruslah Bertipe png,jpg,webp,jpeg.',
        ];
    }
}
