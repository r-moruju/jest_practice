const buttonClick = require('../button');

beforeEach(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
})

describe("button test", () => {
    test("expect p content to change", () => {
        buttonClick();
        expect(document.getElementById('par').innerHTML).toEqual('You clicked');
    })
    test("check if h1 exists", () => {
        expect(document.getElementsByTagName('h1').length).toEqual(1);
    })
})