import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {
    isLoaded = false
    // Inorder to achieve customized features with a standard button, do the following
    renderedCallback(){
        if(this.isLoaded) return 
        const style = document.createElement('style')
        style.innerText = `c-shadow-dom-styling .slds-button{
            background: pink;
            color: #b3065c;
        }`
        this.template.querySelector('lightning-button').appendChild(style)
        this.isLoaded = true
    }
}