const express=require('express')
const cookieParser = require('cookie-parser')
const db=require('./config/db')
const usermodal = require('./model/usermodel')
const { isAuthenticated } = require('./auth')
const app=express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.post("/insertData",async(req,res)=>{
    const data=await usermodal.create(req.body)
    res.send(data)
})

app.get('/',async(req,res)=>{
    res.render('home', {
        loginError: undefined,
        signupError: undefined,
        signupSuccess: undefined
    })
})

app.delete('/:id',async(req,res)=>{
    const id=req.params.id
    const data=await usermodal.findByIdAndDelete(id)
    res.send("success")
})

app.patch('/:id',async(req,res)=>{
    const id=req.params.id
    const data=await usermodal.findByIdAndUpdate(id,req.body)
    res.send(data)
})


app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.render('home', {
                loginError: "Username and Password required",
                signupError: undefined,
                signupSuccess: undefined
            });
        }

        const user1 = await usermodal.findOne({ username });

        if (!user1) {
            return res.render('home', {
                loginError: "Invalid username",
                signupError: undefined,
                signupSuccess: undefined
            });
        }

        if (user1.password !== password) {
            return res.render('home', {
                loginError: "Invalid password",
                signupError: undefined,
                signupSuccess: undefined
            });
        }

        
        res.cookie('userId', user1._id, { maxAge: 24 * 60 * 60 * 1000 }); // 24 hours
        res.cookie('username', user1.username, { maxAge: 24 * 60 * 60 * 1000 });

    
        res.redirect('/dashboard');

    } catch (error) {
        console.log(error);
        res.render('home', {
            loginError: "Something went wrong",
            signupError: undefined,
            signupSuccess: undefined
        });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.render('home', {
                loginError: undefined,
                signupError: "Username and Password required",
                signupSuccess: undefined
            });
        }

        const userExists = await usermodal.findOne({ username });
        if (userExists) {
            return res.render('home', {
                loginError: undefined,
                signupError: "Username already taken",
                signupSuccess: undefined
            });
        }

        const newUser = await usermodal.create({ username, password });

        res.cookie('userId', newUser._id, { maxAge: 24 * 60 * 60 * 1000 });
        res.cookie('username', newUser.username, { maxAge: 24 * 60 * 60 * 1000 });

        res.redirect('/dashboard');

    } catch (error) {
        console.log(error);
        res.render('home', {
            loginError: undefined,
            signupError: "Something went wrong during signup",
            signupSuccess: undefined
        });
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('userId');
    res.clearCookie('username');
    res.redirect('/');
});

app.get('/dashboard', isAuthenticated, async (req, res) => {
    try {
        const user = await usermodal.findById(req.cookies.userId);
        
        res.render('dashboard', {
            username: user.username,
            userId: user._id
        });
    } catch (error) {
        res.redirect('/');
    }
});

app.listen(8000,()=>{
    console.log("listen 8000")
})