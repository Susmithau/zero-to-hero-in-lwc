import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    // @api userData //converting this ppty to getter and setter methods so as to manipulate the date received from the parent
    
    userDetail  //creating a new ppty

    @api    //making the getter public
    get userData(){
        return this.userDetail
    }

    set userData(data){    //will receive the data, hence the parameter
        //inorder to manipulate the data that is coming in from parent, always create a shallow copy of it using spread operator ans then manipulate, here 'age' ppty has been manipulated as shown below
        this.userDetail = {...data, age:data.age/2, "location":"Bangalore"}  //'age' ppty at right side overrides the 'age' ppty within the data(left side) & it also adds a new ppty 'location' to the data 
    }
}