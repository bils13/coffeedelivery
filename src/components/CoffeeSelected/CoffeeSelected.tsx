import React from 'react'
import { Amount, Amounts, Coffee, Line, Wrapper, WrapperAmount, WrapperTrash } from './CoffeeSelected.style'
import Tradicional from '../../assets/tradicional.svg'
import { Trash } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'
import { CartItem } from '../../context/Cart'

interface CoffeeCartCardProps {
    coffee: CartItem;
}

export function formatMoney(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
}

export const CoffeeSelected = ({ coffee }: CoffeeCartCardProps) => {
    let coffeUrlObject = Object.values(coffee.img)
    let coffeeUrlString = JSON.stringify(coffeUrlObject)
    let coffeeUrlRe = coffeeUrlString.replace(/[\([{"})\]]/g, '')
    const { changeCartItemQuantity, removeCartItem } = useCart()

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, 'increase')
    }

    function handleDecrease() {
        coffee.quantity>0 && changeCartItemQuantity(coffee.id, 'decrease')
    }

    function handleRemove() {
        removeCartItem(coffee.id)
    }

    let coffeePrice = coffee.price * coffee.quantity
    console.log(Tradicional)
    return(
        <React.Fragment>
            <Wrapper>
                <Coffee>
                    <img src={coffeeUrlRe} alt={coffee.name} />
                    <Amount>
                        <h3>{coffee.name}</h3>
                        <Amounts>
                            <WrapperAmount>
                                <p onClick={handleDecrease}>-</p>
                                <h4>{coffee.quantity}</h4>
                                <p onClick={handleIncrease}>+</p>
                            </WrapperAmount>
                            <WrapperTrash onClick={handleRemove}>
                                <Trash size={14} color="#8047F8" />
                                <h4>Remover</h4>
                            </WrapperTrash>
                        </Amounts>
                    </Amount>
                    <h3>R$ {formatMoney(coffeePrice)}</h3>
                </Coffee>
                <Line />
            </Wrapper>
        </React.Fragment>
    )
}