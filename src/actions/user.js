import axios from "axios";

export const GET_USERINFO="GET_USERINFO"
export const UPDATE_PLOT="UPDATE_PLOT"


export function getUserInfo(user) {
    return {
        type: 'GET_USERINFO',
        payload:user
    }
}

export function updatePlot(plot) {
    return {
        type: 'UPDATE_PLOT',
        payload:plot
    };
}
