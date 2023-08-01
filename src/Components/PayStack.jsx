import { Center } from '@chakra-ui/layout';
import {useState} from 'react'
import { PaystackButton } from 'react-paystack';
import { useSelector } from 'react-redux';

const PayStack = () => {
const publicKey = "pk_test_e52a4312d9d8a978310a36e63994bfbeafe2131a";
// const amount = 1000000; // Remember, set in kobo!
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const amount = useSelector((state) => state.cart.total);


const componentProps = {
	email,
	amount:(amount*100) ,
  currency:"GHS",
	metadata: {
		name,
		phone,
	},
	publicKey,
	text: "Pay Now",
	onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
	onClose: () => alert("Wait! You need this oil, don't go!!!!"),
};
  return (
		<Center minH="100vh">
			<div className="checkout-form">
				<div className="checkout-field">
					<p>GHS{amount.toFixed(2)}</p>
					<label>Name</label>
					<input
						type="text"
						id="name"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="checkout-field">
					<label>Email</label>
					<input
						type="text"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="checkout-field">
					<label>Phone</label>
					<input
						type="text"
						id="phone"
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<PaystackButton className="paystack-button" {...componentProps} />
			</div>
		</Center>
	);
}

export default PayStack