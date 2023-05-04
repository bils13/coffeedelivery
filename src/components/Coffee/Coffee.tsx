import React, { useContext, useState } from 'react'
import { Amount, Cart, CoffeeBuy, CoffeeCard, CoffeeTag, Wrapper } from './Coffee.style'
import { ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'
import { formatMoney } from '../CoffeeSelected/CoffeeSelected'

export interface Coffee {
    id: number;
    tag: string[];
    name: string;
    desc: string;
    img: object;
    price: number;
  }
  
  interface CoffeeProps {
    coffee: Coffee;
  }


export const CoffeeList = ({ coffee }: CoffeeProps) => {
    const [quantity, setQuantity] = useState(1);

    function handleIncrease() {
        setQuantity(quantity => quantity + 1)
    }

    function handleDecrease() {
        quantity>0 && setQuantity(quantity => quantity - 1)
    }

    const { addCoffeeToCart, removeCartItem } = useCart()

    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee,
            quantity,
        }
        addCoffeeToCart(coffeeToAdd)
    }
    console.log(coffee.img)
    return (
        <React.Fragment>
            <CoffeeCard>
                <img src={Object.values(coffee.img)} alt={coffee.name}/>
                <CoffeeTag>
                    {coffee.tag.map((tag) => <label>{tag}</label>)}
                    
                </CoffeeTag>
                <h3>{coffee.name}</h3>
                <p>{coffee.desc}</p>
                <CoffeeBuy>
                    <h4>
                        <span>R$</span>
                        {formatMoney(coffee.price)}  
                    </h4>
                    <Amount>
                        <Wrapper>
                            <p onClick={handleDecrease}>-</p>
                            <h4>{quantity}</h4>
                            <p onClick={handleIncrease}>+</p>
                        </Wrapper>
                        <Cart onClick={handleAddToCart}>
                            <ShoppingCart size={24} color="#ffffff" weight="fill" />
                        </Cart>
                    </Amount>
                </CoffeeBuy>
            </CoffeeCard>
        </React.Fragment>
    )
}