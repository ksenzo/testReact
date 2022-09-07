import './App.css';
import React from 'react';
import ReactDOM  from 'react-dom/client';
import CalculatorWrap from './components/calculatorWrap';

function App() {

    const selectInsType = {
            id: 1, label: 'Insurance type', value: 'Insurance type',
            options: [
                {label: 'short term insurance', value: 'short'},
                {label: 'annual insurance', value: 'annual' }
            ]}

    const startDate = {
            id: 2, label: 'Period start', value: 'Period start',
            options: [
                  {label: '01.02.03', value: '01.02.03'},
              ]}

      const endDate = {
          id: 3, label: 'Period end', value: 'Period end',
          options: [
              {label: '03.02.03', value: '03.02.03'},
          ]
      }

      const packageSel = {
          id: 4, label: 'Package', value: 'Package',
          options: [
              {label: 'basic', value: 'basic'},
              {label: 'extended', value: 'extend' },
              {label: 'extra', value: 'extra' },
          ]
      }

      const addCharges = {
          id: 5, label: 'Additional charges', value: 'Additional charges',
          options: [
              {label: 'cancellation', value: 'cancel'},
              {label: 'sport activities', value: 'sport' }
          ]
      }

      const numberPerson = {
          id: 6, label: 'No. of persons', value: 'No. of persons',
          options: [
              {label: '1', value: '1'},
              {label: '2', value: '2'},
              {label: '3', value: '3'}
          ]
      }


    return (
        <CalculatorWrap
            selectInsType={selectInsType}
            startDate={startDate}
            endDate={endDate}
            packageSel={packageSel}
            addCharges={addCharges}
            numberPerson={numberPerson}
        />
    );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);