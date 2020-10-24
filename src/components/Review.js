import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
function ReviewForm(props) {
    function displayDishes(dishes) {
        return (
            dishes.map((dish, key) => (
                <TableRow key={key}>
                    <TableCell>{dish.dish}</TableCell>
                    <TableCell>{dish.count}</TableCell>
                </TableRow>
            ))
        )
    }




    const { orderInfor } = props;
    return (
        <div style={{ marginLeft: "300px" }}>
            <p>Meal : {orderInfor.meal}</p>
            <p>Number of People : {orderInfor.numberOfPeople}</p>
            <p>Restaurant : {orderInfor.restaurant}</p>
            <p>Dishes : </p>
            <Table className="crud-table" style={{ whiteSpace: "pre", width: "300px", marginLeft: "100px" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Dish</TableCell>
                        <TableCell>Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayDishes(orderInfor.dishes)}
                </TableBody>
            </Table>
        </div>
    );
}

export default ReviewForm;