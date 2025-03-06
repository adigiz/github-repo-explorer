# GitHub Repositories Explorer

A simple **GitHub Repositories Explorer** built with **React, TypeScript, Vite, React Query, and Tailwind CSS**.  
This app allows users to **search for GitHub users** and view their **repositories, descriptions, and star counts** in an accordion-style UI.

## Features

- Search for GitHub users  
- View repositories in an accordion UI  
- See repository descriptions and star count  
- Styled with Tailwind CSS for a modern UI  

---

## Installation & Setup

### Clone the Repository
```sh
git clone https://github.com/adigiz/github-repositories-explorer.git
cd github-repositories-explorer
```

### Install Dependencies
```sh
npm install
```

### Set Up Environment Variables  
Create a `.env` file by copying the `.env.example` file in the root directory:
```
VITE_GITHUB_API_URL=https://api.github.com
```

### Run the Development Server
```sh
npm run dev
```
Then, open **http://localhost:5173/** in your browser.

---

## Project Structure
```
src
 ┣ api            # API calls to GitHub
 ┃ ┣ github.ts    # Fetch users and repositories
 ┣ components     # Reusable UI components
 ┃ ┣ SearchBar.tsx
 ┃ ┣ UserList.tsx
 ┃ ┣ RepoList.tsx
 ┣ hooks          # Custom React Query hooks
 ┃ ┣ useUsers.ts
 ┃ ┣ useRepositories.ts
 ┣ pages          # Page-level components
 ┃ ┣ Home.tsx
 ┣ App.tsx        # Main app entry
 ┣ main.tsx       # React and Vite entry
 ┗ vite.config.ts # Vite configuration
```

---

## Technologies Used

- Vite - Fast build tool for React  
- React + TypeScript - Strongly typed UI development  
- React Query - Efficient API data fetching and caching  
- Tailwind CSS - Responsive and modern UI styling  

---

## Future Improvements
- Add unit test
- Add pagination for repositories  
- Implement infinite scrolling for user search  
- Improve error handling for GitHub API rate limits  
