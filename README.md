# CommerceGrid – Frontend

## 1. Project Overview

CommerceGrid is a **full-stack web-based Admin Control Dashboard and E-Commerce Grid** designed for **internal business and commerce administration**.  
The frontend provides a structured and responsive user interface that enables **company owners** and **employees** to interact with business data securely and efficiently.

The system focuses on:
- Inventory management
- Order administration
- Product browsing and management
- Customer tracking and feedback analysis

The application communicates with a RESTful backend API and enforces **role-based access control (RBAC)** using **JSON Web Tokens (JWT)**.

---

## 2. Application Idea Overview

CommerceGrid is not intended for public consumers.  
It is designed as an **internal platform** where:

- **Company Owners** monitor and manage their business operations through a centralized dashboard.
- **Employees** browse and manage products from other companies in a controlled environment.

The frontend emphasizes usability, modularity, and maintainability while supporting **full CRUD (Create, Read, Update, Delete) operations** and **advanced filtering and searching**.

---

## 3. User Roles Identification

The system supports two main user roles, each with defined responsibilities and permissions.

### 3.1 Company Owner
- Does **not register**
- Logs in using **pre-created credentials**
- Has **full control and visibility** over company data

### 3.2 Employee
- Must **register and log in**
- Has **restricted access**
- Focuses on product browsing and management

---

## 4. User Requirements

### 4.1 Company Owner – Functional Requirements

The company owner must be able to:
- Log in securely to the dashboard
- View a complete overview of:
  - Inventory
  - Customers
  - Orders
  - Customer feedback
- Filter and search:
  - Inventory by product name
  - Customers by customer name
  - Orders by order ID or customer name
- Monitor stock levels and availability
- Review customer feedback and ratings
- Access all data through a clean and structured dashboard interface

---

### 4.2 Employee – Functional Requirements

Employees must be able to:
- Register an account using valid credentials
- Log in securely to the system
- Browse products from other companies on the platform
- Search and filter products by:
  - Product name
  - Category
  - Price
- Add products to the cart
- Update product quantities in the cart
- Remove products from the cart
- Create and edit products they are authorized to manage
- Delete products they own or manage

---

## 5. System Requirements (Frontend Perspective)

### 5.1 Functional Requirements
The frontend must:
- Authenticate users using JWT
- Enforce role-based access to routes and components
- Display data retrieved from the backend API
- Support CRUD operations through the UI
- Provide filtering and searching functionality
- Maintain cart functionality for employees
- Ensure data consistency with backend responses

### 5.2 Non-Functional Requirements
- **Usability:** Responsive and user-friendly UI
- **Security:** Secure handling of authentication tokens
- **Performance:** Fast UI rendering and API interaction
- **Maintainability:** Clean, modular, and reusable components

---

## 6. Tech Stack

- React (Vite)
- React Router DOM
- Fetch API
- Tailwind CSS
- Custom CSS
- JWT-based authentication
- Role-based protected routes

---

## 7. Project Structure
```
src/
│── Components/
│ ├── Auth/
│ ├── Layout/
│ ├── Products/
│ │ ├── Aramex/
│ │ ├── Apple/
│ │ └── Amazon/
│ ├── Cart/
│── Pages/
│── Services/
│── Utils/
│── App.jsx
│── main.jsx
```

---
## 8. Data Management and API Integration

The CommerceGrid frontend uses **React Context API** to centrally manage dashboard data, loading states, and error handling across the application.

A dedicated context provider (`PagesContext`) is responsible for:
- Fetching external data
- Storing aggregated dashboard metrics
- Providing shared state to all dashboard components

This design avoids prop drilling and ensures consistent data access throughout the application.

---

## 8.1 PagesContext Overview

The `PagesContext` manages the following state values:

- `InventoryTotal` – Total number of inventory items
- `OrdersTotal` – Total number of orders
- `CustomersTotal` – Total number of customers
- `RecentOrders` – List of recent ordered products
- `InventoryArray` – Full inventory list
- `OrdersArray` – Full orders list
- `CustomersArray` – Customer data list
- `FeedbackArray` – Recent customer feedback/comments
- `Loading` – Global loading state
- `Error` – Global error state

All states are initialized using `useState` and populated via `useEffect` hooks.

---

## 8.2 External APIs Used (Development Phase)

During the development phase, the frontend fetches data from public APIs to simulate real backend behavior.

### Inventory Data
- **Endpoint:** `https://dummyjson.com/products`
- **Used for:**
  - Total inventory count
  - Full inventory listing

---

### Orders Data
- **Endpoint:** `https://dummyjson.com/carts`
- **Used for:**
  - Total orders count
  - Orders listing (flattened from carts)
  - Recent orders preview

---

### Customers Data
- **Endpoint:** `https://dummyjson.com/users`
- **Used for:**
  - Total customers count

- **Endpoint:** `https://randomuser.me/api/?results=10`
- **Used for:**
  - Customer list display

---

### Feedback Data
- **Endpoint:** `https://dummyjson.com/comments`
- **Used for:**
  - Recent customer feedback and comments

---

## 8.3 Data Fetching Strategy

- Data fetching is performed using the **Fetch API**
- Each dataset is fetched inside a dedicated `useEffect` hook
- Responses are validated using HTTP status checks
- Errors are captured and stored in a centralized `Error` state
- The `Loading` state ensures the UI renders only after critical data is loaded

Example strategy:
- Totals are extracted directly from API metadata
- Lists are processed using array transformations such as `flatMap` and `slice`
- Only a limited subset of data is displayed for dashboard previews

---

## 8.4 Context Usage

The context provider wraps the application and exposes all values through `PagesContext`, allowing any component to access dashboard data using:

```js
useContext(PagesContext)

## 9. 🚀 Getting Started

This section provides a **complete, step-by-step guide** for setting up and running the CommerceGrid Frontend locally.  
It is written for **developers, instructors, and evaluators** cloning the project from GitHub.

---

### 9.1 Prerequisites

The following software **must be installed** before proceeding:

- Node.js (v18 or later)
- npm
- Git
- A running instance of **CommerceGrid-Backend**

Verification commands:
```bash
node -v
npm -v
git --version
