//cria e apresenta os assets do jogo
function createAssets(scene){
    
    scene.add.image(500, 210, "fundo");
    plataform = scene.physics.add.staticGroup();
    plataform.create(500, 479, "plat");


    player = scene.physics.add.sprite(500, 250, "player");
    player.setCollideWorldBounds(true);
    player.setBounce(0.2);
    createAnimations(scene);
    player.anims.play("parado", true);

    var pos = Phaser.Math.FloatBetween(50, 950);
    star = scene.physics.add.sprite(pos, 0, "star");
    star.setBounce(0.5);

    bombs = scene.physics.add.group();

    scene.physics.add.collider(player, plataform);
    scene.physics.add.collider(star, plataform);
    scene.physics.add.overlap(star, player, colect);
    scene.physics.add.collider(bombs, plataform);
    scene.physics.add.collider(player, bombs,  gameOver);

    teclado = scene.input.keyboard.createCursorKeys();

    var configText = {
        fontSize: "30px",
        fontFamily: "Arial Black"
    }
    textPoints = scene.add.text(20, 20, "Pontos: 0", configText)
}

function colect(star, player){
    let pos = Phaser.Math.FloatBetween(50, 950);
    star.setX(pos);
    star.setY(0);
    star.setCollideWorldBounds(true)
    star.setVelocity(50);

    points = points + 10;
    textPoints.setText("Pontos: " + points);
    
    let bomb = bombs.create(pos + 25, 0, "bombs");
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true)
    bomb.setVelocity(50);
}

function gameOver(player, bombs){
    player.setVisible(false);
    isGameOver = true;
    var configText = {
        fontSize: "50px",
        fontFamily: "Arial Black",
    }
    player.scene.add.text(325, 250, "EXPLODIU!!!", configText);

}

function createAnimations(scene){
    var parado = {
        key: "parado",
        frames: [{key: "player", frame: 4}],
    }
    scene.anims.create(parado);

    var left = {
        key: "left",
        frames: scene.anims.generateFrameNumbers("player", {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1,
    }
    scene.anims.create(left);

    var right = {
        key: "right",
        frames: scene.anims.generateFrameNumbers("player", {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1,
    }
    scene.anims.create(right);
}