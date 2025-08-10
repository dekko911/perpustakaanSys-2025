<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        if (!Auth::user()->tokenCan('manage-books')) {
            return response()->json([
                'status' => 'error',
                'message' => 'You not have an access.'
            ], 403);
        }

        $books = Book::latest('created_at')->where(function ($q) {
            $search = request('q');

            if ($search) {
                return $q->where('id_buku', 'like', "%$search%")
                    ->orWhere('judul_buku', 'like', "%$search%")
                    ->orWhere('penulis', 'like', "%$search%")
                    ->orWhere('pengarang', 'like', "%$search%")
                    ->orWhere('tahun', 'like', "%$search%");
            }
        })->get();

        return response()->json([
            'books' => $books,
            'status' => 'OK'
        ]);
    }

    /**
     * Displaying the specified resource.
     *
     * @param mixed $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        if (!Auth::user()->tokenCan('manage-books')) {
            return response()->json([
                'status' => 'error',
                'message' => 'You not have an access.'
            ], 403);
        }

        $book = Book::findOrFail($id);

        return response()->json([
            'status' => 'OK',
            'book' => $book,
        ]);
    }

    /**
     * Mencari spesifik data menggunakan slug.
     *
     * @param mixed $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function slug($slug)
    {
        $book = Book::where('id_buku', $slug)->first();

        return response()->json([
            'status' => 'OK',
            'book' => $book,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreBookRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreBookRequest $request)
    {
        if ($request->file('cover_buku')) {
            $fileName = Str::random(70);
            $request->file('cover_buku')->storeAs('books', $fileName, 'public');
        }

        $book = Book::create([
            'id_buku' => $request->id_buku,
            'judul_buku' => $request->judul_buku,
            'cover_buku' => $fileName ?? '-',
            'penulis' => $request->penulis,
            'pengarang' => $request->pengarang,
            'tahun' => $request->tahun,
        ]);

        return response()->json([
            'book' => $book,
            'status' => 'Buku telah dibuat!'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateBookRequest $request
     * @param mixed $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateBookRequest $request, $id)
    {
        $book = Book::findOrFail($id);

        if ($request->file('cover_buku')) {
            if ($book->cover_buku) {
                Storage::disk('public')->delete("books/$book->cover_buku");
            }

            $fileName = Str::random(70);
            $request->file('cover_buku')->storeAs('books', $fileName, 'public');
        }

        $book->update([
            'id_buku' => $request->id_buku,
            'judul_buku' => $request->judul_buku,
            'penulis' => $request->penulis,
            'pengarang' => $request->pengarang,
            'tahun' => $request->tahun,
        ]);

        if ($request->cover_buku) {
            $book->update(['cover_buku' => $fileName]);
        }

        return response()->json([
            'book' => $book,
            'status' => 'Informasi buku telah diperbaharui!',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Book $book
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Book $book)
    {
        if (!Auth::user()->tokenCan('manage-books')) {
            return response()->json([
                'status' => 'error',
                'message' => 'You not have an access.'
            ], 403);
        }

        if ($book->cover_buku) {
            Storage::disk('public')->delete("books/$book->cover_buku");
        }

        Book::destroy($book->id);

        return response()->json([
            'status' => 'Buku telah dihapus!'
        ]);
    }
}
