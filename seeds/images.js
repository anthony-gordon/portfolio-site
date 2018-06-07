
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, image_description: 'Picture of the Mona Lisa', url: 'https://imgc.allpostersimages.com/img/print/posters/mona-lisa-joint_a-G-371424-0.jpg'},
      ]);
    });
};
