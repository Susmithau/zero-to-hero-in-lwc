import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    receivedMessage
    subscription

    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage()   //this method is called upon page load
    }

    subscribeMessage(){
        //Syntax for subscribe() : subscribe(messageContext, ,messageChanneel, listener, subscriberOptions)
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=> {this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : 'NO MESSAGE PUBLISHED!'
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }
    
    subscribeAgain(){
        this.subscribeMessage()
    }
}