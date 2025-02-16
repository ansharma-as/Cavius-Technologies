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
   git clone https://github.com/ansharma-as/cavius-Technologies.git
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
   - The app fetches todos from `[https://jsonplaceholder.typicode.com/posts?_limit=6&_page=${page}](https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page})`.
   - Data is stored in a **global state** using Context API.

2. **Skeleton Loader**
   - While fetching, skeleton placeholders (`animate-pulse`) appear in place of actual todos.

3. **Pagination**
   - Users can navigate between pages with **Previous** and **Next** buttons.
   - The total number of pages is dynamically calculated (`Math.ceil(100 / 9)`).

4. **Search Functionality**
   - Users can search todos by their **title**.

---

## 📸 Screenshots
### ✅ Posts List with Pagination
![Todos List](https://via.placeholder.com/800x400)

### 🔄 Skeleton Loader (Before Data Loads)
![Skeleton Loader](https://via.placeholder.com/800x400)

---
## 📜 License
This project is **MIT Licensed**.

---

### Thanks!
