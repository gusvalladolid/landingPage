import axios from 'axios';
const baseUrl = 'http://localhost:3000/loginRouter'

const getAllUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/getAll`);
    return response.data;
  } catch (error) {
    console.error('Error fetching:', error);
    return 'An error occurred while fetching'
  }
}

export default getAllUsers;