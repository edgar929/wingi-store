# Getting Started with Create React App

This WINGI STORE PROJECT was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Link to the recorded video
https://www.loom.com/share/2bf833730b014089ba102d866bce6e5f

## Available Scripts
To run the project first clone it and run the following script:

### `npm install`
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## High level architecture
The project is a client-side application: The user interface layer is responsible for providing the user 
with an intuitive interface to interact with the system

1. Landing page: shows all available product and user can filter products by category
2. Dashboard: it is protected and a user to access it must first login
   on the dashboard we have:
   - product table that displays available products
   - a form to create a new product
3. to persist data we used localStorage
4. Used https://fakestoreapi.com to have dummy data