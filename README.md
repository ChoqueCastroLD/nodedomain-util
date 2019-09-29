# nodedomain-util
A set of pure functions for easy domain string manipulation written in JavaScript for Node

Use example:

```javascript
const ndt = require('nodedomain-util');

let url = 'https://www.github.com/ChoqueCastroLD/nodedomain-util.git';

ndt.cleanUrl(url)
// Returns 'www.github.com'

ndt.getDomain(url)
// Returns 'github.com'

ndt.getSubDomain(url)
// Returns 'www'
```