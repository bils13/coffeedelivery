import React from 'react'
import { Address, Title, Form, Input, WrapperInput } from './Form.style'
import { MapPinLine } from '@phosphor-icons/react'

export const FormOrder = () => {
    return (
        <Form>
            <Address>
                <MapPinLine size={22} color="#C47F17" />
                <Title>Endereço de entrega
                    <h4>Informe o endereço onde deseja receber seu pedido</h4>
                </Title>
            </Address>
            <Input width='200px'type='text' placeholder='CEP'/>
            <Input width='100%'type='text' placeholder='Rua'/>
            <WrapperInput>
                <Input width='200px' type='number' placeholder='Número'/>
                <Input width='348px'type='text' placeholder='Complemento'/>
            </WrapperInput>
            <WrapperInput>
                <Input width='200px'type='text' placeholder='Bairro'/>
                <Input width='276px'type='text' placeholder='Cidade'/>
                <Input width='60px'type='text' placeholder='UF'/>
            </WrapperInput>
        </Form>
    )
}