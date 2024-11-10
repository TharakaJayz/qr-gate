import axios from "axios";

const API_BASE_URL = ``;

export const createEventPlanner = async (data: {name: string, email: string, password: string}) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/eventplanner`, data);
        return response.data;
    } catch (error) {
        console.log('Error creating event planner: ', error);
        throw error;
    }
};