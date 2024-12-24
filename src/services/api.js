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