<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCirculationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->tokenCan('manage-circulations') || $this->user()->tokenCan('can-update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id_skl' => ['required'],
            'buku_id' => ['required'],
            'peminjam' => ['required'],
            'tanggal_pinjam' => ['required'],
            'jatuh_tempo' => ['required'],
            'denda' => ['required'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array{buku_id.required: string, denda.required: string, id_skl.required: string, jatuh_tempo.required: string, peminjam.required: string, tanggal_pinjam.required: string}
     */
    public function messages(): array
    {
        return [
            'id_skl.required' => 'Masukkan ID SKL!',
            'buku_id.required' => 'Masukkan Buku Dari Si Peminjam!',
            'peminjam.required' => 'Masukkan Nama Peminjam!',
            'tanggal_pinjam.required' => 'Masukkan Tanggal Pinjam nya!',
            'jatuh_tempo.required' => 'Isi Jatuh Tempo nya!',
            'denda.required' => 'Masukkan Denda Jika Si Peminjam Telat Mengembalikan!',
        ];
    }
}
