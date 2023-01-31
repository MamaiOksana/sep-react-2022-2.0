import {axiosService} from "./axiosService";
import {urls} from "../configs/index";


const toDoService = {
    getAll: () => axiosService.get(urls.todos)
}


export {
    toDoService
}
