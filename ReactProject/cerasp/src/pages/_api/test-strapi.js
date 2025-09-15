// test-strapi.js
// Save this as a separate file and run with Node.js to test your Strapi connection

const axios = require('axios');

async function testStrapiConnection() {
  console.log('Testing Strapi connection...');
  
  try {
    // Test if we can reach the Strapi API
    const response = await axios.get('https://loving-bird-9ef3b0470a.strapiapp.com/api/subscribers');
    
    console.log('Successfully connected to Strapi!');
    console.log('Response status:', response.status);
    console.log('Number of subscribers:', response.data.data?.length || 0);
    
    return true;
  } catch (error) {
    console.error('Failed to connect to Strapi:');
    console.error('Error message:', error.message);
    console.error('Status code:', error.response?.status);
    
    if (error.response?.status === 401 || error.response?.status === 403) {
      console.log('\nPossible authentication issue. You may need an API token.');
    }
    
    return false;
  }
}

async function testAddSubscriber() {
  console.log('\nTesting adding a subscriber...');

  const testData = {
    data: {
      Name: 'Test User',
      Email: `test${Date.now()}@example.com` // Using timestamp to ensure uniqueness
      // Removed the 'Subscribed' field as it doesn't exist in your Strapi model
    }
  };
  
  try {
    console.log('Sending data to Strapi:', JSON.stringify(testData, null, 2));
    
    const response = await axios.post(
      'https://loving-bird-9ef3b0470a.strapiapp.com/api/subscribers',
      testData,
      {
        headers: {
          'Content-Type': 'application/json',
          // Add API token if needed
          // 'Authorization': 'Bearer YOUR_API_TOKEN'
        }
      }
    );
    
    console.log('Successfully added test subscriber!');
    console.log('Response status:', response.status);
    console.log('Created subscriber ID:', response.data.data?.id);
    console.log('Full response data:', JSON.stringify(response.data, null, 2));
    
    return true;
  } catch (error) {
    console.error('Failed to add test subscriber:');
    console.error('Error message:', error.message);
    console.error('Status code:', error.response?.status);
    
    if (error.response?.data) {
      console.error('Error details:', JSON.stringify(error.response.data, null, 2));
      
      // Check if there are field-specific errors
      if (error.response.data.error?.details?.errors) {
        console.log('\nField validation errors:');
        error.response.data.error.details.errors.forEach(err => {
          console.log(`- ${err.path.join('.')}: ${err.message}`);
        });
      }
    }
    
    return false;
  }
}

// Run the tests
async function runTests() {
  const connectionSuccess = await testStrapiConnection();
  
  if (connectionSuccess) {
    await testAddSubscriber();
  }
  
  console.log('\nTest complete!');
}

runTests();

// To run this test:
// 1. Save this file as test-strapi.js
// 2. Run: node test-strapi.js