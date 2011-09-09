(function() {
  $(function() {
    var currentHaiku, editHaiku, loadHandlers, newHaiku, nextHaiku, o, saveHaiku, stripQuotes;
    o = {
      currentId: null
    };
    stripQuotes = function(s) {
      return s.replace("\"", "").replace("\"", "");
    };
    $.get("/first", function(data) {
      o.currentId = stripQuotes(data);
      return $("#haiku").load("/h/" + o.currentId);
    });
    nextHaiku = function() {
      return $.get("/h/" + o.currentId + "/next", function(data) {
        o.currentId = stripQuotes(data);
        return $("#haiku").load("/h/" + o.currentId);
      });
    };
    currentHaiku = function() {
      return $("#haiku").load("/h/" + o.currentId + "/");
    };
    saveHaiku = function() {};
    newHaiku = function() {
      return $("#haiku").load('/new');
    };
    editHaiku = function() {
      return $("#haiku").load("/h/" + o.currentId + "/edit");
    };
    loadHandlers = function() {
      $("#next").live('click', nextHaiku);
      $("#cancel").live('click', currentHaiku);
      $("#new").live('click', newHaiku);
      $("#edit").live('click', editHaiku);
      return $("#save").live('click', saveHaiku);
    };
    return loadHandlers();
  });
}).call(this);
