import { LightningElement } from 'lwc';

export default class DynamicStylingDemo extends LightningElement {
    percent = 10
    changeHandler(event){
        this.percent = event.target.value //gets the user input
    }

    get percentage(){
        return `width:${this.percent}%` //the width changes according to the % entered by the user
    }
}