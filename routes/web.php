<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware('UserGuest')->group(function () {
    Route::get('/login', [HomeController::class, 'login'])->name('login');
    Route::get('/cadastro', [HomeController::class, 'cadastro'])->name('cadastro');
});

Route::middleware('UserAuth')->group(function () {
    Route::get('/', [HomeController::class, 'home'])->name('home');
    Route::get('/logout', [HomeController::class, 'logOut'])->name('logOut');
});

