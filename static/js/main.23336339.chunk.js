(this.webpackJsonporder_app=this.webpackJsonporder_app||[]).push([[0],{50:function(e,a,t){},62:function(e,a,t){e.exports=t(71)},67:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),s=(t(67),t(12)),c=t(13),o=t(15),u=t(16),m=(t(50),t(117)),d={dishes:[{id:1,name:"Chicken Burger",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:2,name:"Ham Burger",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:3,name:"Cheese Burger",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:4,name:"Fries",restaurant:"Mc Donalds",availableMeals:["lunch","dinner"]},{id:5,name:"Egg Muffin",restaurant:"Mc Donalds",availableMeals:["breakfast"]},{id:6,name:"Burrito",restaurant:"Taco Bell",availableMeals:["lunch","dinner"]},{id:7,name:"Tacos",restaurant:"Taco Bell",availableMeals:["lunch","dinner"]},{id:8,name:"Quesadilla",restaurant:"Taco Bell",availableMeals:["lunch","dinner"]},{id:9,name:"Steak",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:10,name:"Yakitori",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:11,name:"Nankotsu",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:12,name:"Piman",restaurant:"BBQ Hut",availableMeals:["dinner"]},{id:13,name:"Vegan Bento",restaurant:"Vege Deli",availableMeals:["lunch"]},{id:14,name:"Coleslaw Sandwich",restaurant:"Vege Deli",availableMeals:["breakfast"]},{id:15,name:"Grilled Sandwich",restaurant:"Vege Deli",availableMeals:["breakfast"]},{id:16,name:"Veg. Salad",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:17,name:"Fruit Salad",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:18,name:"Corn Soup",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:19,name:"Tomato Soup",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:20,name:"Minestrone Soup",restaurant:"Vege Deli",availableMeals:["lunch","dinner"]},{id:21,name:"Pepperoni Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:22,name:"Pepperoni Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:23,name:"Hawaiian Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:24,name:"Seafood Pizza",restaurant:"Pizzeria",availableMeals:["lunch","dinner"]},{id:25,name:"Deep Dish Pizza",restaurant:"Pizzeria",availableMeals:["dinner"]},{id:26,name:"Chow Mein",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:27,name:"Mapo Tofu",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:28,name:"Kung Pao",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:29,name:"Wontons",restaurant:"Panda Express",availableMeals:["lunch","dinner"]},{id:30,name:"Garlic Bread",restaurant:"Olive Garden",availableMeals:["breakfast","lunch","dinner"]},{id:31,name:"Ravioli",restaurant:"Olive Garden",availableMeals:["lunch","dinner"]},{id:32,name:"Rigatoni Spaghetti",restaurant:"Olive Garden",availableMeals:["lunch","dinner"]},{id:33,name:"Fettucine Pasta",restaurant:"Olive Garden",availableMeals:["lunch","dinner"]}]},h=t(118),p=t(119),f=t(72),v=t(124),E=t(121),g=t(123),b=t(111),y=t(120),M=t(109),O=t(110),S=t(125),P=t(122),k=t(126),D=function(e){Object(u.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).displayItems=function(e){return e.map((function(e){return r.a.createElement(S.a,{key:e,value:e},e)}))},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=this.props.orderInfor,t=a.meal,n=a.numberOfPeople;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{container:!0,spacing:3},r.a.createElement(M.a,{item:!0,xs:12,sm:6},r.a.createElement(O.a,{style:{margin:"20px"},className:"form-controll"},r.a.createElement(k.a,null,r.a.createElement("span",null,"Please Select A Meal")),r.a.createElement(P.a,{name:"meal",required:!0,defaultValue:t||"",onChange:function(a){return e.props.handleChange(a)}},this.displayItems(["breakfast","lunch","dinner"]))),r.a.createElement(O.a,{style:{margin:"20px"},className:"form-controll"},r.a.createElement(k.a,null,r.a.createElement("span",null,"Please Select A Number Of People")),r.a.createElement(P.a,{name:"numberOfPeople",type:"number",defaultValue:n||"",onChange:function(a){return e.props.handleChange(a)},inputProps:{min:1,max:10}},this.displayItems([1,2,3,4,5,6,7,8,9,10]))))))}}]),t}(r.a.Component),I=function(e){Object(u.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).displayItems=function(e){return e.map((function(e){return r.a.createElement(S.a,{key:e,value:e},e)}))},e.getRestaurantsByMeal=function(){var a=e.props.orderInfor.meal,t=[];d.dishes.map((function(e){-1!==e.availableMeals.indexOf(a)&&t.push(e.restaurant)}));var n=[];return t.map((function(e){-1===n.indexOf(e)&&n.push(e)})),n},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=this.getRestaurantsByMeal(),t=this.props.orderInfor,n=t.restaurant;t.numberOfPeople;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{container:!0,spacing:3},r.a.createElement(M.a,{item:!0,xs:12,sm:6},r.a.createElement(O.a,{style:{margin:"20px"},className:"form-controll"},r.a.createElement(k.a,null,r.a.createElement("span",null,"Please Select A Restaurant")),r.a.createElement(P.a,{name:"restaurant",defaultValue:n||"",onChange:function(a){return e.props.handleChange(a)}},this.displayItems(a))))))}}]),t}(r.a.Component),C=t(112),w=t(113),x=t(114),B=t(115),N=t(116),j=function(e){Object(u.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={dish:"",count:1,dishes:[]},e.displayItems=function(e){return e.map((function(e){return r.a.createElement(S.a,{key:e,value:e},e)}))},e.getDish=function(){var a=e.props.orderInfor.meal,t=e.props.orderInfor.restaurant,n=[];d.dishes.map((function(e){e.restaurant===t&&n.push(e)}));var r=[];return n.map((function(e){-1!==e.availableMeals.indexOf(a)&&r.push(e.name)})),r},e.handleChange=function(a,t){"dish"===t&&e.setState({dish:a.target.value},(function(){console.log(this.state)})),"count"===t&&e.setState({count:a.target.value})},e.addDishes=function(){var a=e.state,t=a.dishes,n=a.dish,r=a.count;(null==t&&(t=[]),n&&r)&&(t.some((function(e){return e.dish===n}))?(t.splice(t.indexOf(n),1),t.push({dish:n,count:r})):t.push({dish:n,count:r}),e.setState({dishes:t}),e.props.addDishes(t))},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=(this.props.orderInfor.numberOfPeople,this.state),t=(a.dish,a.count,a.dishes),n=this.getDish();return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{container:!0,spacing:3,style:{position:"relative"}},r.a.createElement(M.a,{item:!0,xs:12,sm:6},r.a.createElement(O.a,{style:{margin:"20px"},className:"form-controll"},r.a.createElement(k.a,null,r.a.createElement("span",null,"Please Select A Dish")),r.a.createElement(P.a,{name:"dish",onChange:function(a){return e.handleChange(a,"dish")}},this.displayItems(n))),r.a.createElement(O.a,{style:{margin:"20px"},className:"form-controll"},r.a.createElement(k.a,null,r.a.createElement("span",null,"Please Enter No. Of Servings")),r.a.createElement(P.a,{name:"count",defaultValue:1,onChange:function(a){return e.handleChange(a,"count")}},this.displayItems([1,2,3,4,5,6,7,8,9,10]))),r.a.createElement(b.a,{style:{marginTop:"0px",marginLeft:"0px",position:"absolute",bottom:"-10px",left:"2rem"},variant:"contained",color:"primary",onClick:this.addDishes}," Add")),r.a.createElement(M.a,{item:!0,sm:6,xs:12},r.a.createElement(C.a,{className:"crud-table",style:{margin:"12px"}},r.a.createElement(w.a,null,r.a.createElement(x.a,null,r.a.createElement(B.a,{style:{width:"50%"}},"Dishes "),r.a.createElement(B.a,{style:{width:"50%"}},"Number Of Servings"))),r.a.createElement(N.a,null,t.map((function(e){return r.a.createElement(x.a,{key:e.dish},r.a.createElement(B.a,{component:"th",scope:"row"},e.dish),r.a.createElement(B.a,null,e.count))})))))))}}]),t}(r.a.Component),z=function(e){Object(u.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).displayDishes=function(e){return e.map((function(e,a){return r.a.createElement(x.a,{key:a},r.a.createElement(B.a,null,e.dish),r.a.createElement(B.a,null,e.count))}))},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.orderInfor;return r.a.createElement("div",{style:{marginLeft:"300px"}},r.a.createElement("p",null,"Meal : ",e.meal),r.a.createElement("p",null,"Number of People : ",e.numberOfPeople),r.a.createElement("p",null,"Restaurant : ",e.restaurant),r.a.createElement("p",null,"Dishes : "),r.a.createElement(C.a,{className:"crud-table",style:{whiteSpace:"pre",width:"300px",marginLeft:"100px"}},r.a.createElement(w.a,null,r.a.createElement(x.a,null,r.a.createElement(B.a,null,"Dish"),r.a.createElement(B.a,null,"Number"))),r.a.createElement(N.a,null,this.displayDishes(e.dishes))))}}]),t}(r.a.Component),V=function(e){Object(u.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={steps:["Step 1","Step 2","Step 3","Review"],activeStep:0,orderInfor:{meal:"",numberOfPeople:0,restaurant:"",dishes:[]}},e.getStepContent=function(a){switch(a){case 0:return r.a.createElement(D,{orderInfor:e.state.orderInfor,handleChange:e.handleChange});case 1:return r.a.createElement(I,{orderInfor:e.state.orderInfor,handleChange:e.handleChange});case 2:return r.a.createElement(j,{orderInfor:e.state.orderInfor,addDishes:e.addDishes});case 3:return r.a.createElement(z,{orderInfor:e.state.orderInfor});default:throw new Error("Unknown step")}},e.handleChange=function(a){console.log(a.target.value);var t=e.state.orderInfor;"meal"===a.target.name&&(t.meal=a.target.value),"numberOfPeople"===a.target.name&&(t.numberOfPeople=a.target.value),"restaurant"===a.target.name&&(t.restaurant=a.target.value),e.setState({orderInfor:t,error:""},(function(){console.log(this.state.orderInfor)}))},e.handleNext=function(){if(e.state.activeStep<4)if(1===e.checkData()){var a=e.state.activeStep+1;e.setState({activeStep:a})}else 0===e.checkData()?alert("Fill all the field!"):2===e.checkData()&&alert("Not enough dishes!")},e.handleBack=function(){if(e.state.activeStep>=1){var a=e.state.activeStep-1;e.setState({activeStep:a})}},e.checkData=function(){var a=e.state.activeStep,t=e.state.orderInfor,n=t.numberOfPeople,r=t.meal,l=t.restaurant,i=t.dishes,s=1;if(0===a)s=n&&r?1:0;else if(1===a)s=l?1:0;else if(2===a)if(i){var c=null;i.map((function(e){c+=e.count})),s=c<n?2:1}else s=0;return s},e.addDishes=function(a){var t=e.state.orderInfor;t.dishes=a,e.setState({orderInfor:t},(function(){console.log(this.state.orderInfor)}))},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state,a=e.activeStep,t=e.steps;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null),r.a.createElement(h.a,{position:"absolute",color:"default",className:"appBar"},r.a.createElement(p.a,null,r.a.createElement(y.a,{variant:"h6",color:"inherit",noWrap:!0},"Fabi Test"))),r.a.createElement("main",{className:"layout"},r.a.createElement(f.a,{className:"paper"},r.a.createElement(y.a,{component:"h1",variant:"h4",align:"center"},"Order"),r.a.createElement(v.a,{activeStep:a,className:"stepper"},t.map((function(e){return r.a.createElement(E.a,{key:e},r.a.createElement(g.a,null,e))}))),r.a.createElement(r.a.Fragment,null,a===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),r.a.createElement(y.a,{variant:"subtitle1"},"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.")):r.a.createElement(r.a.Fragment,null,this.getStepContent(a),r.a.createElement("div",{className:"buttons"},0!==a&&r.a.createElement(b.a,{onClick:this.handleBack,className:"button"},"Back"),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:"button"},a===t.length-1?"Place order":"Next")))))))}}]),t}(r.a.Component);var F=function(){return r.a.createElement(V,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.23336339.chunk.js.map