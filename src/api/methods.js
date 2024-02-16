import axios from 'axios';
const baseUrl = 'http://localhost:3000/loginRouter'

const register = async (username, password) => {
    return await axios.post(`${baseUrl}/register`, {
      username, password
    }).then(response => {
      console.log("You've registered Successfully");
      return response.data  
    }).catch((error) => {
      console.log(error);
  });
}

const logIn = async (username, password) => {
  return await axios.post(`${baseUrl}/login`, {
    username, password
  }).then(response => {
    console.log("You've LogIn Successfully");
    return response.data  
  }).catch((error) => {
    console.log(error);
});
}

export { register, logIn };