express = require 'express'
path = require 'path'
models = require './model'
Haiku = models.Haiku

baseDir = path.normalize "#{__dirname}/.."

app = module.exports = express.createServer()

app.configure( ->

  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use express.cookieParser()
  app.use express.errorHandler({ dumpExceptions: true, showStack: true })

  app.use app.router

  app.set('views', "#{baseDir}/views")
  app.set('view engine', 'jade')
  app.use express.static("#{baseDir}/public")
  )


index = (req, res) ->
    res.render('index', { haikus: [] })


firstHaiku = (req, res) ->
  callback = (err, haiku) ->
    res.render('show', {layout: false, haiku: haiku.doc})
  Haiku.findOne({show:true}, callback)

newHaiku = (req, res) -> res.render('new', {layout: false})

editHaiku = (req, res) ->
  callback = (err, haiku) ->
    res.render('edit', {layout: false, haiku: haiku.doc})
  Haiku.findOne({_id:req.params.id}, callback)

detail = (req, res) ->
  callback = (err, haiku) ->
    res.render('show', {layout: false, haiku: haiku.doc})
  Haiku.findOne({_id:req.params.id}, callback)



app.get('/', index)
app.get('/first', firstHaiku)
app.get('/new', newHaiku)
app.get('/h/:id', detail)
app.get('/h/:id/edit', editHaiku)