import React, { Component } from 'react';
import { Link } from '@inertiajs/inertia-react'
import Axios from 'axios'

class index extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.email = React.createRef()
    }
    render() {

        const registrar = async (e) => {
            e.preventDefault();


            let form = this.myRef.current

            let branco = false

            let data = await Axios.post(route('user.register'), {
                name: form[0].value,
                email: form[1].value,
                password: form[2].value,
            }).then(res => res.data)

            validaEmail(this.email.current, data.fail)
        }

        const validaEmail = (e, fail = false) => {

            if(fail) {
                e.classList.add('border-red-500')
            } else {
                e.target.classList.remove('border-red-500')
            }
        }

        return (
            <div className="grid w-screen h-screen place-items-center bg-primary">
                <form ref={this.myRef} onSubmit={registrar} className="border border-quinary rounded bg-secondary px-8 pt-6 pb-8 mb-4">

                    <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2" htmlFor="username"> Nome de Usuário </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Seu @ aqui :3" name="name"/>
                    </div>

                    <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2" htmlFor="email"> E-mail </label>
                    <input ref={this.email} onChange={validaEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Seu e-mail aqui :D"/>
                    </div>

                    <div className="mb-4">
                    <label className="block text-quinary text-sm font-bold mb-2" htmlFor="password">Senha</label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Sua senha aqui :D"/>

                    <label className="block text-quinary text-sm font-bold mb-2" htmlFor="confirm_password">Confirme sua senha</label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm_password" type="password" placeholder="Repita sua senha :D"/>
                    <p className="text-red-500 text-xs italic">Senha incorreta.</p>
                    </div>

                    <div className="mb-4 flex justify-center">
                    <button className="bg-quinary hover:bg-quaternary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Próximo
                    </button>
                    </div>

                    <div>
                    <Link className="inline-block align-baseline font-bold text-sm text-quinary hover:text-quaternary" href="/login">
                        Já tem uma conta? Entre por aqui!
                    </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default index;
