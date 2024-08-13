var config = {
    width: 1000,
    height: 500,
    scale: {autoCenter: Phaser.Scale.CENTER_BOTH}, //centalizar a tela
    scene: {
        preload: preload, // carregar
        create: create, // criar
        update: update, // atualizar o codigo
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 300},
        },
    },
};

var game = new Phaser.Game(config); //cria uma tela na web

function preload(){
    preloadAssets(this);
};
function create(){
    createAssets(this);
};
function update(){
    updateGame(this);
}