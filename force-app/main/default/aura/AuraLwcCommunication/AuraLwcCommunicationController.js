({
    sendMsgHandler : function(component, event) {
        var mesg = event.getParam('msg')  //this 'msg' is the parameter used within the details object in LWC event
        component.set('v.message',mesg)   //the message from 'msg' is then bound to 'v.message' attribute given in the .cmp file
    }
})
