import React, { Component } from 'react';
import { Link } from '@inertiajs/inertia-react'

class index extends Component {
    render() {
        return (
            <div className="grid w-screen h-screen place-items-center bg-primary">
                <form className="border border-quinary rounded bg-secondary px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2" for="username"> E-mail </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Seu e-mail aqui :D"/>
                    </div>

                    <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2" for="password">Senha</label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Sua senha aqui :D"/>
                    <p className="text-red-500 text-xs italic">Digite sua senha.</p>
                    </div>

                    <div className="mb-4 flex justify-center">
                    <button className="bg-quinary hover:bg-quaternary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Entrar
                    </button>
                    </div>

                    <div>
                    <Link className="inline-block align-baseline font-bold text-sm text-quinary hover:text-quaternary" href="/cadastro">
                        Não tem uma conta? Cadastre-se aqui!
                    </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default index;
