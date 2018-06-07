
exports.up = function(knex, Promise) {
    return knex.schema.createTable('images', (table) => {
        table.increments('id').primary()
        table.string('image_description')
        table.string('url')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('images')
};