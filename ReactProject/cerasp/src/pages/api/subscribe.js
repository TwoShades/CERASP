// pages/api/subscribe.js
import axios from 'axios';

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { Name, Email } = req.body;
  
  // More detailed validation
  if (!Email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }
  
  if (!Email.includes('@') || !Email.includes('.')) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  console.log('Attempting to subscribe:', { Name, Email });

  try {
    // Call your Strapi API to add the subscriber
    const strapiResponse = await axios.post(
      `https://loving-bird-9ef3b0470a.strapiapp.com/api/subscribers`,
      {
        data: {
          Name,
          Email
          // Removed the 'Subscribed' field as it doesn't exist in your Strapi model
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    console.log('Strapi response:', {
      status: strapiResponse.status,
      data: strapiResponse.data
    });

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    console.error('Newsletter subscription error details:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url
    });
   
    // Handle duplicate email error gracefully
    if (error.response?.data?.error?.message?.includes('duplicate') ||
        error.response?.data?.error?.details?.errors?.some(e => e.message.includes('already taken'))) {
      return res.status(200).json({
        success: true,
        message: 'You\'re already subscribed to our newsletter!'
      });
    }
   
    // Provide more detailed error information
    return res.status(500).json({
      success: false,
      message: 'Error subscribing to newsletter. Please try again later.',
      error: error.response?.data?.error?.message || error.message
    });
  }
}