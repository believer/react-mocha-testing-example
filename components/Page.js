var React  = require('react');
var Header = require('./Header');
var moment = require('moment');

module.exports = React.createClass({
	render: function () {
		var date = moment().format('YYYY-MM-DD');

		return (
			<div className="page">
				<Header date={date} />
			</div>
		);
	}
});
