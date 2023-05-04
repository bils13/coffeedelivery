import React from 'react'
import { Address, Title, Form, Input, WrapperInput } from './Form.style'
import { MapPinLine } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
import * as yup from 'yup';

export const schema = yup.object({
    cep: yup.string().required().matches(/\d{5}-\d{3}/),
    address: yup.string().required(),
    number: yup.number().positive().required(),
    complement: yup.string(),
    bairro: yup.string().required(),
    uf: yup.string().required(),
    city: yup.string().required(),
})
type FormData = yup.InferType<typeof schema>;


export const FormOrder = () => {
    const { register, formState:{ errors } } = useFormContext<FormData>()
    
    return (
        <Form>
            <Address>
                <MapPinLine size={22} color="#C47F17" />
                <Title>Endereço de entrega
                    <h4>Informe o endereço onde deseja receber seu pedido</h4>
                </Title>
            </Address>
            <Input width='200px'type='text' placeholder='CEP' {...register('cep')} className={errors?.cep ? 'border' : ''}/>
            <Input width='100%'type='text' placeholder='Rua' {...register('address')} className={errors?.address ? 'border' : ''}/>
            <WrapperInput>
                <Input width='200px' type='number' placeholder='Número' {...register('number')} className={errors?.number ? 'border' : ''}/>
                <Input width='348px'type='text' placeholder='Complemento' {...register('complement')}/>
            </WrapperInput>
            <WrapperInput>
                <Input width='200px'type='text' placeholder='Bairro' {...register('bairro')} className={errors?.bairro ? 'border' : ''}/>
                <Input width='276px'type='text' placeholder='Cidade' {...register('city')} className={errors?.city ? 'border' : ''}/>
                <Input width='60px'type='text' placeholder='UF' {...register('uf')} className={errors?.uf ? 'border' : ''}/>
            </WrapperInput>
        </Form>
    )
}