var assert = require('assert');
var {
    printMsg
} = require('../lib/index')

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(
                printMsg(),
                "This is a message from the demo package"
            );
        });
    });
});