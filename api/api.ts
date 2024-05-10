import api from "./axios"

export const getPersons = async () => {
    try {
        const  response = await api.get('/persons');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getMedicamentos = async () => {
    try {
        const response = await api.get('/medications');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}