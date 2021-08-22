<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

trait ResponseService
{
    public function errorMessage(string $message, array $campos = null)
    {
        return response()->json([
            "fail" => true,
            "message" => $message,
            "campos" => $campos
        ]);
    }

    public function successMessage(string $message)
    {
        return response()->json([
            "fail" => false,
            "message" => $message
        ]);
    }
}
