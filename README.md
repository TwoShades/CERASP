
# CERASP Web Interface

A modern, multilingual React-based website for CERASP — an educational initiative focused on delivering content related to bio-manufacturing technologies. This frontend serves as the primary platform for students, teachers, and stakeholders to explore machines, equipment, and sector-based documentation.

---

## 🌐 Tech Stack

- **React** (JavaScript)
- **React Router**
- **Modular SCSS/CSS**
- Organized by contexts, hooks, components, and pages
- JSON-driven content (e.g., `Privacy.json`, `sitemap.json`)

---

## 📁 Project Structure

```
cerasp/
├── public/                  # Static assets
├── src/
│   ├── components/          # Shared UI components
│   ├── contexts/            # React context providers
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   │   ├── about-subpages/
│   │   ├── ContactUs/
│   │   ├── expertise-subpages/
│   │   ├── landing-subpages/
│   │   ├── news-subpages/
│   │   ├── projects-subpages/
│   │   ├── sectors-subpages/
│   │   ├── reference/
│   │   ├── Pages-css/
│   │   ├── About.js
│   │   ├── EquipmentsMasterList.js
│   │   ├── Expertises.js
│   │   ├── LandingPage.js
│   │   ├── News.js
│   │   ├── Privacy.json
│   │   ├── PrivacyPolicy.js
│   │   ├── Projects.js
│   │   └── Sectors.js
│   ├── utils/               # Utility functions and helpers
│   ├── App.js               # Main App component
│   ├── index.js             # Entry point
│   ├── App.css / index.css  # Global styles
│   ├── App.test.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── sitemap.json
├── .gitignore
```

---

## 🌍 Localization

The project supports multiple languages. Text content is dynamically managed using JSON files and structured subpages for easy translation.

---

## ⚙️ Scripts

```bash
npm start        # Run in development mode
npm run build    # Build for production
npm test         # Run test suite
```

---

---

## 📌 Pages & Routing

The site is divided into several major content areas:

- **LandingPage.js** – Homepage entry
- **About.js** – Organization overview
- **ContactUs/** – Contact form & details
- **Expertises.js** – Areas of expertise
- **Projects.js** – Research or case studies
- **Sectors.js** – Industry sectors overview
- **PrivacyPolicy.js** – Policy documentation

---

## 🤝 Contributing

Want to help improve the CERASP website?

1. Fork the repo
2. Create a new branch (`feature/my-update`)
3. Commit your changes
4. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact

Developed and maintained by [TwoShades](https://github.com/TwoShades)  
For inquiries, contact: [twoshades_ggwp@outlook.com]
