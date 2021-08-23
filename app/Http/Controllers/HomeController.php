<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function login()
    {
        return Inertia::render('Login');
    }

    public function cadastro()
    {
        return Inertia::render('Cadastro');
    }

    public function logOut()
    {
        $cookie = Cookie::forget('jwt');

        return Redirect::route('home')->withCookie($cookie);
    }
}
