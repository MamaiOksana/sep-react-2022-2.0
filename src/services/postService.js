
import {axiosService} from "./axiosService";


const postService = {
    getPostById: (id) => axiosService.get(axiosService.postById(id))
};

export {
    postService
}