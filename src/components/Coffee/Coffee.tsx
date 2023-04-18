import React from 'react'
import { Amount, Cart, Coffees, CoffeeBuy, CoffeeCard, CoffeeTag, Wrapper, Coffee, ListCoffee } from './Coffee.style'
import { coffee as CoffeObj } from '../../data/coffee'
import { ShoppingCart } from '@phosphor-icons/react'

export const CoffeeList = () => {
    return (
        <React.Fragment>
            <ListCoffee>
            <Coffee>
            <h3>Nossos cafés</h3>
                <Coffees>
                    {CoffeObj.map((coffee) => 
                        <CoffeeCard>
                            <img src={`../src/assets/coffees/${coffee.img}`} alt={coffee.name}/>
                            <CoffeeTag>
                                {coffee.tag.map((tag) => <label>{tag}</label>)}
                            </CoffeeTag>
                            <h3>{coffee.name}</h3>
                            <p>{coffee.desc}</p>
                            <CoffeeBuy>
                                <h4>
                                    <span>R$</span>
                                    {coffee.price}
                                </h4>
                                <Amount>
                                    <Wrapper>
                                        <p>-</p>
                                        <h4>1</h4>
                                        <p>+</p>
                                    </Wrapper>
                                    <Cart>
                                        <ShoppingCart size={24} color="#ffffff" weight="fill" />
                                    </Cart>
                                </Amount>
                            </CoffeeBuy>
                        </CoffeeCard>
                    )}
                </Coffees>
            </Coffee>
            </ListCoffee>
        </React.Fragment>
    )
}