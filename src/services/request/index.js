export default opts => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(opts.method || "GET", opts.url);
        xhr.setRequestHeader('Accept','application/json');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin','*');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = () => {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };
        if (opts.headers) {
            Object.keys(opts.headers).forEach(key => {
                xhr.setRequestHeader(key, opts.headers[key]);
            });
        }

        xhr.send(opts.data);
    });
}