const { User } = require("../models")

function addUser(request, response){
    User.create(request.body)
    .then(data => {
        var session = request.session
        session.save(() => {
            session.user_id = data.id;
            session.username = data.username;
            session.loggedIn = true;

            response.json(data);
        });
    })
    .catch(error => {response.status(500).json(error)});
};

function login(request, response){
    const session = request.session
    User.findOne({where: {username: request.body.username}})
        .then(data => {

            if (data === null) {
                response.status(404).json("User does not exist! Try to use other username or password")
                return
            }

            const validPassword = data.checkPassword(request.body.password);
            
            if(!validPassword){
                response.status(400).json({message: 'Incorrect password!'})
            }else{
                session.save(() => {
                    session.user_id = data.id;
                    session.username = data.username;
                    session.loggedIn = true;
    
                    response.json({user: data, message: 'You are logged in!'});
                });
            }
        
        });
    }
    


function logout (request, response) {
    if (request.session.loggedIn) {
        request.session.destroy(() => {response.status(204).end()});
    } else {
        res.status(404).end();
    }
}

module.exports = {addUser, login, logout}
