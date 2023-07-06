({
    handleMessage: function(component, message) {
        if(message != null && message.getParam("lmsData") != null){
            component.set("v.messageReceived", message.getParam("lmsData").value)
        }
    },

    inputHandler: function(component, event) {
        console.log(event.target.value)
        component.set("v.messageValue", event.target.value)
    },
    publishMessage: function(component){
        let msg = component.get("v.messageValue")
        let message = {
            lmsData: {
                value:msg
            }
        }
        // Here, inside find, we are giving the aura:id
        component.find("SampleMessageChannel").publish(message)
    }
})
