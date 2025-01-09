# Subscription Plans with M-Pesa Integration

A React and Django-based subscription management system with M-Pesa payment integration. This application allows users to view different subscription plans and make payments using M-Pesa's STK push functionality.

## Features

- Display multiple subscription plans
- Dynamic plan features and pricing
- M-Pesa payment integration
- Real-time STK push notifications
- Responsive design
- Mobile-friendly payment modal

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- Django (v3.2 or higher)
- npm or yarn package manager
- M-Pesa API credentials

## Installation

### Frontend (React)

1. Clone the repository:
2. 
git clone <repository-url>

cd <project-directory>

2. Install dependencies:
3. 
cd frontend

npm install

3. Create a `.env` file in the frontend directory:
4. 
REACT_APP_API_URL=http://localhost:8000/api

npm start

### Backend (Django)

1. Create and activate a virtual environment:
2. 
python -m venv venv

source venv/bin/activate  # On Windows: venv\Scripts\activate

2. Install Python dependencies:
3. 
cd backend

pip install -r requirements.txt

3. Set up environment variables:
4. SECRET_KEY=your_secret_key
DEBUG=True
MPESA_CONSUMER_KEY=your_mpesa_consumer_key
MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret
MPESA_SHORTCODE=your_mpesa_shortcode
MPESA_PASSKEY=your_mpesa_passkey
****

4. Run migrations:
5. python manage.py migrate
6. 
5. Start the Django server:
6. 
python manage.py runserver

## Project Structure

project/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── SubscriptionList.jsx
│ │ ├── services/
│ │ │ └── api.js
│ │ └── style.scss
│ └── package.json
│
└── backend/
├── djangsubscriptionPlan/
│ ├── views.py
│ ├── urls.py
│ └── models.py
└── requirements.txt



## API Endpoints

### Get Subscription Plans

GET /api/subscription-plans/

Returns a list of available subscription plans.

### Initiate Payment

POST /api/initiate-mpesa-payment/
Body:

json
{
"phone_number": "254XXXXXXXXX",
"amount": "1000"
}


## Usage

1. Browse available subscription plans
2. Click "Purchase Plan" on desired plan
3. Enter M-Pesa registered phone number
4. Confirm payment via STK push on your phone
5. Wait for confirmation message

## Styling

The application uses SCSS for styling. Main style files:
- `style.scss`: Contains all component styles
- Responsive design breakpoints included
- Mobile-first approach

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

- M-Pesa API Documentation
- React Documentation
- Django REST Framework