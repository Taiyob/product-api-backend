# Project Name

E-commerce Product Database.

## Table of Contents

- Features
- Prerequisites
- Getting Started
- Installation
- Running the Server
- Usage
- API Endpoints
- Testing
- Contributing

## Prerequisites

- Node.js
- npm or yarn
- Mongoosh
- Any other dependencies
- bash

## Clone the repository

```bash
git clone https://github.com/Taiyob/product-api-backend.git

```

## Navigate into the project directory

cd &lt;project-directory&gt;

### Install dependencies & run the server

```bash
npm install
npm run start:dev
```

### Handle Typescript file into JS file

```bash
npm run build
```

### Manage file error with eslint

```bash
npm run lint
npm run lint:fix
```

#### Usage

Use postman or any other api testing tool for better understanding

#### API Endpoints

This application have two side. First one is Product base and second is Order related route.

Example:

- **Retrieving a List of All Products**

  - Use the following API endpoint to retrieve a list of all products:

    ```plaintext
    GET/api/products
    ```

    This endpoint retrieves a comprehensive list of all products available in the system.

- **Retrieving a List of All Orders**

  - Use the following API endpoint to retrieve a list of all products:

    ```plaintext
    GET /api/orders
    ```

    This endpoint retrieves a comprehensive list of all orders available in the system.
