import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false
    constructor(){
        super()
        console.log("Parent constructor()")
    }

    connectedCallback(){
        console.log("Parent connectedCallback()")
    }

    renderedCallback(){
        console.log("Parent renderedCallback()")
    }

    name
    changeHandler(event){
        this.name = event.target.value
    }

    clickHandler(){
        this.isChildVisible = !this.isChildVisible
    }

    errorCallback(error, stack){
        console.log(error)
        console.log(stack)
    }
}