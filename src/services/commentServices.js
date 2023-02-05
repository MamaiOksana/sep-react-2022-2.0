import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentServices = {
    getAll:()=>axiosService.get(urls.comments)
}

export {
    commentServices
}