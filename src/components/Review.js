import React from 'react';
import {Table,TableHead,TableRow,TableCell,TableBody,Button} from '@material-ui/core';
class ReviewForm extends React.Component {
    displayDishes = dishes =>(
        dishes.map((dish,key)=> (
            <TableRow key={key}>
                <TableCell>{dish.dish}</TableCell>
                <TableCell>{dish.count}</TableCell>
            </TableRow>
       ))
   )
    
    
   
    render(){
        const {orderInfor} = this.props;
        return(
            <div style={{marginLeft:"300px"}}>
                <p>Meal : {orderInfor.meal}</p>
                <p>Number of People : {orderInfor.numberOfPeople}</p>
                <p>Restaurant : {orderInfor.restaurant}</p>
                <p>Dishes : </p>
                <Table className="crud-table" style={{ whiteSpace: "pre", width:"300px", marginLeft:"100px"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dish</TableCell>
                            <TableCell>Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.displayDishes(orderInfor.dishes)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}
export default ReviewForm;