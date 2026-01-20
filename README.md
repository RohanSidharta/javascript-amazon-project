
# 🛒 JavaScript Amazon Clone

A front-end **Amazon-inspired e-commerce website** built using **HTML, CSS, and Vanilla JavaScript**, with **unit testing implemented using Jasmine**.
This project focuses on modular JavaScript, cart functionality, checkout flow, and test-driven development.

---

## 🚀 Features

* 📦 Dynamic product listing
* 🛒 Cart functionality (add, remove, update quantity)
* 🚚 Delivery option selection
* 💳 Checkout page with order & payment summary
* 💰 Price calculations and currency formatting
* 🧪 Unit testing using **Jasmine**
* 📱 Multiple pages (Amazon, Checkout, Orders, Tracking)

---

## 🛠️ Tech Stack

* **HTML5** – Page structure
* **CSS3** – Styling & layout
* **JavaScript (ES6 Modules)** – Application logic
* **Jasmine** – Unit testing framework

---

## 📂 Project Structure

```
javascript-amazon-project/
│
├── backend/
│   └── products.json
│
├── data/
│   ├── backend-practice.js
│   ├── cart.js
│   ├── cart-class.js
│   ├── cart-oop.js
│   ├── deliveryOptions.js
│   └── products.js
│
├── images/
│   ├── icons/
│   ├── products/
│   ├── ratings/
│   └── *.png / *.jpg
│
├── jasmine-standalone-5.1.1/
│   ├── checkout/
│   │   └── orderSummaryTest.js
│   ├── data/
│   │   └── cartTest.js
│   ├── utils/
│   │   └── moneyTest.js
│   ├── lib/jasmine-5.1.1/
│   ├── tests/
│   │   └── moneyTest.js
│   ├── tests.html
│   └── MIT.LICENSE
│
├── scripts/
│   ├── amazon.js
│   ├── checkout.js
│   ├── checkout/
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   └── utils/
│       └── money.js
│
├── styles/
│   ├── pages/
│   │   └── checkout/
│   ├── amazon.css
│   ├── orders.css
│   ├── tracking.css
│   └── shared/
│       ├── amazon-header.css
│       └── general.css
│
├── pages/
│   └── checkout/
│
├── amazon.html
├── checkout.html
├── orders.html
├── tracking.html
└── README.md
```

---

## 🧪 Testing (Jasmine)

This project uses **Jasmine** to test core business logic, including:

* Cart functionality
* Order summary calculations
* Payment summary logic
* Currency formatting utilities

### ▶️ Run Tests

1. Open the following file in your browser:

   ```
   jasmine-standalone-5.1.1/tests.html
   ```
2. View test results directly in the browser.

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/RohanSidharta/javascript-amazon-project.git
```

### 2️⃣ Open locally

* Open `amazon.html` in your browser
* Recommended: use **VS Code Live Server** for ES module support

---

## 🎯 Learning Outcomes

* Modular JavaScript architecture
* DOM manipulation & event handling
* Writing reusable utility functions
* Unit testing with Jasmine
* Debugging real-world JavaScript issues
* Structuring a multi-page web application

---

## 🔮 Future Improvements

* Backend integration with APIs
* User authentication
* Database for orders & users
* Real payment gateway
* Improved UI/UX and animations

---

## 👩‍💻 Author

**Rohan Sidharta**
Aspiring Software Developer
Focused on JavaScript, MERN stack, Front-End Development, and Testing

---

## 📜 License

This project is licensed under the **MIT License**.

---

