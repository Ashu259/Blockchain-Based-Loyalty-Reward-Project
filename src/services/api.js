import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateUser = async (data) =>{
    try {
       return await axios.post(`${URL}/signup`, data)
    } catch (error) {
          console.log("Error with sign up api call" , error)
    }
}

export const authenticateLogin = async (data) =>{
    try {
       return await axios.post(`${URL}/login`, data)
    } catch (error) {
          console.log("Error with login api call" , error);
          return error.response;
    }
}

export const createProduct = async (data) => {
    try {
        return await axios.post(`${URL}/create` , data)
    } catch (error) {
        console.log("Error with creating product" , error)
        return error.response;
    }
}
