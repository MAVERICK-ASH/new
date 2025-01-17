const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://maverick007ash:ash123456789@cluster0.dhq8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected!'));