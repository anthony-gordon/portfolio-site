const environment = process.env.NODE.ENV || 'development'
const config = require('./../knexfile')[environment]
const connection = require('knex')(config)


function getImages (images, testConn) {
    const conn = testConn || connection
    return conn('images')
}

function addImage (image, testConn) {
    const conn = testConn || connection
    return conn('images').insert(image)
}

module.exports = {
    getImages: getImages,
    addImage: addImage
}