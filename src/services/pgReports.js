/* eslint-disable */
import request from './request';

let baseURL = "";

export let findAll = (values) => {
    let qs = "";
    if (values) {
        qs = Object.keys(values).map(key => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(values[key]);
        }).join('&');
        qs = "?" + qs;
    }
    return request({url: baseURL + "/accessserver" + qs})
        .then(data => data = JSON.parse(data))
}
