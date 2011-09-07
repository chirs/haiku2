var Haiku, app, baseDir, detail, editHaiku, express, firstHaiku, index, models, newHaiku, path;
express = require('express');
path = require('path');
models = require('./model');
Haiku = models.Haiku;
baseDir = path.normalize("" + __dirname + "/..");
app = module.exports = express.createServer();
app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.use(app.router);
  app.set('views', "" + baseDir + "/views");
  app.set('view engine', 'jade');
  return app.use(express.static("" + baseDir + "/public"));
});
index = function(req, res) {
  return res.render('index', {
    haikus: []
  });
};
firstHaiku = function(req, res) {
  var callback;
  callback = function(err, haiku) {
    return res.render('show', {
      layout: false,
      haiku: haiku.doc
    });
  };
  return Haiku.findOne({
    show: true
  }, callback);
};
newHaiku = function(req, res) {
  return res.render('new', {
    layout: false
  });
};
editHaiku = function(req, res) {
  var callback;
  callback = function(err, haiku) {
    return res.render('edit', {
      layout: false,
      haiku: haiku.doc
    });
  };
  return Haiku.findOne({
    _id: req.params.id
  }, callback);
};
detail = function(req, res) {
  var callback;
  callback = function(err, haiku) {
    return res.render('show', {
      layout: false,
      haiku: haiku.doc
    });
  };
  return Haiku.findOne({
    _id: req.params.id
  }, callback);
};
app.get('/', index);
app.get('/first', firstHaiku);
app.get('/new', newHaiku);
app.get('/h/:id', detail);
app.get('/h/:id/edit', editHaiku);