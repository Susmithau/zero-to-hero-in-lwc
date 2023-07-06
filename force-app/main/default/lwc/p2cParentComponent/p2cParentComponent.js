import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    //passing the below non-primitive complex data(Array of objects) from parent to carousel child
    carouselData = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First card",
            description : "First card description",

        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second card",
            description : "Second card description",

        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third card",
            description : "Third card description"

        }
    ]
    
    //Passing data on action
    percentage = 10
    changeHandler(event){
        this.percentage = event.target.value
    }

    //calling the child method, resetSlider(), from parent
    handleClick(){
        this.template.querySelector('c-p2c-slider-component').resetSlider()
    }

}