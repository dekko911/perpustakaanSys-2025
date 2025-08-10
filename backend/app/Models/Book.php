<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'id_buku', // this slug
        'judul_buku',
        'cover_buku', // this image type
        'penulis',
        'pengarang',
        'tahun',
    ];


    /**
     * Relasi One to Many ke tabel Sirkulasi.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<Circulation, Book>
     */
    public function circulations()
    {
        return $this->hasMany(Circulation::class, 'buku_id', 'id');
    }
}
