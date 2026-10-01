# Personal Portfolio

A modern, responsive personal portfolio website built with **React and TypeScript**.

The project brings together personal information, skills and projects in a single-page interface. Project information is dynamically retrieved from GitHub repositories and enriched with locally defined metadata such as images, categories, technologies and live demo URLs.

The application is deployed using **Firebase Hosting**.

## 🌐 Live Demo

**Portfolio:**
https://beratkarabulutt.web.app/

---

## 🛠️ Technologies

* React
* TypeScript
* Redux Toolkit
* Axios
* GitHub API
* Swiper
* Formik
* Yup
* EmailJS
* Firebase Hosting
* CSS

---

## ✨ Features

### GitHub API Integration

Project repositories are retrieved dynamically from GitHub using the GitHub API.

The application uses:

* Axios for HTTP requests
* `createAsyncThunk` for asynchronous Redux operations
* GitHub repository topics for project filtering
* Repository metadata such as name, description and URL

The data received from GitHub is matched with locally defined project metadata to provide additional information such as:

* Project image
* Project category
* Technologies
* Display order
* Live demo URL

This approach allows the portfolio to dynamically reflect repository data while keeping presentation-specific information under application control.

---

### Component-Based Architecture

The application follows a component-based React structure.

Each major section of the portfolio is implemented as a separate component and combined into a single-page interface.

This structure helps keep the application:

* Modular
* Maintainable
* Reusable
* Easier to extend

---

### Project Showcase

Projects are displayed through an interactive **Swiper** slider.

Each project card receives its data through props and presents information such as:

* Project name
* Description
* Category
* Technologies
* Repository
* Live demo

The project data is separated from the UI components to keep content and presentation logic independent.

---

### Redux Toolkit

Redux Toolkit is used for centralized state management.

Asynchronous operations are handled with `createAsyncThunk`, particularly for GitHub API requests and contact form related state.

The application also manages different request states, including loading states, so that asynchronous operations are properly reflected in the UI.

---

### Contact Form

The contact section uses a combination of:

* **Formik** for form state management
* **Yup** for validation
* **EmailJS** for sending messages

Form validation is handled before submitting the request, providing users with immediate feedback for invalid or missing fields.

The contact-related asynchronous state is also managed through Redux.

---

### TypeScript

TypeScript is used throughout the application to improve type safety and maintainability.

Custom types and interfaces are defined for application data, including project metadata and component props.

Example:

```ts
export const projectMeta: Record<string, ProjectMeta> = {
  "Gupse-Cafe-Menu-System": {
    image: gupseCafeImage,
    category: "Menu System",
    technologies: ["Html", "Css", "JavaScript"],
    order: 1,
  },
};
```

This allows project data to remain structured and predictable throughout the application.

---

## 📂 Project Structure

A simplified version of the project structure:

```text
src/
├── components/
│   ├── ...
│
├── data/
│   ├── projectMeta.ts
│   └── ...
│
├── images/
│   └── projects/
│
├── redux/
│   ├── slices/
│   └── ...
│
├── types/
│   └── Type.ts
│
├── App.tsx
└── main.tsx
```

The project is organized around reusable components, centralized state management, typed data structures and separated project metadata.

---

## 🔄 Data Flow

The project data flow can be summarized as:

```text
GitHub API
    ↓
Axios
    ↓
createAsyncThunk
    ↓
Redux Store
    ↓
Repository / Topic Filtering
    ↓
Project Metadata Matching
    ↓
Project Components
    ↓
Swiper Project Cards
```

Locally defined metadata is used to supplement the information returned from GitHub.

For example, a GitHub repository can be matched with metadata containing its project image, category and technology stack.

---

## 📋 Project Metadata

Project-specific presentation data is maintained separately from the components.

Example metadata includes:

```ts
{
  image,
  category,
  liveUrl,
  technologies,
  order
}
```

This separation makes it possible to modify project information without changing the component implementation.

---

## ⚡ Loading States

Since the application performs asynchronous operations, loading states are handled within the Redux state.

This prevents the UI from appearing unresponsive while repository or contact-related operations are in progress.

---

## 🚀 Deployment

The application is deployed with **Firebase Hosting**.

The production version is available at:

https://beratkarabulutt.web.app/

---

## 💻 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available through the local development server.

---

## 🔐 Environment Variables

If environment variables are required for API or third-party service configuration, create a `.env` file based on the project's environment configuration.

Example:

```env
VITE_GITHUB_TOKEN=your_github_token
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Never commit private API keys, tokens or other sensitive credentials to the repository.

---

## 📌 Purpose

This project was developed as a personal portfolio and as a practical application of modern frontend development concepts.

The main focus areas include:

* React component architecture
* TypeScript
* State management with Redux Toolkit
* REST API integration
* Asynchronous data handling
* Form management and validation
* Third-party service integration
* Responsive UI development
* Firebase deployment

---

## 👨‍💻 Developer

**Berat Karabulut**

Frontend Developer

🌐 Portfolio:
https://beratkarabulutt.web.app/

💻 GitHub:
https://github.com/beratkrbltt
