var React = require('react');

var EmployeeInfo = require('./employeeinfo.jsx');
var ConsumerInfo = require('./consumerInfo.jsx');

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
	_handleClick: function(){
		alert("you clicked a button!");
	},
	_addNote: function(x){
		$('#notes ul').append($('#noteContent').val()).append('<br>');
		$('#noteContent').val('');
	},
  render: function () {
    return (
        	<div className="row">
	        	<div className="col m12" style={topMargin}>
	        		<input className="input-field col m9" type="text"/>
	       			<a className="waves-effect waves-light btn col m3">SEARCH</a>
	       		</div>
	       		<div className="col m3 s12">
		       		<EmployeeInfo />
	       		</div>
	       		<div className="col m9 s12">
       				<ConsumerInfo />
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
	       						<div className="card-content" id="notes">
	       							<ul>
	       							</ul>
	       							<input className="col m9" type="text" id="noteContent"/>
	       							<a className="waves-effect waves-light btn col m3" onClick={this._addNote}>ADD NOTE</a>
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