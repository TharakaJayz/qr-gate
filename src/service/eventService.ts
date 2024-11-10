import axios from "axios";

const API_BASE_URL = ``;

export const createEvent = async (data: {
    title: string;
    date: string;
    location: string;
    plannerId: string;
    type?: string;
    limit?: number;
}) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/events`, data);
        return response.data;
    } catch (error) {
        console.error("Error creating event:", error);
        throw error;
    }
}