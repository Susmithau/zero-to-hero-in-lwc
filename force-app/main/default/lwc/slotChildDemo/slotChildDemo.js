import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {

    handleFooterChange(){
        const footerElem = this.template.querySelector('.slds-card__footer') //takes the footer reference
        footerElem.classList.remove('slds-hide') //removes the 'hide' functionality when footer method is called,i.e., when there's something coming to the child slot, otherwise 'hide' functionality works and footer will be hidden
    }
}