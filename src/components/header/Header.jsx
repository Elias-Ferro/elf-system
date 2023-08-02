import React from 'react';
import Search from '../../icons/search.jsx';
import Login from '../../icons/login.jsx';

import { TopContainer, LightButton } from '../../style/style.header.jsx'

function Header() {
    return (
        <TopContainer>
            <div>
                <span>Elf System</span>
            </div>
            <LightButton>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </LightButton>

            <div>
                <Search />
            </div>

            <LightButton>
                <button>
                    <Login /> Entrar
                </button>
            </LightButton>

        </TopContainer>
    );
}

export default Header;