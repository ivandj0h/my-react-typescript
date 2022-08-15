import React from 'react';
import './App.css';
// import Customer from './component/Customer';
// import CustomerClass from './component/CustomerClass';
import { Employee } from './component/Employee';
import { EmployeeClass } from './component/EmployeeClass';

function App() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col-12">
              {/* <Customer name={'Juna'} age={7} /> */}
              {/* <CustomerClass name={'dave'} age={12} /> */}
              <Employee />
              <EmployeeClass />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
