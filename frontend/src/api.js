import axios from "axios";

const API_URL = "http://127.0.0.1:5000";


export const getStatus = async () => {
    try {
        const response = await axios.get(`${API_URL}/status`);
        return response.data;
    } catch (error) {
        console.error("Erreur API :", error);
    }
};