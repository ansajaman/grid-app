import axios from "axios";
import {initializeAxiosMockAdapter, isMockEnabled,} from "./mock.config";

let instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': '*'
    }
});

if (isMockEnabled()) {
    initializeAxiosMockAdapter(instance);
}

export const http = instance;