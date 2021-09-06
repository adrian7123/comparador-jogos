import React, { Component, useRef } from 'react';
import { Link } from '@inertiajs/inertia-react'
import { inputGeneric } from '../../utils/form';
import Axios from 'axios'
import { Inertia } from '@inertiajs/inertia'

export default function index() {

    let Email = (e) => inputGeneric(e)
    let Senha = (e) => inputGeneric(e)

    const loading = useRef()

    async function Logar(element) {
        element.preventDefault()
        let formElements = element.target.elements

        let formEmail = formElements.email
        let formSenha = formElements.senha

        let email = Email(formEmail)
        let senha = Senha(formSenha)

        if(!email.isEmpty() || !senha.isEmpty()) {
            let data = {
                email: email.value,
                password: senha.value
            }

            loading.current.classList.remove('hidden')

            let res = await Axios.post(route('user.logar'), data).then(res=>res.data)

            loading.current.classList.add('hidden')

            if(res.fail) {
                formSenha.value = ''
                email.setErrorMessage(res.message)
            } else {
                Inertia.get(route('home'), {}, {
                    replace: true
                })
            }
        }

    }

    return (
        <div className="grid w-screen h-screen place-items-center bg-primary">
            <form onSubmit={Logar} className="border border-quinary rounded bg-secondary px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2" htmlFor="username"> E-mail </label>
                    <input name="email" onChange={Email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Seu e-mail aqui :D"/>
                    <p name="message" className="hidden text-red-500 text-xs mt-3 italic">Digite seu Email.</p>
                </div>

                <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2" htmlFor="password">Senha</label>
                    <input name="senha" onChange={Senha} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Sua senha aqui :D"/>
                    <p name="message" className="hidden text-red-500 text-xs mt-3 italic">Digite sua senha.</p>
                </div>

                <div className="mb-4 flex justify-center">
                    <button className="flex bg-quinary hover:bg-quaternary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        <span>Entrar</span>
                        <svg ref={loading} className="hidden animate-spin ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </button>
                </div>

                <div>
                    <Link className="inline-block align-baseline font-bold text-sm text-quinary hover:text-quaternary" href="/cadastro">
                        Não tem uma conta? Cadastre-se aqui!
                    </Link>
                </div>
            </form>
        </div>
    )
}
