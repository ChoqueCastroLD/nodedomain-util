module.exports = {
    /** Removes protocol prefix and routes from url */
    cleanUrl( url = '' ){
        let temp = url;

        if(url.search('://') != -1)
            temp = url.split('://')[1]+'';

        if(url.search('/') != -1)
            temp = temp.split('/')[0];

        return temp.toLowerCase();
    },
    /** Pass a url, returns a Domain */
    getDomain( url = '' ){
        let arr = this.cleanUrl(url).split('.');

        let domain = arr[arr.length-1];

        if(arr.length > 1)
            domain = (arr[arr.length-2]+"."+arr[arr.length-1]);

        return domain.toLowerCase();
    },
    /** Pass a url, returns Subdomain */
    getSubDomain( url = '' ){
        let arr = this.cleanUrl(url).split('.');

        arr.pop();
        arr.pop();

        return arr.join('.').toLowerCase();
    }
}