import React, { useState } from 'react';
import MenuLateral from '../Layouts/MenuLateral';

function index() {

    const [count, setCount] = useState(0);

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
                        <button onClick="">LogOut</button>
                    </div>
                </div>
            </div>
        </MenuLateral>
    )
}

export default index;
