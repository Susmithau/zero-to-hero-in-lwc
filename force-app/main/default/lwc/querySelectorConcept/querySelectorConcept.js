import { LightningElement } from 'lwc';

export default class QuerySelectorConcept extends LightningElement {
    namesList = ["Ritwika", "Mohini", "Unni", "Jithin"]
    fetchDetailsHandler(){
        //querySelector()
        const e = this.template.querySelector('h1')
        //styling using querySelector()
        e.style.color = "red"
        e.style.border = "2px solid black"
        console.log(e.innerText)

        //querySelectorAll()
        const names = this.template.querySelectorAll('.name') //names is not a proper array=> so convert it into an Array using Array.from() 
        console.log(typeof(names)) //object type
        Array.from(names).forEach(element => {
            console.log(element.innerText)
            element.setAttribute("title",element.innerText)
        });    
        
        //lwc:dom = "manual" demo
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML= '<p> ...I AM A CHILD... </p>'//manually adding this HTML to the DOM with JS
    }
}