<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->tokenCan('manage-books') || $this->user()->tokenCan('can-create');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id_buku' => ['required'],
            'judul_buku' => ['required'],
            'cover_buku' => ['nullable', 'mimes:png,jpg,webp,jpeg', 'max:1024'],
            'penulis' => ['required'],
            'pengarang' => ['required'],
            'tahun' => ['required'],
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
            'id_buku.required' => 'Masukkan ID Buku!',
            'judul_buku.required' => 'Masukkan Judul Buku!',
            'cover_buku.mimes' => 'File Haruslah Bertipe png,jpg,webp,jpeg.',
            'cover_buku.max' => 'Ukuran File Tidak Boleh Melebihi Dari 1mb.',
            'penulis.required' => 'Masukkan Penulis Buku Yang Dipinjam!',
            'pengarang.required' => 'Masukkan Pengarang Buku Yang Dipinjam!',
            'tahun.required' => 'Masukkan Tahun Terbit Buku!',
        ];
    }
}
