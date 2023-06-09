import React from 'react'
import { Icon, Info, Infos, Text, WrapperInfo, Wrapper, Image } from './Delivery.style'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Header } from '../../components/Header/Header.style'
import Ilustration from '../../assets/Delivery.svg'
import { useLocation } from 'react-router-dom'

interface AddressI {
    cep: string,
    address: string,
    number: number,
    complement: string,
    bairro: string,
    uf: string,
    city: string,
    pay: string
}


interface LocationState {
    state: AddressI
}

export const Delivery = () => {
    const { state } = useLocation() as unknown as LocationState
    
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
                                <label>Entrega em <span>{state.address}, {state.number}</span></label>
                                <p><span>{state.bairro} - {state.city}, {state.uf}</span></p>
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
                                <p>{state.pay}</p>
                            </Text>
                        </Infos>
                    </Info>
                </WrapperInfo>
                <Image src={Ilustration} alt='Delivery Ilustration' />
            </Wrapper>
        </React.Fragment>
    )
}