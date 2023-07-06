import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;
    name

    //conditional rendering with a property
    handleClick() {
        this.isVisible = true;
    }

    changeHandler(event) {
        this.name = event.target.value;
    }

    //conditional rendering with a getter
    get helloText() {
        return this.name === 'hello'
    }

    //falsy values
    //if a ppty has any of the following values, it is falsy:
    //0, false, null, undefined, "", NaN

}