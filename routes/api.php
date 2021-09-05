<?php

use App\Http\Controllers\Api\UserApi;
use Illuminate\Support\Facades\Route;

Route::post('user.register', [UserApi::class, 'register'])->name('user.register');
Route::post('user.logar', [UserApi::class, 'logar'])->name('user.logar');
Route::post('user.logout', [UserApi::class, 'logOut'])->name('logOut');

