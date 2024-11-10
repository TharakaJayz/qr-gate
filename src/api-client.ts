const API_BASE_URL = process.env.API_BASE_URL || '';

export const login = async () => {
     const response = await fetch(`${API_BASE_URL}/api/users/register`, {
       method: 'POST',
       credentials: 'include',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({}),
     });
};
