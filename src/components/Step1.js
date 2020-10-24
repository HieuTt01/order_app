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


function Step1Form(props) {

    function displayItems(items) {
        return (
             items.map( item => (
                <MenuItem
                    key={item}
                    value={item}
                >{item}</MenuItem>
            ))
        )
    }
    
        const meals = ["breakfast", "lunch", "dinner"];
        const peoples = [1,2,3,4,5,6,7,8,9,10];
        const {meal, numberOfPeople} = props.orderInfor;

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
                            onChange={(event) => props.handleChange(event)}
                        >
                            {displayItems(meals)}
                         </Select>
                        </FormControl>
                        <FormControl style={{margin: "20px"}} className="form-controll"> 
                        <InputLabel><span >Please Select A Number Of People</span></InputLabel>
                        <Select
                            name="numberOfPeople"
                            type="number"
                            defaultValue ={numberOfPeople ? numberOfPeople: ""}
                            onChange={(event) => props.handleChange(event)}
                            inputProps={{ min: 1, max: 10}}
                        >
                        {displayItems(peoples)}
                         </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
}
export default Step1Form;