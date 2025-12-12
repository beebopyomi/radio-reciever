radio.onReceivedString(function (receivedString) {
    basic.showString("" + (reciever1))
})
let reciever1 = 0
radio.setGroup(11)
radio.setTransmitPower(1)
basic.forever(function () {
    if (receivedString == reciever1) {
    	
    }
})
