<?php

namespace App\Models;

use App\Enums\JenisKelaminMember;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'id_anggota', // this slug
        'nama',
        'jenis_kelamin', // this enum type
        'kelas',
        'no_telepon',
        'profil_anggota' // this image type
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string>
     */
    protected function casts(): array
    {
        return [
            'jenis_kelamin' => JenisKelaminMember::class,
        ];
    }
}
