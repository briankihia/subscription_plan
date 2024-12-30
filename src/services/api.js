// this service part, api.js is used to interact with the backend eg, django

import axios from  'axios';


// below is the part that will connect with our django backend since , we will set the same ip address in our django
const API_URL = 'http://localhost:8000/api/subscription-plans/';  // Django API URL


export const getSubscriptionPlans = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;  // Return the list of plans
    } catch (error) {
        console.error("Error fetching subscription plans:", error);
        return [];
    }
};

export const initiatePayment = async (phoneNumber, amount, planId) => {
    try {
        const response = await fetch('http://localhost:8000/api/mpesa/initiate/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone_number: phoneNumber,
                amount: amount
                // plan_id is not needed since your backend doesn't use it
            })
        });
        const data = await response.json();
        
        // Match your Django response format
        if (data.status === 'success') {
            return {
                success: true,
                data: data.data
            };
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Payment initiation failed:', error);
        throw error;
    }
};