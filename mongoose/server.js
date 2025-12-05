const express = require('express');
const path = require('path');
const db = require('./config/db');              // MongoDB connection
const User = require('./userModel/usermodel');  // Mongoose model
const multer = require('multer');

const app = express();

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/upload', express.static(path.join(__dirname, 'upload')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');   
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });


app.get('/', async (req, res) => {
    try {
        const user1 = await User.find({});
        // console.log("All users:", user1);
        res.render('home', { user1 });
    } catch (err) {
        console.log(err);
        res.send(err);
        
    }
});

app.post('/insertData', upload.single('image'), async (req, res) => {
    try {
        // Check what is coming
        console.log("Body:", req.body);
        console.log("File:", req.file);

        const { username, password } = req.body;
        const image = req.file ? req.file.filename : '';

        await User.create({ username, password, image });

        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});


app.listen(3180, () => {
    console.log('Server Listening on 3180');
});