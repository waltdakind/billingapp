var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, RouteHandler, Link} = require('react-router');
var About = require('./about');
var Login = require('./login');
var Billing = require('./billing');
var Manager = require('./manager');
var Employee = require('./employee');

//import Foundation from 'react-foundation';

var App = React.createClass({
  render: function () {
    return (
      <div className="overall">
       <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <Link to="app" className="brand-logo">Billing App</Link>
        <ul className="right hide-on-med-and-down">
          <li><Link to="employee">Employee</Link></li>
          <li><Link to="manager">Manager</Link></li>
          <li><Link to="billing">Billing Report</Link></li>
        </ul>
      </div>
    </nav>
  </div>
  <div className="container">
      <RouteHandler />
  </div>
  </div>
    );
  }
});

var routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='login' handler={Login}/>
    <Route name='about' handler={About}/>
    <Route name='employee' handler={Employee}/>
    <Route name='manager' handler={Manager}/>
    <Route name='billing' handler={Billing}/>
    <DefaultRoute handler={Login}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});