const AccessDatabase = require('../../models/AccessDatabase');
console.log('This function is getting called');
module.exports = (app) => {
  console.log('This function is getting called');
  app.get('/api/results', (req, res, next) => {
    AccessDatabase.findAll()
      .exec()
      .then((res) => res.json(res))
      .catch((err) => next(err));
  });
};
