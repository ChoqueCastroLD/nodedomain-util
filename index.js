const ndt = require('./src/nodedomainutil.js');


let url = 'https://www.github.com/ChoqueCastroLD/nodedomain-util.git';

ndt.cleanUrl(url)
// Returns 'www.github.com'

ndt.getDomain(url)
// Returns 'github.com'

ndt.getSubDomain(url)
// Returns 'www'