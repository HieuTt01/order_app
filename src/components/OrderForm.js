
import React,{ useState} from 'react';
import './../App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { data } from "../data/dishes";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1Form from './Step1';
import Step2Form from './Step2';
import Step3Form from './Step3';
import ReviewForm from './Review';


function OrderForm(props) {
    const [steps, setSteps] = useState(['Step 1', 'Step 2', 'Step 3', 'Review']);

    const [activeStep, setActiveStep] = useState(0);
    // const [orderInfor, setOrderInfor] = useState({});
    const [meal, setMeal] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(0);
    const [restaurant, setRestaurant] = useState('');
    const [dishes, setDishes] = useState([]);
    const [error, setError] = useState('');

    // state = {
    //     steps: ['Step 1', 'Step 2', 'Step 3', 'Review'],
    //     activeStep: 0,
    //     orderInfor: {
    //         meal: '',
    //         numberOfPeople: 0,
    //         restaurant: '',
    //         dishes: []
    //     }
    // }
    var orderInfor = {
        meal,
        numberOfPeople,
        restaurant,
        dishes
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <Step1Form orderInfor={orderInfor} handleChange={handleChange} />;
            case 1:
                return <Step2Form orderInfor={orderInfor} handleChange={handleChange} />;
            case 2:
                return <Step3Form orderInfor={orderInfor} addDishes={addDishes} />;
            case 3:
                return <ReviewForm orderInfor={orderInfor} />;
            default:
                throw new Error('Unknown step');
        }
    }

    function handleChange(event) {
        console.log(event.target.value);
        var error = "";
        if (event.target.name === "meal") {
           setMeal( event.target.value);
        }
        if (event.target.name === "numberOfPeople") {
            setNumberOfPeople( event.target.value);
            // if(orderInfor.numberOfPeople < 1 ){
            //     error = "Number of People is invalid!";
            // }
            // if(orderInfor.numberOfPeople > 10 ){
            //     error = "Number of People must less than 11!";

            // }

        }
        if (event.target.name === "restaurant") {
            // orderInfor.restaurant = event.target.value;
            setRestaurant( event.target.value )

        }
        setError(error);
    }

    function handleNext() {

        if (activeStep < 4) {
            if (checkData() === 1) {
                setActiveStep(activeStep + 1);
            }
            else if (checkData() === 0) {
                alert('Fill all the field!');
            }
            else if (checkData() === 2) {
                alert('Not enough dishes!');
            }
        }
    };

    function handleBack() {
        if (activeStep >= 1) {
            setActiveStep(activeStep - 1);
        }
    };

    function checkData() {
        var result = 1;
        if (activeStep === 0) {
            if (!numberOfPeople || !meal) {
                result = 0;
            }
            else {
                result = 1;
            }
        }
        else if (activeStep === 1) {
            if (!restaurant) {
                result = 0;
            }
            else {
                result = 1;
            }
        }
        else if (activeStep === 2) {
            if (!dishes) {
                result = 0;
            }
            else {
                var value = null
                dishes.map(dish => {
                    value = value + dish.count
                })
                if (value < numberOfPeople) {
                    result = 2
                }
                else {
                    result = 1;
                }
            }
        }
        return result;
    }
    function addDishes(newdishes) {
        setDishes(newdishes);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="absolute" color="default" className="appBar">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Fabi Test
                </Typography>
                </Toolbar>
            </AppBar>
            <main className="layout">
                <Paper className="paper">
                    <Typography component="h1" variant="h4" align="center">
                        Order
                </Typography>
                    <Stepper activeStep={activeStep} className="stepper">
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                        </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order confirmation, and will
                                    send you an update when your order has shipped.
                        </Typography>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className="buttons" >
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className="button">
                                                Back
                                            </Button>
                                        )}
                                        <Button

                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className="button"
                                        >
                                            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}

export default OrderForm;