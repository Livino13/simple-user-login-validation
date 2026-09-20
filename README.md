# Simple User Login Validation

A beginner-friendly static login form with client-side validation in plain HTML, CSS, and JavaScript. Enter a username and password — valid credentials take you to a welcome page, anything else shows an error.

## ✨ What it is

A two-page demo with no backend and no dependencies:

- **`login.html`** — login form with username + password fields (required).
- **`scripts.js`** — `validateLogin()` checks the credentials: `admin` / `1234` redirects to `home.html`, anything else triggers an `Invalid username or password` alert.
- **`home.html`** — welcome page shown after a successful login, with a Logout button.
- **`styless.css`** — centered card layout on a pink gradient background.

## 🚀 Getting Started

No build step, no server needed:

```bash
# Option 1: just open it
start login.html        # Windows
open login.html         # macOS
xdg-open login.html     # Linux
```

```bash
# Option 2: serve it (e.g. VS Code Live Server extension)
# then open http://localhost:5500/login.html
```

## 🔑 Demo credentials

| Username | Password |
| --- | --- |
| `admin` | `1234` |

## 📁 Project Structure

```
simple-user-login-validation/
├── login.html    # Login form
├── home.html     # Welcome page after login
├── scripts.js    # Credential validation logic
└── styless.css   # Styling (gradient background, centered card)
```

## 🛠️ Tech Stack

| Layer | Tool |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (no frameworks) |
| Logic | Vanilla JavaScript |

## ⚠️ Note

Validation is client-side only with hardcoded credentials — fine for learning form handling and DOM access, not for real authentication. Any production login needs server-side verification, hashed passwords, and HTTPS.

## 📄 License

Provided as-is for learning and exploration.
