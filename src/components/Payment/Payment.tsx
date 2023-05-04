import React, { useState } from 'react'
import { Option, Pay, PaymentOptions, Title, Wrapper } from './Payment.style'
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'

export const Payment = ({ handleClick }: any) => { 
    return (
        <React.Fragment>
            <Wrapper>
                <Pay>
                    <CurrencyDollar size={22} color="#8047F8" />
                    <Title>
                        Pagamento
                        <h4>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h4>
                    </Title>
                </Pay>
                <PaymentOptions>
                    <Option value='Cartão de Crédito' onClick={handleClick}>
                        <CreditCard size={18} color="#8047F8" />
                        Cartão de crédito</Option>
                    <Option value='Cartão de Débito' onClick={handleClick}>
                        <Bank size={18} color="#8047F8"/>
                        Cartão de débito</Option>
                    <Option value='Dinheiro' onClick={handleClick}>
                        <Money size={18} color="#8047F8"/>
                        Dinheiro</Option>
                </PaymentOptions>
            </Wrapper>
        </React.Fragment>
    )
}