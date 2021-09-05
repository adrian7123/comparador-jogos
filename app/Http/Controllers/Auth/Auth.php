<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Exception;

class Auth
{

  private $key = 'Adrian';

  public function gerarToken(array $attributes): string
  {
    $header = [
      'alg' => 'HS256',
      'typ' => 'JWT'
    ];

    $header = json_encode($header);
    $header = base64_encode($header);

    $payload = $attributes;
    $payload = json_encode($payload);
    $payload = base64_encode($payload);

    $signature = hash_hmac('sha256', "$header.$payload", $this->key, true);
    $signature = base64_encode($signature);

    return "$header.$payload.$signature";
  }

  public function validaToken(string $token)
  {
    $part = explode(".", $token);
    $header = $part[0];
    $payload = $part[1];
    $signature = $part[2];

    $valid = hash_hmac('sha256', "$header.$payload", $this->key, true);
    $valid = base64_encode($valid);

    $data = base64_decode($payload);

    if ($signature == $valid) {
      return json_decode($data, true);
    } else {
      return false;
    }
  }

  public static function admin(): bool
  {
    $token = key_exists('ted', $_COOKIE) ? $_COOKIE['ted'] : null;

    if ($token == md5('admin')) {
      return true;
    } else {
      return false;
    }
  }

  public static function user(): bool
  {
    $token = key_exists('ted', $_COOKIE) ? $_COOKIE['ted'] : null;

    if($token == null) {
        return false;
    }

    $valid = false;

    $auth = new Auth;
    $userData = $auth->validaToken($token);

    $user = null;

    try {
        $user = User::where('email', $userData['email'])->where('password', $userData['password'])->first();
    } catch(Exception $e) {
        $valid = false;
    }

    if(!empty($user)) {
        $valid = true;
    }


    return $valid;
  }
}
