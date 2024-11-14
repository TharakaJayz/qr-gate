import { AdminInterface } from "./forms/AdminForm";
import { Event } from "./forms/EventForm";
import { EventPlannerInterface } from "./forms/EventPlannerForm";
import { LoginFormData } from "./pages/login/Login";

const API_BASE_URL = `http://localhost:4001`;
const API_BASE_URL_EVENT = `http://localhost:4002`;
// const API_BASE_URL = process.env.API_BASE_URL || "";

// EVENT API

export const createEvent = async (data: Event) => {
  try {
    console.log("payload to create event",data);
    const response = await fetch(`${API_BASE_URL_EVENT}/api/event/create`, {
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

    console.log("error creation response", responseBody);

    return responseBody;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const fetchEvents = async (): Promise<any[]> => {
  const response = await fetch(`${API_BASE_URL_EVENT}/api/event/events`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching admins");
  }

  return response.json();
};

export const fetchEventById = async (id: string): Promise<any[]> => {
  const response = await fetch(`${API_BASE_URL_EVENT}/api/event/getevent/${id}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Error fetching admin ${id} `);
  }

  return response.json();
};


// ADMIN API

export const login = async (data: LoginFormData) => {
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

  console.log("login response", responseBody);

  
  return responseBody;
};


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

export const fetchAdminById = async (id: string): Promise<any[]> => {
  const response = await fetch(`${API_BASE_URL}/api/admin/get/admin/${id}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Error fetching admin ${id} `);
  }

  return response.json();
};

// EVENT PLANNER API

export const createEventPlanner = async (data: EventPlannerInterface) => {
  // console.log("payload to ");
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/add-eventPlanner`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseBody = await response.json();
    if (!response.ok) {
      console.log("Error in createEventPlanner:", responseBody.message);
      throw new Error(responseBody.message);
    }

    console.log("error creation event planner response", responseBody);

    return responseBody;
  } catch (error) {
    console.log("Error creating event planner: ", error);
    throw error;
  }
};
