(function() {
  $(function() {
    var currentHaiku, editHaiku, getCurrentId, loadHandlers, newHaiku, nextHaiku, saveHaiku;
    $("#haiku").load("/first");
    getCurrentId = function() {
      var el, input;
      el = $(".hidden-id");
      if (el.length) {
        return el.html();
      }
      input = $("input[name=haiku[_id]]");
      if (input.length) {
        return input.val();
      } else {
        return null;
      }
    };
    nextHaiku = function() {};
    currentHaiku = function() {
      var x;
      x = getCurrentId();
      return $("#haiku").load("/h/" + (getCurrentId()) + "/");
    };
    saveHaiku = function() {};
    newHaiku = function() {
      return $("#haiku").load('/new');
    };
    editHaiku = function() {
      var x;
      x = getCurrentId();
      return $("#haiku").load("/h/" + (getCurrentId()) + "/edit");
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
