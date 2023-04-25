import React from 'react'
import { Address, Title, Form, Input, WrapperInput } from './Form.style'
import { MapPinLine } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    cep: yup.number().positive().required(),
    address: yup.string().required(),
    number: yup.number().positive().required(),
    complement: yup.string(),
    bairro: yup.string().required(),
    uf: yup.string().required(),
    city: yup.string().required(),
})
type FormData = yup.InferType<typeof schema>;

export const FormOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    return (
        <Form>
            <Address>
                <MapPinLine size={22} color="#C47F17" />
                <Title>Endereço de entrega
                    <h4>Informe o endereço onde deseja receber seu pedido</h4>
                </Title>
            </Address>
            <Input width='200px'type='text' placeholder='CEP' {...register('cep')} />
            <p>{errors.cep?.message}</p>
            <Input width='100%'type='text' placeholder='Rua' {...register('address')}/>
            <WrapperInput>
                <Input width='200px' type='number' placeholder='Número' {...register('number')}/>
                <Input width='348px'type='text' placeholder='Complemento' {...register('complement')}/>
            </WrapperInput>
            <WrapperInput>
                <Input width='200px'type='text' placeholder='Bairro' {...register('bairro')}/>
                <Input width='276px'type='text' placeholder='Cidade' {...register('city')}/>
                <Input width='60px'type='text' placeholder='UF' {...register('uf')}/>
            </WrapperInput>
        </Form>
    )
}