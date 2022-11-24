// const axios = require('axios');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    // console.log(posts);
    await queryInterface.bulkInsert(
      'Posts',
      posts.map((post) => ({
        text: post.body,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
