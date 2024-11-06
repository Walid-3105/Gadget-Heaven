# Project Name: Gadget Heaven

# Fundamental concepts used in the project:

## 1. Components

Building reusable, functional components like GadgetDetails and Statistics to structure the UI efficiently.

## 2. State Management with useState

Using useState to manage local state within components, such as tracking items in the cart and wishlist.

## 3. Props

Passing data between components through props to make components flexible and reusable.

## 4. React Router

Navigating between different pages, accessing parameters with useParams, and fetching data directly via useLoaderData.

## 5. Hooks (useState, useEffect)

useEffect for running side effects like fetching data when dependencies change.
useState for handling stateful logic within functional components.

## 6. Conditional Rendering

Showing or hiding elements based on conditions, such as disabling buttons after clicking or rendering different content based on data presence.

# What I have used for handling and managing data:

## In my project, I’m using localStorage to handle and manage data for the cart and wishlist, ensuring they persist across sessions. I’ve built functions to retrieve, add, and remove items from localStorage, which keeps the data accessible even after a page refresh. When a user performs actions like adding or removing items, they receive immediate feedback with toast notifications using react-hot-toast. This setup keeps things lightweight and allows me to avoid more complex state management tools like the Context API.

# 5 features of my project:

## 1.Cart and Wishlist Management: Users can add products to their cart and wishlist, with items saved in localStorage so they persist across sessions.

## 2.Interactive UI with Toast Notifications: The project provides immediate feedback to users with toast notifications for actions like adding or removing items, enhancing the user experience.

## 3.Detailed Product View: Each product page displays essential details, including title, price, description, specifications, and ratings, with a visually engaging layout.

## 4.Conditional Button States: Buttons, such as "Add to Cart" and "Add to Wishlist," are disabled after they’re clicked, preventing duplicate entries and providing a seamless interaction.

## 5.Dynamic Data Display with Charts: The statistics page features a line or bar chart to visualize product data, making information easy to interpret at a glance.

# Live Link:

# Netlify: https://walid-assignment-8.netlify.app/

# Surge: https://unruly-jelly.surge.sh/

# Document Link: file:///C:/PH%20Web%20Devlopment%20Course/Milestone%208/B10-A8-gadget-heaven/Batch-10_Assignment-08.pdf
