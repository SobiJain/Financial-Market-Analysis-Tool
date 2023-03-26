# Financial-Market-Analysis-Tool

Our project aims to develop a comprehensive financial
market analysis and research platform that caters to
individual investors, traders, and financial professionals.
The platform will offer a wide range of features such as
stock screening based on various financial metrics, realtime market data, news, and analysis. It will be designed
to provide users with a user-friendly interface, enabling
them to stay informed about market trends and find new
investment opportunities with ease.
<br/>
### Technologies used:

* Frontend: React 
* Backend: Django
* APIs: Alphavantage apis for company's fundamental info

# Packages and Dependencies used:

## Frontend: 
* "@emotion/react": "^11.10.6"
* "@emotion/styled": "^11.10.6"
* "@mui/icons-material": "^5.11.11"
* "@mui/material": "^5.11.12"
* "@reduxjs/toolkit": "^1.9.3"
* "@testing-library/jest-dom": "^5.16.5"
* "@testing-library/react": "^13.4.0"
* "@testing-library/user-event": "^13.5.0"
* "axios": "^1.3.4"
* "react": "^18.2.0"
* "react-dom": "^18.2.0"
* "react-redux": "^8.0.5"
* "react-router-dom": "^6.8.2"
* "react-scripts": "^5.0.1"
* "react-toastify": "^9.1.1"
* "redux": "^4.2.1"
* "redux-thunk": "^2.4.2"
* "web-vitals": "^2.1.4"

## Backend:
* asgiref==3.6.0
* bcrypt==4.0.1
* certifi==2022.12.7
* charset-normalizer==3.1.0
* Django==4.1.7
* django-cors-headers==3.14.0
* djangorestframework==3.14.0
* djangorestframework-jwt==1.11.0
* djangorestframework-simplejwt==5.2.2
* idna==3.4
* PyJWT==1.7.1
* pytz==2022.7.1
* requests==2.28.2
* sqlparse==0.4.3
* tzdata==2022.7
* urllib3==1.26.15

# Usage:

To run the project, first start the backend server. To start the backend server:

1. Open market_analyser directory in terminal.
2. Install python: https://docs.python.org/3/using/index.html
3. Create virtual environment. `python -m venv venv`
4. Activate the virtual environment. If using powershell of windows, use the command `PS C:\> <venv>\Scripts\Activate.ps1` else refer to https://docs.python.org/3/library/venv.html#how-venvs-work
5. Install requirements:   `pip install -r requirements.txt`
6. Make migrations: `python manage.py makemigrations`
7. Migrate: `python manage.py migrate`
8. Run the server: `python manage.py runserver`

After starting the backend server, start the frontend. To start the frontend:

1. Open frontend directory in terminal.
2. Install Node.js: https://docs.npmjs.com/getting-started/installing-node
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. The application will start at `localhost:3000`
6. Open the browser and view the development code.
