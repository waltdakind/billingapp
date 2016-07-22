var React = require('react');

var EmployeeInfo = require('./employeeinfo.jsx');
var ConsumerInfo = require('./consumerInfo.jsx');
var Notes = require('./notes');
var Search = require('./search');
var Medications = require('./medications');

var topMargin = {
	marginTop: "20px"
}
var medStyle = {
		paddingLeft: "0px",
		minHeight: "175px"
	}
var noteStyle = {
	paddingRight: "0px"
}

var minHeight = {
	minHeight: '175px'
}

var marginLeft = {
	marginLeft: '0'
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
	        		<Search />
	       		</div>
	       		<div className="col m4 s12">
		       		<EmployeeInfo />
	       		</div>
	       		<div className="col m8 s12">
       				<ConsumerInfo />
       				<div className="row" style={marginLeft}>
       					<div className="col m12 l3" style={medStyle}>
       						<Medications />
       					</div>	
       					<div className="col m12 l9" style={medStyle}>
       						<Notes />
       					</div>

       				</div>
	       		</div>
       		</div>
    );
  }
});

module.exports = Employee;