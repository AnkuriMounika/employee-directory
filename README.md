# 🧑‍💼 Employee Directory

A responsive and interactive Employee Directory web interface built with **HTML**, **CSS**, **JavaScript**, and simulated **Freemarker templating**.

> 📌 Built for the AJACKUS Frontend UI Assignment  
> 🎯 No backend — pure client-side functionality using in-memory JS array.

---

## 🚀 Features

- ✅ Employee Dashboard (List View)
- ✅ Add/Edit Employee (Single form)
- ✅ Delete Employee
- ✅ Live Search (by name/email)
- ✅ Pagination (10/25/50/100)
- ✅ Form validation
- ✅ Fully responsive (desktop / tablet / mobile)

---

## 📁 Folder Structure

employee-directory/
├── css/
│ └── style.css # All styling rules
├── js/
│ ├── app.js # Main logic (add/edit/delete)
│ ├── data.js # In-memory mock employee list
│ ├── filters.js # Search, filter, sort logic
│ └── pagination.js # Page rendering + control
├── index.html # Main dashboard UI
├── form.html # Add/Edit form page
└── README.md # Project overview


---

## 🛠️ How to Run

### ✅ Option 1: With VS Code (Live Server)
1. Install the **Live Server** extension.
2. Open `index.html`.
3. Right-click → **Open with Live Server**.
4. Your app will open at `http://127.0.0.1:5500/`.

### ✅ Option 2: From File Explorer
1. Open the `employee-directory` folder.
2. Double-click `index.html` to open in browser.
> ⚠️ Some JS features (like localStorage/file access) may not work fully without Live Server.

---

## 🖼️ Screenshots

### 📋 Dashboard Page
![Dashboard Screenshot](screenshots/dashboard.png)

### ➕ Add Employee Page
![Form Screenshot](screenshots/add-form.png)

> You can take screenshots from your browser and save them under a `/screenshots` folder to match this.

---

## ✅ Validations

- **Required fields**: All inputs are mandatory
- **Email format**: Validated using regex
- **Error feedback**: Shows clear messages and field highlights

---

## 🧪 Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- Vanilla JavaScript (ES6+)
- Simulated Freemarker-style templates
- `localStorage` for persistence

---

## 💡 Challenges Faced

- Handling dynamic updates without a backend.
- Managing pagination alongside filters/search.
- Simulating Freemarker templating purely on client-side.

---

## 🚀 Improvements (If Given More Time)

- Add filter sidebar (by department/role)
- Add sorting dropdowns (A-Z, Z-A)
- Confirm dialogs for Delete actions
- Use a frontend framework like React or Vue (optional enhancement)

---

## 📌 Author

**Ankuri Mounika**  
[GitHub Profile →](https://github.com/AnkuriMounika)

---

