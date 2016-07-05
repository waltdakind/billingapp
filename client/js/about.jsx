var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div><h2>Checkout <a href="http://foundation.webrafter.com">The packages used to set up this skeleton</a> -- react foundation apps</h2>
          <h2>  <a href="https://github.com/akiran/generator-react-foundation-apps">Github repo</a></h2>
          <h2>  <a href="http://foundation.webrafter.com/blog/2015/1/5/getting-started-with-react-foundation-apps">Install instructions</a></h2>
      </div>

    );
  }
});

module.exports = About;