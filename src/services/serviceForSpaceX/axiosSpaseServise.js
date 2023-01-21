import axios from "axios";

const axiosServiceSpaceX = axios.create({baseURL:'https://api.spacexdata.com/v3'})

export {
    axiosServiceSpaceX
}
