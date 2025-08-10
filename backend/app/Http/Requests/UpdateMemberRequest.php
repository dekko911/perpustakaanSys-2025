<?php

namespace App\Http\Requests;

use App\Enums\JenisKelaminMember;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class UpdateMemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->tokenCan('manage-members') || $this->user()->tokenCan('can-update');
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
            'jenis_kelamin' => ['required', new Enum(JenisKelaminMember::class)],
            'kelas' => ['required'],
            'no_telepon' => ['required'],
            'profil_anggota' => ['nullable', 'mimes:png,jpg,webp,jpeg', 'max:1024'],
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
            'id_anggota.required' => 'Masukkan ID Anggota!',
            'nama.required' => 'Masukkan Nama Anda!',
            'jenis_kelamin.required' => 'Isi Jenis Kelamin Anda!',
            'kelas.required' => 'Masukkan Kelas Anda!',
            'no_telepon.required' => 'Masukkan No Telepon Anda!',
            'profil_anggota.mimes' => 'File Haruslah Bertipe png,jpg,webp,jpeg.',
            'profil_anggota.max' => 'Ukuran File Tidak Boleh Melebihi Dari 1mb.',
        ];
    }
}
