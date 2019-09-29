module.exports = {
    /** Removes protocol prefix and routes from url */
    cleanUrl( url ){
        let temp = url.split('://')[1].split('/')[0];

        return temp.toLowerCase();
    },
    /** Pass a url, returns a Domain */
    getDomain( url ){
        let arr = this.cleanUrl(url).split('.');

        return (arr[arr.length-2]+"."+arr[arr.length-1]).toLowerCase();
    },
    /** Pass a url, returns Subdomain */
    getSubDomain( url ){
        let arr = this.cleanUrl(url).split('.');

        arr.pop();
        arr.pop();

        return arr.join('.').toLowerCase();
    }
}