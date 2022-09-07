import "./style.css";
import Select from 'react-select'
import React, { useState } from "react";


function CalculatorWrap(props) {

    const [insuranceChoice, setInsuranceChoice] = useState("");
    const [startChoice, setStartChoice] = useState("");
    const [endChoice, setEndChoice] = useState("");
    const [packageChoice, setPackageChoice] = useState("");
    const [addChargesChoice, setAddChargesChoice] = useState("");
    const [numberPersonChoice, setNumberPersonChoice] = useState("");

    const selectedType = insuranceChoice.value;
    const selectedStart = startChoice.value;
    const selectedEnd = endChoice.value;
    const selectedPack = packageChoice.value;
    const selectedAdd = addChargesChoice.value;
    const selectedPers = numberPersonChoice.value;

    const arrOfValues = {
        selectedType: selectedType,
        selectedStart: selectedStart,
        selectedEnd: selectedEnd,
        selectedPack: selectedPack,
        selectedAdd: selectedAdd,
        selectedPers: selectedPers
    }


    const [resulOfCalc, setCount] = useState('');


    const calculateTrip = (value) => {

        const {selectedType, selectedStart, selectedEnd, selectedPack, selectedAdd, selectedPers} = value;

        if(selectedType == undefined || selectedStart == undefined || selectedEnd == undefined || selectedPack == undefined || selectedPers == undefined) {
            alert('Choose all required fields');
        } else if(selectedType !== undefined && selectedStart !== undefined && selectedEnd !== undefined && selectedPack !== undefined && selectedPers !== undefined) {
            if(selectedType === 'short') {
                let basic = 1.2;
                let extend = 1.8;
                let extra = 2.4;
                let addCash;
                if (selectedAdd === 'sport')
                {addCash = 1.1} else {addCash = 1.2}
                let priceOfPack;
                let date = 2;

                if (selectedPack === 'basic') {
                    priceOfPack = basic;

                } else if (selectedPack === 'extend') {
                    priceOfPack = extend;
                } else if (selectedPack === 'extra') {
                    priceOfPack = extra;
                }

                return (Math.round((priceOfPack ? priceOfPack : 1) * (date ? date : 1) * (addCash ? addCash : 1) * (selectedPers ? selectedPers : 1) * 100) / 100 + ' ' + '€')
            }

            if(selectedType === 'annual') {
                let basic = 39;
                let extend = 49;
                let extra = 59;
                let addCash;
                let date = 2;

                if (selectedAdd === 'sport')
                {addCash = 1.3} else {addCash = 1.5}

                let priceOfPack;

                if (selectedPack === 'basic') {
                    priceOfPack = basic;
                } else if (selectedPack === 'extend') {
                    priceOfPack = extend;
                } else if (selectedPack === 'extra') {
                    priceOfPack = extra;
                }

                return (Math.round((priceOfPack ? priceOfPack : 1) * (date ? date : 1) * (addCash ? addCash : 1) * (selectedPers ? selectedPers : 1) * 100) / 100 + ' ' + '€')
            }
        }
    }

            return (

                <div className='row box_selects'>
                    <div className='row wrpa_selects'>
                        <h2 className='title'>Insurance Calucator</h2>
                        <form className='form'>
                            <label className='label'>Insurance Type <i className={'fa fa-asterisk required'}></i></label>
                            <Select
                                id={props.selectInsType.id}
                                className="select col-md-12"
                                options={props.selectInsType.options}
                                onChange={(choice) => setInsuranceChoice(choice)}
                            />
                        </form>
                        <form className='form'>
                            <label className='label'>Start date <i className={'fa fa-asterisk required'}></i></label>
                            <Select
                                id={props.selectInsType.id}
                                className="select col-md-12"
                                options={props.startDate.options}
                                onChange={(choice) => setStartChoice(choice)}
                            />
                        </form>
                        <form className='form'>
                            <label className='label'>End date <i className={'fa fa-asterisk required'}></i></label>
                            <Select
                                id={props.selectInsType.id}
                                className="select col-md-12"
                                options={props.endDate.options}
                                onChange={(choice) => setEndChoice(choice)}
                            />
                        </form>
                        <form className='form'>
                            <label className='label'>Package <i className={'fa fa-asterisk required'}></i></label>
                            <Select
                                id={props.selectInsType.id}
                                className="select col-md-12"
                                options={props.packageSel.options}
                                onChange={(choice) => setPackageChoice(choice)}
                            />
                        </form>
                        <form className='form'>
                            <label className='label'>Additional Charges</label>
                            <Select
                                id={props.selectInsType.id}
                                className="select col-md-12"
                                options={props.addCharges.options}
                                onChange={(choice) => setAddChargesChoice(choice)}
                            />
                        </form>
                        <form className='form'>
                            <label className='label'>No. of persons <i className={'fa fa-asterisk required'}></i></label>
                            <Select
                                id={props.selectInsType.id}
                                className="select col-md-12"
                                options={props.numberPerson.options}
                                onChange={(choice) => setNumberPersonChoice(choice)}
                            />
                        </form>
                    </div>
                    <div className='footer'>
                        <label className='input'>
                            <input value={resulOfCalc ? resulOfCalc : 'Choose all required fields'} disabled/>
                        </label>
                        <button onClick={() => setCount(calculateTrip(arrOfValues))}>Calc</button>
                    </div>
                </div>
            );
}

export default CalculatorWrap;