import axios from "axios";

export const fetchApi = async () =>{
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        return response.data;    
    } catch (error) {
        console.error("Error while fetching data:",error);
        throw error;
    }
        
}; 


