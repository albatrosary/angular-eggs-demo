'use strict';

exports = module.exports = function(app) {

  var tasks = require('../data/tasks.json');

  app.get('/api/tasks', function(req, res) {
    console.log('get all');
    res.status(200).json(tasks);
  });

  app.get('/api/tasks/:id', function(req, res) {
    console.log('get');
    var id = req.params.id;
    res.status(200).json(tasks[id]);
  });

  app.post('/api/tasks', function(req, res) {
    console.log('post(add)');
    tasks.push({
      'title': req.body.title,
      'desc':  req.body.desc
    });
    res.send(200);
  });

  app.put('/api/tasks', function(req, res) {
    console.log('put(update)');
    var id = req.body.id;
    tasks[id] = {
      'title': req.body.title,
      'desc':  req.body.desc
    };
    res.send(200);
  });

  app.delete('/api/tasks/:id', function(req, res) {
    console.log('delete');
    var id = req.params.id;
    tasks.splice(id, 1);
    res.send(200);
  });

  app.delete('/api/tasks', function(req, res) {
    console.log('remove(all delete)');
    tasks = [];
    res.send(200);
  });
};
