import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {

    handleSlotFooterChange(){
        const footerElement = this.template.querySelector('footer')  //selecting the <footer?></footer> tags
        if(footerElement){
            footerElement.classList.remove('slds-hide') //whenever footer slot is called, 'hide' property will be removed
        }
    }
}