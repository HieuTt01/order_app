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
import {
    Button,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow,
  } from "@material-ui/core";


class Step3Form extends React.Component {
    state= {
        dish: '',
        count: 1,
        dishes: []
    }
    displayItems = items => (
         items.map( item => (
            <MenuItem
                key={item}
                value={item}
            >{item}</MenuItem>
        ))
    )
    getDish = () => {
        var mealSelected = this.props.orderInfor.meal;
        var restaurantSelected = this.props.orderInfor.restaurant;
        var restaurantsTemp = [];
        data.dishes.map((value) => {
          if (value.restaurant === restaurantSelected) restaurantsTemp.push(value);
        });
        var dish = [];
        restaurantsTemp.map((value) => {
          var index = value.availableMeals.indexOf(mealSelected);
          if (index !== -1) {
            dish.push(value.name);
          }
        });
        return dish;
      };

    handleChange = (event, type) => {
        if (type === "dish") {
            this.setState(
                {
                dish: event.target.value,
                },
                function() {
                    console.log(this.state)
                }
            );
            }
            if (type === "count") {
            this.setState(
                {
                count: event.target.value,
                }
            );
        }
    }

    addDishes = () => {
        var {dishes, dish, count} = this.state;
        if(dishes == null) {
            dishes = []
        }
            if (dish && count ) {
                const found = dishes.some(item => item.dish === dish);
                if (!found) {
                    dishes.push({ dish, count });
                }
                else {
                    dishes.splice(dishes.indexOf(dish),1);
                    dishes.push({ dish, count });
                }
            this.setState({ dishes: dishes });
            this.props.addDishes(dishes);
        }
    }

    render() {
        const { numberOfPeople} = this.props.orderInfor;
        const {dish, count, dishes} = this.state;
        const listDishes = this.getDish();
        const numberSelects = [1,2,3,4,5,6,7,8,9,10];

        return (
            <React.Fragment>
                <Grid container spacing={3} style={{ position: "relative"}}>
                    <Grid item  xs={12} sm={6}>
                    <FormControl style={{margin: "20px"}} className="form-controll"> 
                        <InputLabel><span >Please Select A Dish</span></InputLabel>
                        <Select
                            name="dish"
                            onChange={(event) => this.handleChange(event,"dish")}
                        >
                            {this.displayItems(listDishes)}
                         </Select>
                        </FormControl>
                        <FormControl style={{margin: "20px"}} className="form-controll"> 
                            <InputLabel><span >Please Enter No. Of Servings</span></InputLabel>
                            <Select
                                name="count"
                                defaultValue ={1}
                                onChange={(event) => this.handleChange(event,"count")}
                            >
                                {this.displayItems(numberSelects)}
                            </Select>
                            </FormControl>
                        

                         <Button
                            style={{ marginTop: "0px", marginLeft: "0px" ,position: "absolute", bottom: "-10px", left: "2rem"}}
                            variant="contained"
                            color="primary"
                            onClick={this.addDishes}
                        > Add 
                        </Button>
                    </Grid>
                    <Grid item  sm={6} xs={12}>
                        <Table
                            className="crud-table"
                            style={{margin: "12px"}}
                        >
                            <TableHead>
                                <TableRow>
                                <TableCell style={{ width: "50%" }}>Dishes </TableCell>
                                <TableCell style={{ width: "50%" }}>Number Of Servings</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dishes.map((row) => (
                                <TableRow key={row.dish}>
                                    <TableCell component="th" scope="row">
                                    {row.dish}
                                    </TableCell>
                                    <TableCell>{row.count}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
          </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
export default Step3Form;