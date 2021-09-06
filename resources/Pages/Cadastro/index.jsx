import React, { useRef } from 'react';
import Axios from 'axios'
import { Link } from '@inertiajs/inertia-react'
import {inputGeneric} from '../../utils/form'
import { Inertia } from '@inertiajs/inertia';

export default function index() {

    const loading = useRef()

    let Nome = (e) => inputGeneric(e)
    let Email = (e) => inputGeneric(e)
    let Senha = (e) => inputGeneric(e)
    let ConfirmSenha = (e) => inputGeneric(e)

    const registrar = async (e) => {
        e.preventDefault();

        let formElements = e.target.elements

        let formName = formElements.name
        let formEmail = formElements.email
        let formSenha = formElements.senha
        let formConfirmSenha = formElements.confirmSenha

        let nome = Nome(formName)
        let email = Email(formEmail)
        let senha = Senha(formSenha)
        let confirmSenha = Senha(formConfirmSenha)

        if(
            !nome.isEmpty() && !email.isEmpty() && !senha.isEmpty() &&
            senha.setLength(6) && confirmSenha.isEqual(senha.value)

        ) {
            let res = await Axios.post(route('user.register'), {
                name: nome.value,
                email: email.value,
                password: senha.value,
            }).then(res=>res.data)

            console.log(res)

            if(res.fail) {
                email.setErrorMessage(res.message)
            } else {
                Inertia.get(route('home'))
            }
        }

    }

    return (
        <div className="grid w-screen h-screen place-items-center bg-primary">
            <form onSubmit={registrar} className="border border-quinary rounded bg-secondary px-8 pt-6 pb-8 mb-4">

                <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2" htmlFor="username"> Nome de Usuário </label>
                    <input name="nome" onChange={Nome} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Seu @ aqui :3" name="name"/>
                    <p name="message" className="mt-3 hidden text-red-500 text-xs italic">Nome não pode ser vazio</p>
                </div>

                <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2" htmlFor="email"> E-mail </label>
                    <input name="email" onChange={Email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Seu e-mail aqui :D"/>
                    <p name="message" className="mt-3 hidden text-red-500 text-xs italic">Email não pode ser vazio</p>
                </div>

                <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2 mt-3" htmlFor="password">Senha</label>
                    <input name="senha" onChange={Senha} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Sua senha aqui :D"/>
                    <p name="message" className="mt-3 hidden text-red-500 text-xs italic">Senha deve ter mais de 6 caracteres</p>
                </div>

                <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2 mt-3" htmlFor="confirm_password">Confirme sua senha</label>
                    <input name="confirmSenha" onChange={ConfirmSenha} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Repita sua senha :D"/>
                    <p name="message" className="mt-3 hidden text-red-500 text-xs italic">Senha incorreta.</p>
                </div>

                <div className="mb-4 flex justify-center">
                    <button className="flex bg-quinary hover:bg-quaternary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Próximo
                        <svg ref={loading} className="hidden animate-spin ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </button>
                </div>

                <div>
                    <Link className="inline-block align-baseline font-bold text-sm text-quinary hover:text-quaternary" href="/login">
                        Já tem uma conta? Entre por aqui!
                    </Link>
                </div>
            </form>
        </div>
    )
}

