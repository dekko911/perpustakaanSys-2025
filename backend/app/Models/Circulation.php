<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Circulation extends Model
{
    use HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'id_skl',
        'buku_id', // ini diambil dari table buku pada column judul buku
        'peminjam',
        'tanggal_pinjam',
        'jatuh_tempo',
        'denda',
    ];

    /**
     * Relasi Many to One ke tabel Buku.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<Book, Circulation>
     */
    public function book()
    {
        return $this->belongsTo(Book::class, 'buku_id', 'id');
    }
}
