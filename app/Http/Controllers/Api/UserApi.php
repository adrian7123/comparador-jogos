<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Services\ResponseService;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserApi extends Controller
{
    use ResponseService;

    public function register(Request $r)
    {

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

        Auth::login($user);

        return $this->successMessage('sucesso');
    }

    public function login(Request $r)
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

        $user = User::where('email', $data['email'])->where('password', $data['password'])->first();

        if(empty($user)) {
            return $this->errorMessage('Email ou senha invalidos', ['email']);
        }

        return [];


    }
}
