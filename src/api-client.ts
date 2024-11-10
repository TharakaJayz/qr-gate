import { EventCreateInterface } from "./forms/EventForm";

const API_BASE_URL = ``;


export const createEvent = async (data: EventCreateInterface) => {
    try {
        const response = await fetch(`${API_BASE_URL}/events`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        });

        const responseBody = await response.json();
        if (!response.ok) {
            console.log("Error in createEvent:", responseBody.message);
            throw new Error(responseBody.message);
        }

        return responseBody;

    } catch (error) {
        console.error("Error creating event:", error);
        throw error;
    }
}