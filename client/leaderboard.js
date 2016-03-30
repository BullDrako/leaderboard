Template.players.helpers({
    players: Players.find({}, {sort:{score: -1, name: +1}})
});
/*Players.find().fetch();  mostrar los obetos creados. ponerlo en terminal de chromw*/
Template.body.events({
   'submit form': function(e,t){
       Players.insert({name: t.find('#playerName').value, score: 0}); /*insertar*/
       t.find('#playerName').value = ''; /*vaciar caja de texto*/
       e.preventDefault();/*para que no recargue*/
   }
});

Template.players.events({
    'click .remove': function(e,t){
        Players.remove(this._id);
        e.preventDefault();
    },
    /*Players.update(this._id,{score: 5}); borra el documento y crea uno nuevo*/
    /*Players.update(this._id, {$set: {score: 5}});*/
    'click .increment': function(e,t){
        Players.update(this._id, {$inc: {score: 5}});
    },
    'click .decrement': function(e,t){
        Players.update(this._id, {$inc: {score: -5}});
    }
});