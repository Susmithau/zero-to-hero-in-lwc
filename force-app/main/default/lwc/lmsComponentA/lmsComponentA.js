import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { MessageContext, publish } from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {
    inputValue

    @wire(MessageContext) //calling Messagecontext will return an object that says which all components are using the message service
    context

    inputHandler(event){
        this.inputValue = event.target.value
    }

    publishMessage(){
        //Syntax for publish() : publish(messageContext, messageChannel, message)
        const message = {
            lmsData : {
                value : this.inputValue
            }
        }
        publish(this.context, SAMPLEMC, message)
    }
}