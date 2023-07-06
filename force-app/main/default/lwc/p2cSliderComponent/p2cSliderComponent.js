import { LightningElement,api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 9
    changeHandler(event){
        this.val = event.target.value
    }

    //the below method is public
    @api resetSlider(){
        this.val = 50
    }
}