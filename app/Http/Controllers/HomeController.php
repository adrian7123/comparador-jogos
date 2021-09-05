<?php

namespace App\Http\Controllers;

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
}
