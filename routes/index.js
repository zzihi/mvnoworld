
module.exports = function(app, User) {
    
    
    /* GET home page. */
    app.get('/', function(req, res) {
      res.render('index', { title: 'MVNO ROOM' });
    });
    
    /* GET Login */
    app.get('/api/login', function(req, res) {
        User.findOne({phone_number: req.body.inputPN, birthday : req.body.inputBirth}
            , function(err, books){
                if(err) return res.status(500).send({error: 'database failure'});
                res.json(books);
            })
    });
/**
    // todo get
    app.get('/api/todo', function(req, res) {
       res.end(); 
    });    
    
    // todo :user_id get
    app.get('api/todo/:user_id', function(req, res) {
       res.end(); 
    });
    
    // todo :user_id update
    app.put('/api/todo/:user_id', function(req, res) {
       res.end(); 
    });
    
    // todo create
    app.post('/api/todo', function(req, res) {
       res.end(); 
    });
    
    // todo :user_id delete
    app.delete('/api/todo/:user_id', function(req, res) {
       res.end(); 
    });
*/
}