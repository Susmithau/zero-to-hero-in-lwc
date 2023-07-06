import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false
    message
    clickHandler(){
        this.showModal = true
    }

    closingHandler(event){
        this.message = event.detail.msg
        this.showModal = false
    }
}