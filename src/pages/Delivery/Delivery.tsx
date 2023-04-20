import React from 'react'
import { Icon, Info, Infos, Text, WrapperInfo, Wrapper, Image } from './Delivery.style'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Header } from '../../components/Header/Header.style'
import Ilustration from '../../assets/Delivery.svg'

export const Delivery = () => {
    return (
        <React.Fragment>
            <Header />
            <Wrapper>
                <WrapperInfo>
                    <h1>Uhu! Pedido confirmado</h1>
                    <h2>Agora é só aguardar que logo o café chegará até você</h2>
                    <Info>
                        <Infos>
                            <Icon background='#8047F8'>
                                <MapPin size={17} color="#FFFFFF" weight="fill" />
                            </Icon>
                            <Text>
                                <label>Entrega em <span>Rua João Daniel Martinelli, 102</span></label>
                                <p><span>Farropos - Porto Alegre, RS</span></p>
                            </Text>
                        </Infos>
                        <Infos>
                            <Icon background='#DBAC2C'>
                                <Timer size={17} color="#FFFFFF" weight="fill" />
                            </Icon>
                            <Text>
                                <label>Previsão de entrega</label>
                                <p>20 min - 30 min</p>
                            </Text>
                        </Infos>
                        <Infos>
                            <Icon background='#C47F17'>
                                <CurrencyDollar size={17} color="#FFFFFF" weight="bold" />
                            </Icon>
                            <Text>
                                <label>Pagamento na entrega</label>
                                <p>Cartão de Crédito</p>
                            </Text>
                        </Infos>
                    </Info>
                </WrapperInfo>
                <Image src={Ilustration} alt='Delivery Ilustration' />
            </Wrapper>
        </React.Fragment>
    )
}