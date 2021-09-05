<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Auth\Auth;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Services\ResponseService;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Redirect;

class UserApi extends Controller
{
    use ResponseService;

    public function register(Request $r)
    {

        if(array_key_exists('ted', $_COOKIE)) {
            $token = Cookie::forget('ted');
        }

        $required = [
            'name',
            'email',
            'password'
        ];

        $data = $r->all();

        $on_data = [];
        foreach($required as $att) {
            if(!array_key_exists($att, $data)) {
                $on_data[] = $att;
            }
        }

        if(!empty($on_data)) {
            return $this->errorMessage('falta de parametros', $on_data);
        }

        $user = User::where('email', $r->email)->first();

        if(!empty($user)) {
            return $this->errorMessage('Email já cadastrado', ['email']);
        }

        $user = User::create($data);

        $auth = new Auth;

        $token = $auth->gerarToken([
            'email' => $user->email,
            'password' => $user->password
        ]);

        return response($this->successMessage('sucesso'))->withCookie(cookie('ted', $token));
    }

    public function logar(Request $r)
    {
        $required = [
            'email',
            'password'
        ];

        $data = $r->all();

        $on_data = [];
        foreach($required as $att) {
            if(!array_key_exists($att, $data)) {
                $on_data[] = $att;
            }
        }

        if(!empty($on_data)) {
            return $this->errorMessage('falta de parametros', $on_data);
        }

        $user = User::where('email', $data['email'])->where('password', md5($data['password']))->first();

        if(empty($user)) {
            return $this->errorMessage('Email ou senha invalidos', ['email']);
        }

        $auth = new Auth;

        $token = $auth->gerarToken([
            'email' => $user->email,
            'password' => $user->password
        ]);

        return response($this->successMessage('sucesso'))->withCookie(cookie('ted', $token));
    }

    public function logOut()
    {
        $cookie = Cookie::forget('ted');

        return Redirect::route('home')->withCookie($cookie);
    }
}
