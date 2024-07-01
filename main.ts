basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        basic.showString("Amarillo")
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        basic.showString("Azul")
    }
})
