var Haiku, HaikuSchema, ObjectId, Schema, haikuObj, mongoose;
mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/haiku');
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
haikuObj = {
  body: {
    type: String,
    "default": '',
    required: true
  },
  show: {
    type: Boolean,
    "default": true
  },
  parent: {
    type: ObjectId
  },
  created_at: {
    type: Date,
    "default": Date.now
  }
};
HaikuSchema = new Schema(haikuObj);
HaikuSchema.method('something', function(x) {
  return x + 2;
});
HaikuSchema.methods.test = function(callback) {};
2;
HaikuSchema.method('work', function() {
  return 2;
});
HaikuSchema.method('dateString', function() {
  return haiku.created_at.getDate() + " " + haiku.created_at.getMonth();
});
HaikuSchema.virtual('random').get(function() {
  return Math.random();
});
mongoose.model('Haiku', HaikuSchema);
Haiku = exports.Haiku = mongoose.model('Haiku');