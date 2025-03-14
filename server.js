const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection with error handling
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://xsrluis:Luispaulino4@data.ct8q8.mongodb.net/?retryWrites=true&w=majority&appName=Data')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Fan Schema
const fanSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  createdAt: { type: Date, default: Date.now }
}, { collection: 'fans' });

const Fan = mongoose.model('Fan', fanSchema);

// API endpoint
app.post('/api/newsletter', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Check if email already exists
    const existingFan = await Fan.findOne({ email });
    if (existingFan) {
      return res.status(400).json({ message: 'Este correo ya está registrado' });
    }

    // Create new fan
    const fan = new Fan({ name, email, phone });
    await fan.save();
    
    res.status(201).json({ message: '¡Gracias por registrarte!' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar, intenta de nuevo' });
  }
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  server.close(() => process.exit(1));
});
