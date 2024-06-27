import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import recipeRoute from './routes/recipeRoute.js';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from "path";
import bodyParser from 'body-parser';

dotenv.config()

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();
// app.use(cors());


// app.use(express.static(path.join(__dirname, '/frontend/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
// });
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.use('/backend/user', userRoute);
app.use('/backend/recipes', recipeRoute);
app.use('/backend/auth', authRoute)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
});






// server.listen(3000, 'localhost'); // or server.listen(3001, '0.0.0.0'); for all interfaces
// server.on('listening', function() {
//     console.log('Express server started on port %s at %s', server.address().port, server.address().address);
// });