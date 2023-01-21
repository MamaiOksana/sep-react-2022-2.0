import {axiosServiceSpaceX} from "./axiosSpaseServise"

const spaceXService = {
    getAll: ()=> axiosServiceSpaceX.get('/launches/')
}

export {
    spaceXService
}