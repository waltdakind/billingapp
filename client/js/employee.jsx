var React = require('react');
var topMargin = {
	marginTop: "20px"
}
var medStyle = {
		paddingLeft: "0px"
	}
var noteStyle = {
	paddingRight: "0px"
}

var Employee = React.createClass({

	
  render: function () {
    return (
        	<div className="row">
	        	<div className="col m12" style={topMargin}>
	        		<input className="input-field col m9" type="text"/>
	       			<a className="waves-effect waves-light btn col m3">SEARCH</a>
	       		</div>
	       		<div className="col m3 s12">
	       			<div className="card">
	       				<div className="card-image">
	       					<img src="/../img/example-profile.jpg" />
	       					<span className="card-title"><h3>John Doe</h3></span>
	       				</div>
	       				<div className="card-content">
	       					<h5>Check in time: </h5>
	       					<h5>Current time: </h5>
	       				</div>
	       				<div className="card-action">
	       					<a className="waves-effect waves-light btn-large">CHECKOUT</a>
	       				</div>	
	       			</div>
	       		</div>
	       		<div className="col m9 s12">
       				<div className="card">
       					<div className="card-title">
       						<h3 className="text-center">Consumer Info</h3>
       					</div>
	       				<div className="card-content">
		       				<h5>Name: </h5>
		       				<h5>Address: </h5>
		       				<h5>Phone: </h5>
		       				<h5>Age: </h5>
		       				<h5>DOB: </h5>
		       				<h5>ID No: </h5>
	       				</div>
       				</div>
       				<div className="row">
       					<div className="col m3" style={medStyle}>
       						<div className="card">
       						<div className="card-title">
       							<h4 className="text-center">Medications</h4>
       						</div>
	       						<div className="card-content">
	       							<ul>
	       								<li>Med 1</li>
	       								<li>Med 2</li>
	       								<li>Med 3</li>
	       							</ul>
	       						</div>
       						</div>
       					</div>
       					<div className="col m9" style={noteStyle}>
       						<div className="card">
       							<div className="card-title">
       								<h4 className="text-center">Notes</h4>
       							</div>
	       						<div className="card-content">
	       							<ul>
	       								<li>Note 1</li>
	       								<li>Note 2</li>
	       							</ul>
	       							<input className="col m9" type="text"/>
	       							<a className="waves-effect waves-light btn col m3">ADD NOTE</a>
	       						</div>
       						</div>
       					</div>

       				</div>
	       		</div>
       		</div>
    );
  }
});

module.exports = Employee;