import request from '../request/index';

let baseURL = "";

export let findAll = (values) => {
  let qs = "";
  if (values) {
    qs = Object.keys(values).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(values[key]);
    }).join('&');
    qs = "?" + qs;
  }
  console.log('Base Results Data -> ' + qs);
  return request({url: baseURL + "/results" + qs})
    .then(data => data = JSON.parse(data))
}
