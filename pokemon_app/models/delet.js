app.get('/deleteuser/:id', function(req, res) { 

    var db = req.db;

    var uid = req.params.id.toString();
    var collection = db.get('usercollection');

    collection.remove({"_id":uid}, function(err, result) { 
        res.send( (result === 1) ? { msg: 'Deleted' } : { msg: 'error: '+ err } );
    });

});