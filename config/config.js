const config = {
    env: process.env.NODE_ENV || 'development', //differ dev vs production
    port: process.env.PORT || 3000, //define listening port
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", //secret key used to sign JWT
    mongoUri: process.env.MONGODB_URI || //location of MongoDB database
    process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.MONGO_PORT || '27017') +
        '/mernproject'
}
export default config