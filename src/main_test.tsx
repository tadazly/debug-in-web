const DEBUG = true;
class testObj {}

const arrayObj = []
for (let i = 0; i < 100000; i++) {
    arrayObj.push(new testObj())
}
window['arrayObj'] = arrayObj