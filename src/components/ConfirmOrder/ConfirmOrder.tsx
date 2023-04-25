import React from 'react'
import { Button, Title, Wrapper } from './ConfirmOrder.Style'
import { CoffeeSelected } from '../CoffeeSelected/CoffeeSelected'
import { useCart } from '../../hooks/useCart'
import { formatMoney } from '../CoffeeSelected/CoffeeSelected'

export const ConfirmOrder = () => {
    const { cartItems, cartItemsTotal } = useCart()
    let totalPrice = cartItemsTotal + 3.5
    return (
        <React.Fragment>
            <Wrapper>

                {cartItems.map((coffee) => (
                    <CoffeeSelected key={coffee.id} coffee={coffee}/>
                ))}
                
                <Title>
                    <h4>Total de itens</h4>
                    <h3>R$ {formatMoney(cartItemsTotal)}</h3>
                </Title>
                <Title>
                    <h4>Entrega</h4>
                    <h3>R$ 3,50</h3>
                </Title>
                <Title>
                    <h2>Total</h2>
                    <h2>R$ {formatMoney(totalPrice)}</h2>
                </Title>
                <Button>confirmar pedido</Button>
            </Wrapper>
        </React.Fragment>
    )
}