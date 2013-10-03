var should = require('should');
var StringBuilder = require('../lib/stringbuilder').StringBuilder;

describe('StringBuilder', function () {
    describe('#appendString', function () {
        it('should append as string ok', function(){
            var sb = new StringBuilder();
            sb.append('This');
            sb.append('Is');
            sb.append('Text');
            var text = sb.toString();
            text.should.eql('ThisIsText');
        })
    });            
    describe('#appendArray', function () {
        it('should append as array ok', function(){
            var sb = new StringBuilder(true);
            sb.append('This');
            sb.append('Is');
            sb.append('Text');
            var text = sb.toString();
            text.should.eql('ThisIsText');
        })
    });                
});
