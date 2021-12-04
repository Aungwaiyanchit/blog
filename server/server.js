import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import PostRoute from './routes/posts.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true  }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true } ))
app.use(cors());

app.use('/api', PostRoute)

const DB_URL = 'mongodb+srv://ADan3433:ADan3433@cluster0.0nype.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = 5000;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));