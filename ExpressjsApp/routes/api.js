const userRoute = require("./userRoutes/userRoute")


function initRoutes(app) {

    app.use('/api/user', userRoute)

}

module.exports = initRoutes