var path = require('path');
console.log(__dirname);

module.exports = {
  entry: './views/app.js',
  output: {
    filename: 'bundle.js',
    // path: path.resolve(__dirname+'\\views\\', 'dist')
    path: path.resolve(__dirname+'\\views\\dist')
    // path: ""
  // }
  }
};

