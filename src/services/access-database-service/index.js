import request from '../request';

let baseURL = "";

export let findAll = (values) => {
    let qs = "";
    if (values) {
        qs = Object.keys(values).map(key => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(values[key]);
        }).join('&');
        qs = "?" + qs;
    }
    debugger
    return request({url: "http://127.0.0.1:4000/results" + qs})
        .then(data => console.log(data))
}