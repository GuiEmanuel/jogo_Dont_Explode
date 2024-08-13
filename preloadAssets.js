//responsavel por carregar os sprites
function preloadAssets(scene){
    console.log(scene);

    //carregar cenario
    scene.load.image("fundo", "./assets/fundo.png");

    scene.load.image("plat", "./assets/plataforma.png");

    scene.load.spritesheet("player", "./assets/player.png", {
        frameWidth: 32,
        frameHeight: 48,
    });

    scene.load.image("star", "./assets/star.png");

    scene.load.image("bombs", "./assets/bomb.png");
}