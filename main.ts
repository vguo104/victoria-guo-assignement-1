// This functions plots an LED will x and y values picked randomly between numbers 0 to 4 
function LightUp () {
    led.plot(randint(0, 4), randint(0, 4))
}
// When button A is pressed:
input.onButtonPressed(Button.A, function () {
    // calls function "LightUp" to Lights
    LightUp()
    // Variable "Lights' will change value by +1
    Lights += 1
    list.push(Lights)
})
// When button is pressed, screen will be cleared and then show the strong "RESET". Then, it will set the "list" variable to a new list/array
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("RESET")
    list = []
})
// When button B is clicked, it will set "Lights" variable to get and then remove the first value in "list" variable.   If "list" variable value is equal to 0, then full screen of LED will shine for 100 ms then they will all be turned back off
input.onButtonPressed(Button.B, function () {
    Lights = list.shift()
    led.unplot(Lights, Lights)
    if (list[0]) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        led.stopAnimation()
    }
})
// When program Starts, set variable "Lights" to 1 and set variable "list" to an empty list/array
// 
let list: number[] = []
let Lights = 0
Lights = 1
list = []
// If "Lights" variable every equals to 25, then screen will clear
basic.forever(function () {
    if (Lights == 25) {
        basic.clearScreen()
    }
})
