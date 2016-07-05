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
      <div className="grid-frame vertical">
        <div className="grid-content shrink" style={{padding: 0}}>
          <ul className="primary condense menu-bar">
            <li><a><strong>Billing App</strong></a></li>
            <li><Link to="login">Log in</Link></li>
            <li><Link to="employee">Employee Page</Link></li>
            <li><Link to="manager">Manager Page</Link></li>
            <li><Link to="billing">Billing Report</Link></li>
          </ul>
        </div>
        <div className="grid-content">
          <div className="grid-container">
            <RouteHandler />
          </div>
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