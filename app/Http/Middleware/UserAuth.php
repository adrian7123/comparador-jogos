<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Auth\Auth;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class UserAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        if(Auth::user()) {
            return $next($request);
        }

        return Redirect::route('login');

    }
}
