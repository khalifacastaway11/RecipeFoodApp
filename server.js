const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Add error logging middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

app.get('/api/recipes', async (req, res) => {
  const { q } = req.query;
  const APP_ID = "099235ce";
  const APP_KEY = "1da888d07f94d0d561567348c66debc7";
  
  try {
    // Log the request
    console.log('Fetching recipes for query:', q);
    
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      {
        headers: {
          'Accept': 'application/json',
          
        }
      }
    );
    
    // Log successful response
    console.log('API response status:', response.status);
    res.json(response.data);
    
  } catch (error) {
    // Detailed error logging
    console.error('API Error:', {
      status: error.response?.status,
      message: error.message,
      data: error.response?.data
    });
    
    res.status(500).json({ 
      error: 'Error fetching recipes',
      details: error.message,
      status: error.response?.status
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});