
const isAuthenticated = (req, res, next) => {
    if (req.cookies.userId) {
        
        next()
    } else {
    
        res.redirect('/')
    }
}

module.exports = { isAuthenticated }
