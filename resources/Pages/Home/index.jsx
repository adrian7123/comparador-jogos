import React, { Component } from 'react';
import MenuLateral from '../Components/MenuLateral';

function Square() {
    return (
        <div className="h-20 w-16 bg-secundary"></div>
    )
}

class index extends Component {
    render() {
        return (
            <MenuLateral>
                <div className="text-lg text-center">
                    <div className="block">
                        <div>
                            Jogos do momento
                        </div>
                        <div className="flex overflow-x-scroll">
                            <Square/>
                            <Square/>
                            <Square/>
                            <Square/>

                        </div>
                    </div>
                </div>
            </MenuLateral>
        );
    }
}

export default index;
