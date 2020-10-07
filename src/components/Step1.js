import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import NumberInput from 'material-ui-number-input';
import { FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import {data} from "../data/dishes";
import Select from '@material-ui/core/Select';
import {InputLabel} from '@material-ui/core';


class Step1Form extends React.Component {

    displayItems = items => (
         items.map( item => (
            <MenuItem
                key={item}
                value={item}
            >{item}</MenuItem>
        ))
    )
    
    render() {
        const meals = ["breakfast", "lunch", "dinner"];
        const peoples = [1,2,3,4,5,6,7,8,9,10];
        const {meal, numberOfPeople} = this.props.orderInfor;

        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <FormControl style={{margin: "20px"}} className="form-controll"> 
                        <InputLabel><span >Please Select A Meal</span></InputLabel>
                        <Select
                            name="meal"
                            required
                            defaultValue ={meal ? meal: ""}
                            onChange={(event) => this.props.handleChange(event)}
                        >
                            {this.displayItems(meals)}
                         </Select>
                        </FormControl>
                        <FormControl style={{margin: "20px"}} className="form-controll"> 
                        <InputLabel><span >Please Select A Number Of People</span></InputLabel>
                        <Select
                            name="numberOfPeople"
                            type="number"
                            defaultValue ={numberOfPeople ? numberOfPeople: ""}
                            onChange={(event) => this.props.handleChange(event)}
                            inputProps={{ min: 1, max: 10}}
                        >
                        {this.displayItems(peoples)}
                         </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
export default Step1Form;