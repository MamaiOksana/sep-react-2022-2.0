import {axiosService} from "./axiosService";

import {urls} from "../configs/index";


const albumsService = {
    getAll: () => axiosService.get(urls.albums)
}


export {
    albumsService
}
