import React from 'react'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Cart, Location, Wrapper } from './Header.style';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

export const Header = ({ className }: any) => {
    const { cartQuantity } = useCart()
    const navigate = useNavigate()

    return (
        <header className={className}>
                <img onClick={() => navigate('/')} src={Logo} alt='Logo Coffee Delivery' />
                <Wrapper>
                    <Location>
                        <MapPin size={24} color='#8047F8' weight="fill" />
                        <p>Porto Alegre, RS</p>
                    </Location>
                    <Cart display={cartQuantity>0 ? 'flex' : 'none'} onClick={() => navigate('/order')}>
                        <div>
                            <p>{cartQuantity}</p>
                        </div>
                        <ShoppingCart size={20} color="#C47F17" weight="fill" />
                    </Cart>
                </Wrapper>
        </header>
    )
 }