// Handles purchase flow

import React, {useState} from "react";

const PaymentComponent = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');


    const handlePayment = async () => {
        const response = await fetch('http://127.0.0.1:8000/initiate_payment', {
            
        })
    }
}