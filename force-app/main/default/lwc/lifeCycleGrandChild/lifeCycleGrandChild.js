import { LightningElement } from 'lwc';

export default class LifeCycleGrandChild extends LightningElement {
    constructor(){
        super()
        console.log("Grandchild constructor()")
    }

    connectedCallback(){
        console.log("Grandchild connectedCallback()")
    }

    renderedCallback(){
        console.log("Grandchild renderedCallback()")
    }

}