import { LightningElement, api } from 'lwc';

export default class P2cAlertComponent extends LightningElement {
    @api message
    @api cardHeading //when giving this as attribute in Parent HTML, use kebab-case
    @api number 
    @api isValid
}