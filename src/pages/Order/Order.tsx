import React, { useContext, useState } from "react";
import { Header } from "../../components/Header/Header.style";
import { Wrapper, YourOrder, Title } from "./Order.style";
import { FormOrder } from "../../components/Form/Form";
import { Payment } from "../../components/Payment/Payment";
import { ConfirmOrder } from "../../components/ConfirmOrder/ConfirmOrder";
import { FormProvider } from "react-hook-form";
import { useForm } from 'react-hook-form'
import { schema } from "../../components/Form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export const Order = () => {
    const navigate = useNavigate()
    const methods = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: Object) => {
        data = {...data, pay}
        navigate('/delivery', {
            state: data 
        });
    }

    const [pay, setPay] = useState('')
    const handleClick = (event: any) => {
        event.currentTarget.disabled = true;
        setPay(event.target.value)
    }
    
    return(
        <React.Fragment>
            <Header />
            <FormProvider {...methods}>
                <YourOrder onSubmit={methods.handleSubmit(onSubmit)}>
                    <Wrapper>
                        <Title>Complete seu pedido</Title>
                        <FormOrder />
                        <Payment handleClick={handleClick} />
                    </Wrapper>
                    <Wrapper>
                        <Title>Cafés selecionados</Title>
                        <ConfirmOrder />
                    </Wrapper>
                </YourOrder>
            </FormProvider>
        </React.Fragment>
    )
}