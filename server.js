const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const articleRoutes = express.Router();
app.use(cors());
app.use(bodyParser.json());
app.use('/articles', articleRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/articles', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

articleRoutes.route('/movies').get(function(req,res) {
    Article.find(function(err, articles ){
        if(err){
            console.log(err);
        } else {
            res.json(articles)
        }
    });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});