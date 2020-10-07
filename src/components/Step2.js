import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import {data} from "../data/dishes";
import Select from '@material-ui/core/Select';
import {InputLabel} from '@material-ui/core';


class Step2Form extends React.Component {

    displayItems = items => (
         items.map( item => (
            <MenuItem
                key={item}
                value={item}
            >{item}</MenuItem>
        ))
    )

    getRestaurantsByMeal = () => {
        var  mealSelected = this.props.orderInfor.meal;
        var restaurantsTemp = [];
        data.dishes.map((value) => {
          var index1 = value.availableMeals.indexOf(mealSelected);
          if (index1 !== -1) {
            restaurantsTemp.push(value.restaurant);
          }
        });
        var restaurant = [];
        restaurantsTemp.map((value) => {
          var index2 = restaurant.indexOf(value);
          if (index2 === -1) {
            restaurant.push(value);
          }
        });
        return restaurant;
      };

    render() {
        const restaurants = this.getRestaurantsByMeal();
        const {restaurant, numberOfPeople} = this.props.orderInfor;

        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <FormControl style={{margin: "20px"}} className="form-controll"> 
                        <InputLabel><span >Please Select A Restaurant</span></InputLabel>
                        <Select
                            name="restaurant"
                            defaultValue ={restaurant ? restaurant: ""}
                            onChange={(event) => this.props.handleChange(event)}
                        >
                            {this.displayItems(restaurants)}
                         </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
export default Step2Form;