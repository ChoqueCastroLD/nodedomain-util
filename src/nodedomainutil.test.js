const ndt = require('./nodedomainutil.js');

test('getDomain test, passing a localhost url should return localhost domain', () => 
    expect(
        ndt.getDomain('http://localhost/')
    )
    .toBe(
        'localhost'
    )
)

test('getDomain test, passing a url should return its domain name', () => 
    expect(
        ndt.getDomain('http://www.luisChoQUe.coM/')
    )
    .toBe(
        'luischoque.com'
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