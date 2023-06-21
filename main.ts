SCD30.setCalibration400ppm()
basic.forever(function () {
    // Die vom SCD30 Sensor gemessene Temperatur
    basic.showString("SCD 30: " + SCD30.readTemperature())
    // Die vom internen Controller gemessene Temperatur. Normalerweise ist diese Temperatur ein wenig höher als die vom Sensor gemessene Temperatur, da der Microcontroller sich erwärmt.
    basic.showString("Intern:" + input.temperature())
    basic.pause(1000)
})
