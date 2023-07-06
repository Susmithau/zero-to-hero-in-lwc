import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {

    //Template looping works only with Arrays
    programmingLanguages = ["Python", "Java", "C#", "Javascript", "C++", "C"]

    //Iterator loop
    //Example of a complex array --> an array of objects
    employeeList = [
        {
            eId: 1,
            eName: "Joe",
            eSal : 2500
        },
        {
            eId: 2,
            eName: "Sam",
            eSal : 3500
        },
        {
            eId: 3,
            eName: "Emily",
            eSal : 5000
        },
        {
            eId: 4,
            eName: "Fret",
            eSal : 1500
        }
    ]
}