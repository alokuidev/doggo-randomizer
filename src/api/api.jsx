import axios from "axios";

export const fetchApi = async () =>{
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        console.log(response.data)
        return response.data;    
    } catch (error) {
        console.error("Error while fetching data:",error);
        throw error;
    }
        
}; 


