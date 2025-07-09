# 🔐 Web Password Manager

A secure and user-friendly web-based password manager built with **ReactJS** and **Express**, implementing best practices based on **OWASP** and **NIST** guidelines. It features strong password generation, strength estimation, and encrypted storage using modern security libraries like `zxcvbn` and `nanoid`.

## 📦 Tech Stack

- **Frontend**: ReactJS (Vite or CRA)
- **Backend**: Node.js + Express
- **Security Libraries**:
  - [`zxcvbn`](https://github.com/dropbox/zxcvbn): Password strength estimator
  - [`nanoid`](https://github.com/ai/nanoid): Unique ID generator for entries
- **Standards**:
  - [OWASP Application Security Guidelines](https://owasp.org/)
  - [NIST 800-63B Digital Identity Guidelines](https://pages.nist.gov/800-63-3/sp800-63b.html)

---

## ✨ Features

- 🔑 Secure user authentication
- 🔒 Client-side encryption of passwords
- 🔐 Password strength analysis via `zxcvbn`
- 📄 NIST-compliant password rules
- 🔄 Password generator with customizable settings
- 🛡️ OWASP-aligned input validation and error handling
- 🗃️ Encrypted vault for storing passwords
- 🔗 Easy-to-use interface with React

---

## 📁 Project Structure

```bash
.
├── app/                 # ReactJS frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── utils/
├── backend/                 # Express backend
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── .env
├── package.json
└── README.md
