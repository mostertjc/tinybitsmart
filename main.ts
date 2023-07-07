basic.forever(function () {
    basic.showString("JJTM Mixed info")
})
basic.forever(function () {
    for (let i = 0; i <= 255; i++) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, i)
    }
    basic.pause(500)
    for (let i = 0; i <= 255; i++) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, i)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, i)
    }
    basic.pause(2000)
    for (let i = 0; i <= 255; i++) {
    	
    }
    basic.pause(2000)
    for (let i = 0; i <= 255; i++) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, i)
    }
    basic.pause(500)
})
