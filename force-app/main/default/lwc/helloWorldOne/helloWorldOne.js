import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
   //normal values can be tracked with a handler function
   //2 ways to update values of ppts within an object
   //1.using @track
   //2.making use of spread operator to create a copy and then update in that copy

   fullName = "Ritwika Jithin" 

   //values that are objects can be tracked with @track decorator-->tracks all nested objects
   //but when using spread operator to create a copy and then update in that copy -->no need of @track
   @track skillLevels = {  
   // skillLevels = {  
    dance : "Intermediate",
    art : "Expert",
    music : "Beginner"
   }

   //normal values can be tracked with a handler function
   age = 20 
   totalMarks = 500
   scoredMarks = 485

   //array
   //for updation of values of an array --> use getters
   likes = ["icecream", "pudding", "chocolate"]

   //methods
   //2 ways to call a method: 1.from html, 2.from the class itself with 'this' keyword within a connectedCallBack()
   changeHandler(event){
      this.age = event.target.value; 
   }

   changeHandlerMusic(event){
      //using @track before skillLevels
      this.skillLevels.music = event.target.value

      //not a good practice to mutate the real value of the ppty --> use spread operator to create a copy and update that
      //@track not required now
      // this.skillLevels = {...this.skillLevels, "music": event.target.value}
   }

   changeHandlerDance(event){
      //using @track before skillLevels
      this.skillLevels.dance = event.target.value

      //not a good practice to mutate the real value of the ppty --> use spread operator to create a copy and update that
      //@track not required now
      // this.skillLevels = {...this.skillLevels, "dance": event.target.value}
   }

   changeHandlerArt(event){
      //using @track before skillLevels
      this.skillLevels.art = event.target.value

      //not a good practice to mutate the real value of the ppty --> use spread operator to create a copy and update that
      //@track not required now
      // this.skillLevels = {...this.skillLevels, "art": event.target.value}
   }

   //getters show manipulated/updated data -->no need to have a separate function to show updated value, i.e. any time a ppty gets updated, the getter updates it and re-renders
   //getter -->append 'get' before a function
   //getters always return something
   //examples of getters
   get firstLike() {
      return this.likes[0];
   }

   get secondLike() {
      return this.likes[1];
   }

   get thirdLike() {
      return this.likes[2];
   }

   get percentageOfMarks() {
      return (this.scoredMarks/this.totalMarks)*100;
   }

}