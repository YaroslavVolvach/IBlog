function authentication(request, response, next){
    if(request.session.user_id){
        next()
    }else{
        response.redirect('/login')
    }
}

module.exports = authentication