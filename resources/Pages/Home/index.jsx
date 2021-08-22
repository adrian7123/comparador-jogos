import React, { useState } from 'react';
import MenuLateral from '../Components/MenuLateral';

function index() {

    const [count, setCount] = useState(0);

    console.log(route('login'))

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
                    </div>
                </div>
            </div>
        </MenuLateral>
    )
}

export default index;
