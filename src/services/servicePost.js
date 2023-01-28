import {axiosService} from "./axiosService";
import {urls} from "../configs";


const servicePost = {
    getAll: () => axiosService.get(urls.posts),
    getById: () => axiosService.get(`${urls.posts}/${id}`)
}


export {
    servicePost
}