import axios from 'axios';

export const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export function convertDate(date) {
    let time = new Date(date);
    return `${time.getDate()} de ${meses[time.getMonth()]}, ${time.getFullYear()}`
}

const baseURL = process.env.NODE_ENV === 'development' ? `http://localhost:3333` : process.env.API_URL;
const api = axios.create({ baseURL });

export default api;