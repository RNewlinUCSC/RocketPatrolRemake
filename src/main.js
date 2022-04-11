let config = {
    type: Phaser.CANVAS,
    width: 600,
    height: 480,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

