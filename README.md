# Cavius Assignment - Rendering Posts with Pagination

## 📌 Project Overview
This project renders a list of **posts** using React, implements **pagination**, and includes a **skeleton loader** while fetching data. The data is retrieved from the [JSONPlaceholder API]([https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)), which provides mock posts.

## 🚀 Features
- Fetch and display **posts** from an API.
- **Pagination** for better navigation.
- **Search functionality** to filter todos.
- **Skeleton loader** while data is being fetched.

---

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS
- **API**: JSONPlaceholder (Mock Data)

---

## 📂 Project Structure
```
📦 cavius-assignment
├── 📂 src
│   ├── 📂 context
│   │   ├── PostContext.jsx  
│   ├── 📂 pages
│   │   ├── ItemDetails.jsx
│   │   ├── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── package.json
├── README.md
```

---

## 🏗️ Installation & Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/ansharma-as/Cavius-Technologies.git
   cd frontend
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the project**:
   ```sh
   npm run dev
   ```

---

## 🎯 How It Works

1. **Fetching Data**
   - The app fetches todos from `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`.
   - Data is stored in a **global state** using Context API.

2. **Skeleton Loader**
   - While fetching, skeleton placeholders appear in place of actual todos.

3. **Pagination**
   - Users can navigate between pages with **Previous** and **Next** buttons.
   - The total number of pages is dynamically calculated (`Math.ceil(100 / 9)`).

4. **Search Functionality**
   - Users can search todos by their **title**.

---

## 📸 Screenshots
###home route
<img width="1458" alt="Screenshot 2025-02-16 at 7 54 17 PM" src="https://github.com/user-attachments/assets/7042cbf4-88ed-4119-a7f6-9035c4510152" />
###post:id route
<img width="1419" alt="Screenshot 2025-02-16 at 7 54 29 PM" src="https://github.com/user-attachments/assets/0d3d50e2-88d0-4620-92cd-edfbffc493f3" />


---
## 📜 License
This project is **MIT Licensed**.

---

### Thanks!
