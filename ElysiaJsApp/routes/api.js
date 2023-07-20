// api.js
// This file defines the route groups for the API

// Import elysia and create a router instance
import { Elysia } from "elysia";


// Import the user routes
import userRoutes from './userRoute/userRoute';

// Define the route groups for each resource
function initRoutes(app) {
    userRoutes(app)
}

// Export the router
export default initRoutes;
// module.exports = initRoutes
