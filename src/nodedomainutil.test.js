const ndt = require('./nodedomainutil.js');

test('getDomain test, passing a localhost url should return localhost domain', () => 
    expect(
        ndt.getDomain('http://localhost:90/')
    )
    .toBe(
        'localhost:90'
    )
)

test('getDomain test, passing a url should return its domain name', () => 
    expect(
        ndt.getDomain('http://luisChoQUe/')
    )
    .toBe(
        'luischoque'
    )
)

test('getDomain test, passing a url should return its domain name, no protocol', () => 
    expect(
        ndt.getDomain('luisChoQUe:80/help')
    )
    .toBe(
        'luischoque:80'
    )
)

test('getDomain test, passing a url should return its domain name, no protocol, no routes', () => 
    expect(
        ndt.getDomain('www.luisChoQUe.coM')
    )
    .toBe(
        'luischoque.com'
    )
)

test('getSubDomain test, passing a url should return its subdomain, no protocol', () => 
    expect(
        ndt.getSubDomain('www.npmjs.com/package/nodedomain-util')
    )
    .toBe(
        'www'
    )
)
test('getSubDomain test, passing a url should return its subdomain', () => 
    expect(
        ndt.getSubDomain('ws://WWW.luisChoQUe.coM/')
    )
    .toBe(
        'www'
    )
)

test('cleanUrl test, passing a url should remove protocol and routes from url', () => 
    expect(
        ndt.cleanUrl('https://WWW.luisChoQUe.coM/api/v1/users/4')
    )
    .toBe(
        'www.luischoque.com'
    )
)

test('cleanUrl test, passing a localhost url should remove protocol and routes from url', () => 
    expect(
        ndt.cleanUrl('https://localhost:90/api/v1/users/4')
    )
    .toBe(
        'localhost:90'
    )
)