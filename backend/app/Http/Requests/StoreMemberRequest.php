<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->tokenCan('manage-members') || $this->user()->tokenCan('can-create');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id_anggota' => ['required'],
            'nama' => ['required'],
            'jenis_kelamin' => ['required'],
            'kelas' => ['required'],
            'no_telepon' => ['required'],
            'foto_anggota' => ['nullable', 'mimes:png,jpg,webp,jpeg', 'max:1024'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array{foto_anggota.max: string, foto_anggota.mimes: string, id_anggota.required: string, jenis_kelamin.required: string, kelas.required: string, nama.required: string, no_telepon.required: string}
     */
    public function messages(): array
    {
        return [
            'id_anggota.required' => 'Masukkan ID Anggota!',
            'nama.required' => 'Masukkan Nama Anda!',
            'jenis_kelamin.required' => 'Isi Jenis Kelamin Anda!',
            'kelas.required' => 'Masukkan Kelas Anda!',
            'no_telepon.required' => 'Masukkan No Telepon Anda!',
            'foto_anggota.mimes' => 'File Haruslah Bertipe png,jpg,webp,jpeg.',
            'foto_anggota.max' => 'Ukuran File Tidak Boleh Melebihi Dari 1mb.',
        ];
    }
}
