<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CirculationController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get(
    '/user',
    fn(Request $request) =>
    $request->user()
)->middleware('auth:sanctum');

Route::middleware('guest')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/register', [RegisterController::class, 'register'])->name('register');
});

Route::middleware(['auth:sanctum', 'ability:manage-users,manage-books,manage-members,manage-circulations'])->group(function () {
    Route::apiResource('users', UserController::class);
    Route::apiResource('members', MemberController::class);
    Route::apiResource('circulations', CirculationController::class);
    Route::apiResource('books', BookController::class);
});

