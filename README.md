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

## 8. 🚀 Getting Started

This section provides a **complete, step-by-step guide** for setting up and running the CommerceGrid Frontend locally.  
It is written for **developers, instructors, and evaluators** cloning the project from GitHub.

---

### 8.1 Prerequisites

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
