input.onButtonPressed(Button.A, function () {
    if (people > 0) {
        people += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (people < 5) {
        people += -1
    }
})
let people = 0
people = 0
basic.forever(function () {
    basic.showNumber(people)
})
