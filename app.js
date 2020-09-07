const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const app = express(); 

// Routes
const postsRoutes = require('./routes/api/posts');

// bodyparser middleware

app.use(express.json());

// connect to MongoDB
mongoose.connect(MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
})
    .then(()=> console.log('MongoDB connected !!!'))
    .catch(err => console.log(err));

// user rotes
app.use('/api/posts',postsRoutes);
// app.get('/',(req,res) => {
//     res.send('hello from nodes');
// });


const PORT = process.env.PORT || 5000;

// How we start listening to the server
app.listen(PORT, () => console.log('Server run at '+ PORT));