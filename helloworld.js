let helloworld = 'helloworld!';

const changeHelloWorld = (val) => {
    helloworld = val;
}

module.exports = {
    changeHelloWorld: (val) => changeHelloWorld(val),
    get: () => helloworld,
}