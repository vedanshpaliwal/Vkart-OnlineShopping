import axios from 'axios'

// const url = 'http://localhost:8000'
const url = 'https://localhost:7273'



export const authenticatesignup = async (user) => {
    try {

        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log(error)
    }
}
export const signInWithOrder = async (user) => {
    try {

        return await axios.post(`${url}/signInWithOrder`, user)
    } catch (error) {
        console.log(error)
    }
}

export const GetSuggestions = async (content) => {
    let ques = content.toString();
    try {
        let resp = await axios.post(`${url}/api/ReadOutput`, { text: ques });
        return resp.data;
    }
    catch (error) {
        console.log("error in getAiResponse", error)
    }
}

export const authenticatelogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log(error)

    }
}


export const payusingpaytm = async (data) => {
    try {
        let response = await axios.post(`${url}/payment`, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}