import { AdminInterface } from "./forms/AdminForm";
import { Zone } from "./forms/EventForm";
import { LoginFormData } from "./pages/login/Login";

const API_BASE_URL = `http://localhost:3000`;
// const API_BASE_URL = process.env.API_BASE_URL || "";

export const createEvent = async (data: Zone) => {
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

export const login = async (data:LoginFormData) => {
     const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
       method: "POST",
       credentials: "include",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     });

     const responseBody = await response.json();
     if (!response.ok) {
       console.log("error", responseBody.message);
       console.log("login response");
       throw new Error(responseBody.message);
     }

     console.log("login response",responseBody);

     return responseBody;
};

// ADMIN API

export const AdminCreate = async (data: AdminInterface) => {
  const response = await fetch(`${API_BASE_URL}/api/admin/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();
  if (!response.ok) {
    console.log("admin create error", responseBody.message);
    console.log("admin create response");
    throw new Error(responseBody.message);
  }

  console.log("login response", responseBody);

  return responseBody;
};


export const fetchAdmins = async (): Promise<any[]> => {
  const response = await fetch(`${API_BASE_URL}/api/admin/get/all-admins`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching admins");
  }

  return response.json();
};
