import {axiosService} from "./axiosService";
import {urls} from "../configs";

const usersService = {
    getAll:()=>axiosService.get(urls.users),
    create:(newUser)=>axiosService.post(urls.users, newUser),
    updateById:(id,data)=>axiosService.put(`${urls.users}/${id}`,data),
    delete:(id)=>axiosService.delete(`${urls.users}/${id}`)
}

export {
    usersService
}