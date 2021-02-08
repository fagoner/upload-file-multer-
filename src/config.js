const path = require('path');

const config =  {
    destinationName: '/uploads',
    destinationFolder: path.join(process.cwd(), 'uploads')
}

module.exports = config;