$(->

  o = {
    currentId: null
    }

  stripQuotes = (s) ->
    s.replace("\"", "").replace("\"", "")

  $.get("/first", (data) ->
    o.currentId = stripQuotes(data)
    $("#haiku").load("/h/" + o.currentId)
    )

  nextHaiku = ->
    $.get("/h/#{ o.currentId }/next", (data) ->
      o.currentId = stripQuotes(data)
      $("#haiku").load("/h/" + o.currentId)
    )

  currentHaiku = ->
    $("#haiku").load "/h/#{ o.currentId }/"

  saveHaiku = ->

  newHaiku = ->
    $("#haiku").load('/new')

  editHaiku = ->
    $("#haiku").load "/h/#{ o.currentId }/edit"


  loadHandlers = ->
    $("#next").live('click', nextHaiku)
    $("#cancel").live('click', currentHaiku)
    $("#new").live('click', newHaiku)
    $("#edit").live('click', editHaiku)
    $("#save").live('click', saveHaiku)

  loadHandlers()
)