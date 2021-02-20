import axios from "axios";

const url = "https://data.nadpco.com/v1/BaseInfo/Companies";


export default {
    get: axios.get,
    post: axios.post,
    url,
};
