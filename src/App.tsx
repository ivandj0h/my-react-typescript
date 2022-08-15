import React from 'react';
import './App.css';
import Counter from './component/Counter';
// import Customer from './component/Customer';
// import CustomerClass from './component/CustomerClass';
import { Employee } from './component/Employee';
import { EmployeeClass } from './component/EmployeeClass';
import Greeting from './component/Greeting';

function App() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col-12">
              {/* <Customer name={'Juna'} age={7} /> */}
              {/* <CustomerClass name={'dave'} age={12} /> */}
              {/* <Employee /> */}
              {/* <EmployeeClass /> */}
              {/* <Counter /> */}
              <Greeting />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
