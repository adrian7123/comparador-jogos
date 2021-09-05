import React from 'react';

function LineW() {
    return (
        <div className="w-full h-1 bg-purple-700 m-5 ml-0 mx-10"></div>
    )
}

function MenuLateral(props) {
    return (
        <div className="flex text-white bg-primary">
            <div className="bg-gray-600 h-screen w-1/5 pl-4 pt-4 pr-1 mr-5">
                <div id="user_data" className="flex ">
                    <div className="bg-blue-500 h-20 w-20 mr-4"></div>
                    <div>Nome de Usuario</div>
                </div>
                <div id="user_computer" className="">
                    <LineW/>
                        Computadores
                    <LineW/>
                </div>
                <div id="user_games" className="">
                    <LineW/>
                        Jogos
                    <LineW/>
                </div>
            </div>
            <div className="block">
                {props.children}
            </div>
        </div>
    );
}

export default MenuLateral;
