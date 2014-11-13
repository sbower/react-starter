var peeps = [ {firstname: "shawn", lastname:"bower", id: 1} ];
var i = 10;
var callbacks = []

module.exports = {
    getById: function (id) {
       return peeps.find(function(peep) {return peep.id == id})
    },
    insert: function(object) {
       object.id = i++;
       peeps.push (object);
       callbacks.forEach(function(cb) {
           cb();
       })
      
    },
    register: function (cb) {
        callbacks.push(cb)
    },
    getAll: function() {
        return peeps;
    },
}