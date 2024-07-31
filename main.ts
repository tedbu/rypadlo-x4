input.onButtonPressed(Button.A, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.setAllMotor(50, 50)
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 360)
    basic.pause(1000)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
    wuKong.stopAllMotor()
    basic.showIcon(IconNames.Skull)
    wuKong.setLightMode(wuKong.LightMode.OFF)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.setAllMotor(100, 100)
    basic.showIcon(IconNames.Duck)
})
basic.showLeds(`
    . . . # #
    . # # # #
    # # # # #
    . # # # #
    . . . # #
    `)
