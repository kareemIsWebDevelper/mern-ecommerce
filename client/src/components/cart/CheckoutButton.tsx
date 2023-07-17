import {CheckoutButtonProps} from "../../lib/types";
import {useState} from "react";

export const CheckoutButton =
    ({
         toggleCheckoutList,
         setToggleCheckoutList,
         isLoading
    }: CheckoutButtonProps) => {

    return (
      <div className="gridCenter">
        <strong className="teal bold header">
            Your Cart Items
        </strong>
        <button
            onClick={() => { setToggleCheckoutList(!toggleCheckoutList) }}
            className={checkout}>
            Checkout
        </button>
        {isLoading && <h1 className="text-center">Loading...</h1>}
      </div>
    )
}

const checkout =
    "bg-white border shadow-xl p-3 my-4 rounded-3xl bold text-xl";