<?php

use App\Http\Controllers\Api\UserApi;
use Illuminate\Support\Facades\Route;

Route::post('register', [UserApi::class, 'register']);
