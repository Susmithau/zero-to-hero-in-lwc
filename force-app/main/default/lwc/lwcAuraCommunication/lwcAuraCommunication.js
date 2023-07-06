import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {

    @api title   //receiving message from Aura to Lwc

    //Sending back a message to Aura
    callAura(){
      const event = new CustomEvent('sendmsg', {
            detail: {
                "msg" : "Event from LWC"
            }
        })
        this.dispatchEvent(event)
    }
}