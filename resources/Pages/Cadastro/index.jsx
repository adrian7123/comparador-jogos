import React, { Component } from 'react';
import { Link } from '@inertiajs/inertia-react'

class index extends Component {
    render() {
        return (
            <div class="grid w-screen h-screen place-items-center bg-primary">
                <form class="border border-quinary rounded bg-secondary px-8 pt-6 pb-8 mb-4">

                    <div class="mb-4">
                    <label class="block text-quinary text-sm font-bold mb-2" for="email"> Nome de Usuário </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Seu @ aqui :3"/>
                    </div>

                    <div class="mb-4">
                    <label class="block text-quinary text-sm font-bold mb-2" for="email"> E-mail </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Seu e-mail aqui :D"/>
                    </div>

                    <div class="mb-4">
                    <label class="block text-quinary text-sm font-bold mb-2" for="password">Senha</label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Sua senha aqui :D"/>

                    <label class="block text-quinary text-sm font-bold mb-2" for="password">Confirme sua senha</label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Repita sua senha :D"/>
                    <p class="text-red-500 text-xs italic">Senha incorreta.</p>
                    </div>

                    <div class="mb-4 flex justify-center">
                    <button class="bg-quinary hover:bg-quaternary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Próximo
                    </button>
                    </div>

                    <div>
                    <Link class="inline-block align-baseline font-bold text-sm text-quinary hover:text-quaternary" href="/login">
                        Já tem uma conta? Entre por aqui!
                    </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default index;
