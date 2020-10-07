  
import React from 'react';
import './../App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {data} from "../data/dishes";
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


class OrderForm  extends React.Component {
    state = {
        steps: ['Step 1', 'Step 2', 'Step 3', 'Review'],
        activeStep: 0,
        orderInfor: {
            meal: '',
            numberOfPeople: 0,
            restaurant: '',
            dishes: []
        }
    }

    getStepContent = step => {
        switch (step) {
            case 0:
                return <Step1Form orderInfor={this.state.orderInfor} handleChange={this.handleChange}/>;
            case 1:
                return <Step2Form orderInfor={this.state.orderInfor}  handleChange={this.handleChange}/>;
            case 2:
                return <Step3Form orderInfor={this.state.orderInfor} addDishes={this.addDishes}/>;
            case 3:
                return <ReviewForm orderInfor={this.state.orderInfor} />;
            default:
                throw new Error('Unknown step');
        }
    }

    handleChange = event => {
        console.log(event.target.value);
        var {orderInfor} = this.state;
        var error = "";
        if(event.target.name === "meal"){
            orderInfor.meal = event.target.value;
        }
        if(event.target.name === "numberOfPeople"){
            orderInfor.numberOfPeople = event.target.value;
            // if(orderInfor.numberOfPeople < 1 ){
            //     error = "Number of People is invalid!";
            // }
            // if(orderInfor.numberOfPeople > 10 ){
            //     error = "Number of People must less than 11!";
                
            // }

        }
        if(event.target.name === "restaurant"){
            orderInfor.restaurant = event.target.value;

        }
        this.setState({
            orderInfor: orderInfor,
            error: error
        },function(){
            console.log(this.state.orderInfor)
        })
    }

    handleNext = () => {
        
        if(this.state.activeStep  < 4 ){
            if(this.checkData() === 1){
                var activeStep = this.state.activeStep + 1
                this.setState({
                  activeStep: activeStep
                })
              }
              else if(this.checkData() === 0){
                alert('Fill all the field!');
              }
              else if(this.checkData() === 2){
                alert('Not enough dishes!');
              }
        }
    };

    handleBack = () => {
        if(this.state.activeStep  >= 1 ){
            const newStep = this.state.activeStep -1;
            this.setState({activeStep:  newStep});
        }
    };

    checkData = () =>{
        var {activeStep} = this.state;
        var {numberOfPeople,meal,restaurant,dishes} = this.state.orderInfor;
        var result = 1;
        if(activeStep === 0){
          if(!numberOfPeople || ! meal){
            result = 0;
          }
          else{
            result = 1;
          }
        }
        else if(activeStep === 1){
          if(!restaurant){
            result = 0;
          }
          else{
            result = 1;
          }
        }
        else if(activeStep === 2){
          if(!dishes){
            result = 0;
          }
          else{
            var value = null
            dishes.map(dish =>{
              value = value + dish.count
            })
            if(value < numberOfPeople){
              result = 2
            }
            else{
              result = 1;
            }
          }
        }
        return result;
      }
    addDishes = (newdishes) => {
        var {orderInfor} = this.state;
        orderInfor.dishes = newdishes;
        this.setState({ orderInfor: orderInfor },
            function(){
                console.log(this.state.orderInfor)
        })
    }
  
    
    render() {
        const {activeStep, steps} = this.state;


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
                        {this.getStepContent(activeStep)}
                        <div className="buttons" >
                        {activeStep !== 0 && (
                            <Button onClick={this.handleBack} className="button">
                            Back
                            </Button>
                        )}
                        <Button
                           
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
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
}

export default OrderForm;