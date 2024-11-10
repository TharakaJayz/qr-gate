import axios from "axios";
import { AdminInterface } from "../forms/AdminForm";

const API_URL = ``;

export const createAdmin = async (adminData: AdminInterface) => {
    return axios.post(API_URL, adminData, {
        headers: {
            'Content-Type': 'Aplication/json',
        },
    });
};