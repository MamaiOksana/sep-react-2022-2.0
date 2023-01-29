import axios from "axios";

import {baseURL} from "../configs/index"


const axiosService = axios.create({baseURL});


export {
    axiosService
}