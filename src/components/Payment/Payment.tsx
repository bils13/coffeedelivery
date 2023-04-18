import React from 'react'
import { Option, Pay, PaymentOptions, Title, Wrapper } from './Payment.style'
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'

export const Payment = () => {
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
                    <Option>
                        <CreditCard size={18} color="#8047F8" />
                        Cartão de crédito</Option>
                    <Option>
                        <Bank size={18} color="#8047F8" />
                        Cartão de débito</Option>
                    <Option>
                        <Money size={18} color="#8047F8" />
                        Dinheiro</Option>
                </PaymentOptions>
            </Wrapper>
        </React.Fragment>
    )
}