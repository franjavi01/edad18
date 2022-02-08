const drive = require('./main.js')

test('Edad18', ()=> {
    expect(drive(12)).toBe('No puedes conducir')
})

test('Edad18', ()=> {
    expect(drive(22)).toBe('Puedes conducir')
})