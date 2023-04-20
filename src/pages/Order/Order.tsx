import React from "react";
import { Header } from "../../components/Header/Header.style";
import { Wrapper, YourOrder, Title } from "./Order.style";
import { FormOrder } from "../../components/Form/Form";
import { Payment } from "../../components/Payment/Payment";
import { CoffeeSelected } from "../../components/CoffeeSelected/CoffeeSelected";
import { ConfirmOrder } from "../../components/ConfirmOrder/ConfirmOrder";

export const Order = () => {
    return(
        <React.Fragment>
            <Header />
            <YourOrder>
                <Wrapper>
                    <Title>Complete seu pedido</Title>
                    <FormOrder />
                    <Payment />
                </Wrapper>
                <Wrapper>
                    <Title>Cafés selecionados</Title>
                    <ConfirmOrder />
                </Wrapper>
            </YourOrder>
        </React.Fragment>
    )
}