# 🎓 Student Favourite List App

A React JS application to manage and favourite students, built with React Router, Context API, and Tailwind CSS.

## 🚀 Live Demo
[View on Vercel](https://favourite-student-react-phi.vercel.app/)

---

## 📌 Features

- Add students with Name, Roll Number, and Grade
- View all students in a dynamic card layout
- Add students to a Favourite list
- Remove students from the Favourite list
- Prevents duplicate students from being added
- Form validation using Regex
- Navigate between pages without page reload
- Displays avatar initials for each student
- Shows total student count and favourite count

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React JS | Frontend framework |
| React Router DOM | Page navigation |
| Context API | Global state management |
| Tailwind CSS | Styling |
| Vercel | Deployment |
src/
├── Components/
│   ├── ListProvider.jsx   # Context provider — global state
│   ├── Addstd.jsx         # Add student form
│   ├── Stdcard.jsx        # Student list cards
│   └── Favcard.jsx        # Favourite students page
├── App.js                 # Main app with routing
└── index.js               # Entry point
---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm start
```

---

## 📋 Form Validation Rules

| Field | Rule | Example |
|---|---|---|
| Name | Cannot be empty | Arun Kumar |
| Roll Number | 3 Letters + 4 Digits | CSC2401 |
| Grade | 1-2 digits + dot + 2 digits | 9.35 |

---

## 📖 Concepts Used

- `createContext()` — creates global context
- `useContext()` — accesses context in any component
- `useState()` — manages local and global state
- `useContext()` — accesses context in any component
- `map()` — renders student list dynamically
- `filter()` — removes student from favourites
- `some()` — prevents duplicate favourites
- `trim()` — removes whitespace from inputs
- `preventDefault()` — stops form page refresh
- Regex — validates roll number and grade format

---

## 🖼️ Screenshots

### Student List Page
![Student List](add-your-screenshot-here)

### Favourite Students Page
![Favourites](add-your-screenshot-here)

---

## 👨‍💻 Author

**Your Name**
- GitHub: [https://github.com/Arunkumar1321](https://github.com/Arunkumar1321/Favourite-Student-react/tree/main)

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE)

---

## 📂 Project Structure
