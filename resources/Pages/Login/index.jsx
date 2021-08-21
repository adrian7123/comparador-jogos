import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div class="grid w-screen h-screen place-items-center">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> E-mail </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Seu e-mail aqui :D"/>
                    </div>

                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Senha</label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Sua senha aqui :D"/>
                    <p class="text-red-500 text-xs italic">Digite sua senha.</p>
                    </div>

                    <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Entrar
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Esqueci minha senha
                    </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default index;
