def LightUp(num: number):
    global list2
    led.plot(randint(0, 4), randint(0, 4))
    list2 = [0, 1]

def on_button_pressed_a():
    global Lights
    LightUp(Lights)
    Lights += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    led.unplot(list2.shift(), list2.shift())
input.on_button_pressed(Button.B, on_button_pressed_b)

list2: List[number] = []
Lights = 0
Lights = 1
if True:
    pass

def on_forever():
    pass
basic.forever(on_forever)
