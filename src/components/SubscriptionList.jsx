// Displays available subscription plans
import React, { useEffect, useState} from "react";
import "../style.scss";
import { getSubscriptionPlans  } from "../services/api"; // import the API function


const SubscriptionPlans = () => {


    const [plans, setPlans] = useState([]); //this part is used to set the plans

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


                </div>
            ))}

        </div>
    );

};

export default SubscriptionPlans;
