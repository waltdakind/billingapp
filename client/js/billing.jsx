var React = require('react');

var Billing = React.createClass({
  render: function () {
    return (
    	<div className="billingPage">
 <table className="striped">
  <h3 className="center-align">Billing Report</h3>
        <thead>
          <tr>
          
              <th data-field="id">Client Name</th>
              <th data-field="location">Location</th>
              <th data-field="hours">Hours Billed</th>
              <th data-field="rate">Hourly Rate</th>
              <th data-field="amountDue">Amount Due</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin Harris</td>
            <td>Meadow Hill</td>
            <td>23</td>
            <td>$2</td>
            <td>$46.00</td>
          </tr>
          <tr>
            <td>Alan Jones</td>
            <td>Jellybean Way</td>
            <td>25</td>
            <td>$2</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>Jonathan Roberts</td>
            <td>Quik-e-Stop</td>
            <td>244</td>
            <td>$2</td>
            <td>$488.00</td>            
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
});

module.exports = Billing;