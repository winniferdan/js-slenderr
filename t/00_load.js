var test = require('tape').test
var Slenderr = require('..')

test('can load module', function (t) {
    t.ok(Slenderr.define, 'var Slenderr = require("Slender")')
    t.end()
})
