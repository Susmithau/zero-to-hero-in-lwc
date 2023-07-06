import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    
    closeHandler(){
        const myEvent = new CustomEvent('close', {
            // detail:"Child to Parent -> Modal closed successfully" //simple string data
            bubbles: true,   //event bubbling
            detail:{
                msg : "Child to Parent -> Modal closed successfully" //sending an obj within detail
            }
        })
        this.dispatchEvent(myEvent)
    }

    footerHandler(){
        console.log("footerHandler called through bubbling!")
    }
}