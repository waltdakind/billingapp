var React = require('react');

var Employee = React.createClass({
  render: function () {
    return (
       <div><h2>Welcome to Our Billing App</h2>
       <h3> This is the employee page. </h3>
       <a className="waves-effect waves-light btn">button</a>
       </div>
    );
  }
});

module.exports = Employee;