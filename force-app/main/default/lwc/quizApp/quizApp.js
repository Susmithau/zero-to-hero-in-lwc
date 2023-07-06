import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selectedAnswers = {}  //for storing answers
    correctAnswers = 0 //to show the result
    scoreVisibility = false
    quizQuestions = [
        {
            id: 1,
            question : "Which of the following is not a template loop?",
            answers : {
                a: "for:each",
                b: "iterator",
                c: "map"       
            },
            correctAnswer : "c"
        },
        {
            id: 2,
            question : "Which of the file is invalid in an LWC component folder structure?",
            answers : {
                a: ".apex",
                b: ".js",
                c: ".svg"      
            },
            correctAnswer : "a"
        },
        {
            id: 3,
            question : "Which of the following is not a directive?",
            answers : {
                a: "for:each",
                b: "if:true",
                c: "@track"       
            },
            correctAnswer : "c"
        }
    ]

    changeHandler(event){
        console.log("name",event.target.name)
        console.log("value",event.target.value)
        //below is the shorthand for const name = event.target.name & const value = event.target.value
        const{name,value} = event.target  //object destructuring
        this.selectedAnswers = {...this.selectedAnswers, [name]:value}
    }

    //to make sure that all questions are to be answered
    get notSelected(){
        return !(Object.keys(this.selectedAnswers).length === this.quizQuestions.length)
    }

    //method to show the text clor according to scores
    get scoredFull(){
        return `slds-text-heading_large slds-box slds-theme_shade slds-theme_alert-texture slds-var-m-top_x-large ${this.quizQuestions.length === this.correctAnswers? 'slds-text-color_success' : 'slds-text-color_error' }`
    }

    //submits the form
    submitHandler(event){
        event.preventDefault()  //to prevent the default refresh behaviour of form
        let correct = this.quizQuestions.filter(item => this.selectedAnswers[item.id] == item.correctAnswer)
        this.correctAnswers = correct.length
        this.scoreVisibility = true
    }

    //resets the form
    resetHandler(){
        this.selectedAnswers = {}
        this.correctAnswers = 0
        this.scoreVisibility = false
    }
}