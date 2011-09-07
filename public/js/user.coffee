$(->

  $("#haiku").load("/first")

  getCurrentId = ->
    el = $(".hidden-id")
    if el.length
      return el.html()
    input = $("input[name=haiku[_id]]")
    if input.length
      return input.val()
    else
      null

  nextHaiku = ->
    $("#haiku").load "/h/#{ getCurrentId() }/next"

  currentHaiku = ->
    $("#haiku").load "/h/#{ getCurrentId() }/"
  saveHaiku = ->

  newHaiku = -> $("#haiku").load('/new')

  editHaiku = ->
    $("#haiku").load "/h/#{ getCurrentId() }/edit"


  loadHandlers = ->
    $("#next").live('click', nextHaiku)
    $("#cancel").live('click', currentHaiku)
    $("#new").live('click', newHaiku)
    $("#edit").live('click', editHaiku)
    $("#save").live('click', saveHaiku)

  loadHandlers()
)