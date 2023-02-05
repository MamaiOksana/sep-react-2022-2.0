import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postServices = {
    getAll:()=> axiosService.get(urls.posts)
}

export {
    postServices
}