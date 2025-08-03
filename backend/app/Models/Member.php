<?php

namespace App\Models;

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
        'id_anggota',
        'nama',
        'jenis_kelamin', // this enum type
        'kelas',
        'no_telepon',
        'profil_anggota' // this image type
    ];
}
