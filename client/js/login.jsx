var React = require('react');
//TODO add button for registering new user
//separate new user and login buttons to diff jsx  components
var Login = React.createClass({
  render: function () {
    return (
      <div><h2>Welcome to Our Billing App</h2>
       <div className="large-3 large-centered columns">
  <div className="login-box">
  <div className="row">
  <div className="large-12 columns">
    <form>
       <div className="row">
         <div className="large-12 columns">
             <input type="text" name="username" placeholder="Username" />
         </div>
       </div>
      <div className="row">
         <div className="large-12 columns">
             <input type="password" name="password" placeholder="Password" />
         </div>
      </div>
      <div className="row">
        <div className="large-12 large-centered columns">
          <input type="submit" className="button expand" value="Log In"/>
        </div>
      </div>
    </form>
  </div>
</div>
</div>
</div>
       </div>
    );
  }
});

module.exports = Login;
