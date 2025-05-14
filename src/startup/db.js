const mongoose = require('mongoose');
const { logger } = require('../middleware/logger');


module.exports = function () {
    mongoose.connect(process.env.DB_URL).then(() => {
        logger.info('Connected to MongoDB Onlive database...');
        //adminSeeder.seedAdmin();
        //categorySeeder.seedCategories();

        //if (process.env.NODE_ENV === 'development') {
        //    productSeeder.seedProducts();
        //    userSeeder.seedUsers();
        //    userReportSeeder.seedUserReports();
        //}
    }).catch(error => {
        logger.error(`Could not connect to MongoDB onlive database: ${error.message}`);
        process.exit(1);
    });
}