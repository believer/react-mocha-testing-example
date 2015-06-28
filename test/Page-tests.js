require('./testdom')('<html><body></body></html>');

var React      = require('react');
var chai       = require('chai');
var expect     = chai.expect;
var sinon      = require('sinon');
var proxyquire = require('proxyquire');
var reactStub  = require('./reactStub');

chai.use(require('sinon-chai'));

describe('Page', function () {
  var React;
  var TestUtils;
	var Page;
	var moment;
  var element;

	beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;

		moment = sinon.stub().returns({
			format: sinon.spy()
		});

		Page = proxyquire(process.cwd() + '/components/Page.js', {
			'./Header': reactStub,
 			'moment': moment
		});

    element = TestUtils.renderIntoDocument(
      <Page />
    );
	});

  it('should render', function () {
    expect(React.findDOMNode(element).className).to.eql('page');
  });

	it('should format current date', function () {
		expect(moment().format).calledWith('YYYY-MM-DD');
	});
});
