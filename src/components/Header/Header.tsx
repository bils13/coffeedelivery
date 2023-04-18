import React from 'react'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Cart, Location, Wrapper } from './Header.style';

export const Header = ({ className }: any) => {
    return (
        <header className={className}>
            <img src={Logo} alt='Logo Coffee Delivery' />
            <Wrapper>
                <Location>
                    <MapPin size={24} color='#8047F8' weight="fill" />
                    <p>Porto Alegre, RS</p>
                </Location>
                <Cart display='none'>
                    <div>
                        <p>3</p>
                    </div>
                    <ShoppingCart size={20} color="#C47F17" weight="fill" />
                </Cart>
            </Wrapper>
        </header>
    )
 }