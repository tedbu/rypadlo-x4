input.onButtonPressed(Button.A, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.setAllMotor(50, 50)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
    basic.showIcon(IconNames.Skull)
    wuKong.setLightMode(wuKong.LightMode.OFF)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.setAllMotor(100, 100)
})
basic.showLeds(`
    . . . # #
    . # # # #
    # # # # #
    . # # # #
    . . . # #
    `)
