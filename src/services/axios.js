import {baseURL, baseURL2} from "../constants";
import axios from "axios";

const axiosService = axios.create({baseURL});
const axiosService2 = axios.create({baseURL2});


axiosService.interceptors.request.use((config)=>{

    const access = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmQ2N2U4YTkyODI4Yzg2NGVlODQ3MmIxMTQ2YjMxYyIsInN1YiI6IjYzNTY4NDM3NTZiOWY3MDA3YjE0OWVhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b7KajKp9fSGGW4Rue-Eejey1zsEE0eZm7Y4ipPgdRk0"
    if(access){
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

axiosService2.interceptors.request.use((config)=>{
    const access = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmQ2N2U4YTkyODI4Yzg2NGVlODQ3MmIxMTQ2YjMxYyIsInN1YiI6IjYzNTY4NDM3NTZiOWY3MDA3YjE0OWVhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b7KajKp9fSGGW4Rue-Eejey1zsEE0eZm7Y4ipPgdRk0"
    if(access){
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})



export {axiosService,axiosService2}