module.exports = function(app){
    app.use('/register', require('./routes/register'));
    app.use('/users',require('./routes/users'));
}