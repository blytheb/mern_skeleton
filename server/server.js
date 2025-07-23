import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)

// mongoose.connect('error', () => {
//     throw new Error(`Unable to connect to databse: ${config.mongoUri}`)
// })

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server started on port ${config.port}`)
})