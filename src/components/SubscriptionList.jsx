// Displays available subscription plans
import React, { useEffect, useState} from "react";
import "../style.scss";
import { getSubscriptionPlans, initiatePayment } from "../services/api"; // import the API function


const SubscriptionPlans = () => {


    const [plans, setPlans] = useState([]); //this part is used to set the plans
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePurchase = (plan) => {
        console.log('Purchase clicked for plan:', plan);
        setSelectedPlan(plan);
        setShowPaymentModal(true);
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        try {
            const formattedPhone = phoneNumber.replace(/\D/g, '');
            const finalPhone = formattedPhone.startsWith('254') 
                ? formattedPhone 
                : `254${formattedPhone.replace(/^0+/, '')}`;

            const response = await initiatePayment(
                finalPhone,
                selectedPlan.price.replace(/[^0-9]/g, ''), // Extract numeric value from price
            );
            
            if (response.success) {
                alert('Please check your phone for the STK push notification');
                setShowPaymentModal(false);
                setPhoneNumber('');
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert(error.message || 'Payment initiation failed. Please try again.');
        }
    };

    useEffect(() => {
        // fecth subscriptions plans from the backend api
        // below is a function to access all the plans from the api
        const fetchPlans = async () => {
            // code below sets all the plans to fetchedPlans variable
            const fetchedPlans = await getSubscriptionPlans();
            console.log("Fetched plans:", fetchedPlans); // Log the fetched plans
            setPlans(fetchedPlans); //here we update the state with the fecthed plans

        } ;

        fetchPlans(); //at the end we are calling the function
    }, []); //Empty dependency array means it runs once when the component mounts

    // const plans = [
    //     {name: "Basic plan", price: "$10/month", features: ["Feature 1", "Feature 2"]},
    //     { name: "Pro Plan", price: "$20/month", features: ["Feature 1", "Feature 2", "Feature 3"] },
    //     { name: "Premium Plan", price: "$30/month", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"] },
       
    
    // ];

    return (
        <div className="subscription-plans">

            {/* Log the plans to see the current state */}
            {console.log("Current plans state:", plans)}

            {/* now we iterate through them */}
            {plans.map((plan, index) => (
                // they will be displayed in the below div
                <div className="plan-card" key={index}>
                    <h3>{plan.name}</h3>
                    <p className="price">{plan.price}</p>
                    {/* <ul>
                        {plan.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul> */}

                    <ul>
                        {plan.features && typeof plan.features === 'object' ? (
                            Object.values(plan.features).map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))
                        ) : (
                            <li>No features available</li>
                        )}
                    </ul>

                    <button 
                        className="purchase-button"
                        onClick={() => handlePurchase(plan)}
                    >
                        Purchase Plan
                    </button>

                </div>
            ))}

            {console.log('showPaymentModal:', showPaymentModal)}

            {showPaymentModal && (
                <div className="payment-modal">
                    <div className="modal-content">
                        <h2>Enter Payment Details</h2>
                        <p>Plan: {selectedPlan?.name}</p>
                        <p>Amount: {selectedPlan?.price}</p>
                        
                        <form onSubmit={handlePaymentSubmit}>
                            <input
                                type="tel"
                                placeholder="Enter Phone Number (254XXX)"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                            <div className="modal-buttons">
                                <button type="submit">Pay Now</button>
                                <button 
                                    type="button" 
                                    onClick={() => setShowPaymentModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );

};

export default SubscriptionPlans;
