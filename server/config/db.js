'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    //azure 数据库地址
    // uri: 'mongodb://139.217.11.69/nodeTest'
    uri: 'mongodb://localhost/nodeTest'
  },

  // Seed database on startup
  seedDB: true

};
