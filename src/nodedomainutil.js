module.exports = {
    /** Removes protocol prefix and routes from url */
    cleanUrl( url ){
        url = url.split('://')[1];
        url = url.split('/')[0];

        return url.toLowerCase();
    },
    /** Pass a url, returns a Domain */
    getDomain( url ){
        url = this.cleanUrl(url);

        let arr = url.split('.');
        return (arr[arr.length-2]+"."+arr[arr.length-1]).toLowerCase();
    },
    /** Pass a url, returns Subdomain */
    getSubDomain( url ){
        url = this.cleanUrl(url);
        
        let arr = url.split('.');
        arr.pop(); arr.pop();
        return arr.join('.').toLowerCase();
    }
}