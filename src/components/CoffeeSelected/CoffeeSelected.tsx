import React from 'react'
import { Amount, Amounts, Coffee, Line, Wrapper, WrapperAmount, WrapperTrash } from './CoffeeSelected.style'
import Tradicional from '../../assets/coffees/tradicional.svg'
import { Trash } from '@phosphor-icons/react'

export const CoffeeSelected = () => {
    return(
        <React.Fragment>
            <Wrapper>
                <Coffee>
                    <img src={Tradicional} alt='Café tradicional' />
                    <Amount>
                        <h3>Expresso Tradicional</h3>
                        <Amounts>
                            <WrapperAmount>
                                <p>-</p>
                                <h4>1</h4>
                                <p>+</p>
                            </WrapperAmount>
                            <WrapperTrash>
                                <Trash size={14} color="#8047F8" />
                                <h4>Remover</h4>
                            </WrapperTrash>
                        </Amounts>
                    </Amount>
                    <h3>R$ 9,90</h3>
                </Coffee>
                <Line />
            </Wrapper>
        </React.Fragment>
    )
}