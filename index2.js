const run = () => {
    const helloworld = require('./helloworld');
    console.log("-------index2.js-------");
    console.log("helloworld: " + helloworld.get());
}

module.exports = {
    run: () => run()
};
