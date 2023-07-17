import {CheckoutCardProps} from "../../lib/types";

export const CheckoutCard =
	({
		 toggleCheckoutList,
		 totalDiscount,
		 setToggleCheckoutList
	 }: CheckoutCardProps) => {
	return (
		<>
		{
			toggleCheckoutList &&
				<div className={'checkoutList'}>
					<h3 className={'bold text-2xl md:text-4xl'}>
						Total After Discount:
					</h3>
					<h4 className={'slate text-3xl bold -mt-2'}>
						${ totalDiscount }
					</h4>
					<div className={'flexAround md:gap-4 text-sm md:text-lg'}>
						<button
							onClick={() => { setToggleCheckoutList(!toggleCheckoutList) }}
							className={'bgRed p-2 rounded-3xl text-white bold'}>
							Review Cart
						</button>
						<button
							className={'bgTeal p-2 rounded-3xl text-white bold'}>
							Place Order
						</button>
					</div>
				</div>
		}
		</>
	)
}