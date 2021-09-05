import React, { useState } from 'react';
import MenuLateral from '../Layouts/MenuLateral';
import { Inertia } from '@inertiajs/inertia'

function index() {

    const [count, setCount] = useState(0);

    function logOut() {
        Inertia.post(route('user.logOut'),{},{redirect:true})
    }

    return (
        <MenuLateral>
            <div className="text-lg text-center">
                <div className="block">
                    <div>
                        Jogos do momento
                    </div>
                    <div className="block">
                        <h1 className="text-lg">{count}</h1>

                        <button onClick={() => setCount(count + 1)}>+</button>
                        <button onClick={() => logOut()}>LogOut</button>
                    </div>
                </div>
            </div>
        </MenuLateral>
    )
}

export default index;
