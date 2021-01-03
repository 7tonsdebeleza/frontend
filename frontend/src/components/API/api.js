import axios from 'axios';

export const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export function convertDate(date) {
    let time = new Date(date);
    return `${time.getDate()} de ${meses[time.getMonth()]}, ${time.getFullYear()}`
}

const baseURL = "https://api.7tonsdebeleza.com.br/"
const api = axios.create({ baseURL });

export default api;
