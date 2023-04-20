import React from 'react'
import { Button, Title, Wrapper } from './ConfirmOrder.Style'
import { CoffeeSelected } from '../CoffeeSelected/CoffeeSelected'

export const ConfirmOrder = () => {
    return (
        <React.Fragment>
            <Wrapper>
                <CoffeeSelected />
                <CoffeeSelected />
                <Title>
                    <h4>Total de itens</h4>
                    <h3>R$ 29,70</h3>
                </Title>
                <Title>
                    <h4>Entrega</h4>
                    <h3>R$ 3,50</h3>
                </Title>
                <Title>
                    <h2>Total</h2>
                    <h2>R$ 33,20</h2>
                </Title>
                <Button>confirmar pedido</Button>
            </Wrapper>
        </React.Fragment>
    )
}