import React, { useContext } from 'react'
import { Header } from '../../components/Header/Header.style'
import { BannerIntro } from '../../components/Banner/Banner.style'
import { ShoppingCart } from '@phosphor-icons/react'
import { Coffees, Icon, Icons, ListCoffee, WrapperCoffe, WrapperIcon } from './Home.style'
import Coffee from '../../assets/Coffee.svg'
import { CoffeeList } from '../../components/Coffee/Coffee'
import { coffee as CoffeObj } from '../../data/coffee'

export const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <BannerIntro>
                <section>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</h2>
                    <Icons>
                        <Icon>
                            <WrapperIcon>
                                <ShoppingCart size={22} color="#ffffff" weight="fill" />
                            </WrapperIcon>
                            <p>Compra simples e segura</p>
                        </Icon>
                        <Icon>
                            <WrapperIcon>
                                <ShoppingCart size={22} color="#ffffff" weight="fill" />
                            </WrapperIcon>
                            <p>Embalagem mantém o café intacto</p>
                        </Icon>
                        <Icon>
                            <WrapperIcon>
                                <ShoppingCart size={22} color="#ffffff" weight="fill" />
                            </WrapperIcon>
                            <p>Entrega rápida e rastreada</p>
                        </Icon>
                        <Icon>
                            <WrapperIcon>
                                <ShoppingCart size={22} color="#ffffff" weight="fill" />
                            </WrapperIcon>
                            <p>O café chega fresquinho até você</p>
                        </Icon>
                    </Icons>
                </section>
                <img src={Coffee} alt='Coffee' />
            </BannerIntro>
        
            <WrapperCoffe>
                
                <Coffees>
                <h3>Nossos cafés</h3>
                    <ListCoffee>
                        {CoffeObj.map((coffee) => 
                            <CoffeeList key={coffee.id} coffee={coffee} />
                        )}
                    </ListCoffee>
                </Coffees>
            </WrapperCoffe>
        </React.Fragment>
    )
}