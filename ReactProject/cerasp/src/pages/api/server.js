// server.js - Create this file in your project root
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API route for newsletter subscription
app.post('/api/subscribe', async (req, res) => {
  const { Name, Email } = req.body;
  
  if (!Email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  try {
    // Call Strapi API
    const response = await axios.post(
      'https://loving-bird-9ef3b0470a.strapiapp.com/api/subscribers',
      {
        data: {
          Name,
          Email
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error.response?.data || error.message);
    
    // Handle duplicate email error
    if (error.response?.data?.error?.message?.includes('duplicate') ||
        error.response?.data?.error?.details?.errors?.some(e => e.message.includes('already taken'))) {
      return res.status(200).json({
        success: true,
        message: 'You\'re already subscribed to our newsletter!'
      });
    }
    
    return res.status(500).json({
      success: false,
      message: 'Error subscribing to newsletter. Please try again later.'
    });
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// To run this server:
// 1. Install dependencies: npm install express axios cors body-parser
// 2. Start the server: node server.js