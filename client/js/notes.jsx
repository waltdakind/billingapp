var React = require('react');

var noteHeight = {
	minHeight: 'inherit'
}

var Notes = React.createClass({
	
	_addNote: function(x){
		$('#notes ul').append($('#noteContent').val()).append('<br>');
		$('#noteContent').val('');
	},
	render: function(){
		return (
			<div className="card" style={noteHeight}>
				<div className="card-title">
					<h5 className="text-center">Notes</h5>
				</div>
				<div className="card-content" id="notes">
					<ul>
					</ul>
					<input className="col m9" type="text" id="noteContent"/>
					<a className="waves-effect waves-light btn col m3 blue darken-4" onClick={this._addNote.bind(this)}>ADD NOTE</a>
				</div>
			</div>
		)
	}
})

module.exports = Notes;