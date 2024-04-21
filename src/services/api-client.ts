import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5c6955540bbc436c8fab63a9fbb1dc68'
    }
})