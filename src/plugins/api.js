
import axios from "axios";
import Cookies from 'js-cookie'

const api  = axios.create({
    baseURL : "http://any.ru",
    headers : {
        'Authorization': Cookies.get('token') ? "Bearer " + Cookies.get('token') : '',
        //'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : '',
    }
})

export default api