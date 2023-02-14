# Car Marketplace

### Car Marketplace Application

Car Marketplace is a web-based application that allows users to purchase or sell cars from a variety of locations around the world and view available options, and purchase or sale directly through the application.

Car Marketplace features a user-friendly interface and secure payment processing, making it easy and convenient for users to rent cars on the go. The application also includes a variety of filters and sorting options, allowing users to find the perfect car for their needs.

### Application in Action

Visit the application live demo.

<img width="1436" alt="Screenshot 2023-02-08 at 5 08 36 PM" src="https://user-images.githubusercontent.com/76760849/218865741-859d0764-3fb6-4e9e-80df-4b1658847830.png">

### Built With

Car Marketplace is built with modern web technologies, including Next.js for server-rendered React, Tailwind for custom CSS, and Redux Toolkit for managing application state. It also integrates with external platforms like Stripe for payment processing, Sanity for data storage. Finally, NextAuth is used to handle user authentication and authorization:

- **Next.js** is a framework for building server-rendered React applications. It allows developers to build web applications that are optimized for performance and SEO, with automatic code splitting and optimized server-side rendering.
- **Tailwind** is a utility-first CSS framework that allows developers to quickly build custom designs by composing pre-defined CSS classes. It provides a wide range of low-level styles that can be combined in various ways to create complex layouts and designs.
- **Redux Toolkit** is a set of tools for simplifying the process of writing Redux logic in a React application. It includes utilities for creating and managing Redux stores, as well as middleware for handling async actions.
- **Stripe** is a platform for building and managing online payment systems. It provides APIs for integrating with a variety of payment methods, including credit cards, bank transfers, and digital wallets.
- **Sanity** is a cross-platform document-oriented database that stores data in JSON-like documents. It is designed for flexibility and scalability, making it a popular choice for modern web applications.
- **NextAuth** is a library for adding authentication to Next.js applications. It provides a simple and flexible way to implement user login, registration, and authorization in a Next.js app.

### **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

****Prerequisites****

- git
    
    If you want to clone the project from GitHub and work with it locally, you will need to have Git installed on your system. You can download and install Git from the official website (**[https://git-scm.com/](https://git-scm.com/)**).
    
- Node.js
    
    Application requires Node.js to be installed on your system in order to run. You can download and install the latest version of Node.js from the official website (**[https://nodejs.org/](https://nodejs.org/)**).
    
- npm (Node Package Manager)
    
    npm is the package manager for Node.js, and is used to manage the dependencies and packages required for your Next.js project. It is installed automatically when you install Node.js.
    
    To check if npm is installed on your system, you can open a terminal or command prompt and enter the following command:
    
    ```bash
    npm -v
    ```
    

Once you have these prerequisites in place, you can proceed to clone the project from GitHub using Git.

****Installing****

Make sure you have all the necessary prerequisites installed on your system. Follow the below steps to install the setup the project on your machine:

- Open a terminal or command prompt and navigate to the directory where you want to clone the project.
- Run the following command to clone the project from GitHub:
    
    ```bash
    git clone https://github.com/t-creates/car-marketplace.git
    ```
    
- This will create a new directory called "car-marketplace" in the current location, containing the code for the Car Rent project.
- Navigate to the project directory by running the following command:
    
    ```bash
    cd car-marketplace
    ```
    
- Run the following command to install the project's dependencies using npm:
    
    ```bash
    npm install
    ```
    
- To use the Car Marketplace project, you will need to set up some environment variables on your development machine. Here are the steps to follow:
    1. Create a **`.env`** file in the root of the project.
    2. Add the following variables to the **`.env`** file, replacing the placeholder values with your own:
    
    ```jsx
    STRIPE_SECRET_KEY=<your-stripe-secret-key>
    ```
    
    1. Save the **`.env`** file.
    
    
- Once the dependencies are installed, you can run the project locally by running the following command:
    
    ```bash
    npm start
    ```
    

This will start the development server and open the CarRent application in your default web browser.

### Features

- Vehicle Search: Search for a car to purchase based on various criteria, such as location, availability, and type of vehicle.
- Payment processing: Securely enters and processes payment information.
- Vehicle availability: Display the availability of vehicles in real-time, so users can quickly determine which options are currently available for sale.
- Vehicle details: View detailed information about the vehicles available for purchase, including make and model, features, and pricing.
- Account management: Create and manage their own profiles within the app, including the ability to save payment information and rental preferences.
- Posting a vehicle for rent: Users who own a vehicle should be able to list it for rent through the app, setting the availability, pricing, and other details.

### Contributing

We welcome contributions to CarRent! If you have an idea for a new feature, an improvement to an existing feature, or a bug fix, please open an issue to discuss it before submitting a pull request. This helps me to review and understand your changes more efficiently.

To contribute code to Car Marketplace:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes to the new branch
4. Run the automated tests to ensure that your changes do not break any existing functionality
5. Open a pull request back to the main repository, including a description of your changes and any relevant issue numbers

Please make sure that your code follows the coding style and standards used in the rest of the project. We also ask that you write tests for your changes, to ensure that they are robust and reliable.

Thank you for your contribution to Car Marketplace! We appreciate your efforts to help make this a great car marketplace application.
