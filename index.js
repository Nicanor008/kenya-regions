import axios from 'axios';

const API_URL = 'http://localhost:4001/counties'

// Retrieve all counties
export const GetCounties = async () => {
  try {
    const config = {
      method: 'GET',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json'
      },
    };
  
    const response = await axios(config)
    return response?.data
  } catch(e) {
    let message = e.message
    
    if (e.response) {
      message = JSON.stringify(e.response.data)
    }

    throw {
      type: 'quickbase_update_solarman_setting_error',
      message: `${message || 'Error Occurred, Try again'}`
    }
  }
}
