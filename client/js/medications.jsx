var React = require('react');

var medHeight = {
	minHeight: "inherit"
}

var Medications = React.createClass({
	render: function(){
		return (
			<div className="card" style={medHeight}>
				<div className="card-title">
					<h5 className="text-center">Medications</h5>
				</div>
				<div className="card-content">
					<ul>
						<li>Med 1</li>
						<li>Med 2</li>
						<li>Med 3</li>
					</ul>
				</div>
			</div>
		)
	}
})

module.exports = Medications;