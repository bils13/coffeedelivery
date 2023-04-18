import React from "react";
import { Header } from "../../components/Header/Header.style";
import { YourOrder } from "./Order.style";
import { FormOrder } from "../../components/Form/Form";
import { Payment } from "../../components/Payment/Payment";
import { CoffeeSelected } from "../../components/CoffeeSelected/CoffeeSelected";
import { ConfirmOrder } from "../../components/ConfirmOrder/ConfirmOrder";

export const Order = () => {
    return(
        <React.Fragment>
            <Header />
            <YourOrder>
                <h1>Complete seu pedido</h1>
                <FormOrder />
                <Payment />
                <h1>Cafés selecionados</h1>
                <ConfirmOrder />
            </YourOrder>
        </React.Fragment>
    )
}