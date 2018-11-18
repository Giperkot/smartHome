
export function  getHttpPromise (config) {
    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open(config.method, config.url, true);
        xhr.setRequestHeader("Content-type", config.contentType);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send(JSON.stringify(config.jsonData));
    });
}


