let Cloud = sprites.create(img`
    .........bbbb...........
    .......bb1111bb.........
    ......bb111111bbbbb.....
    ......b1111111ddd11b....
    ......b11111111d1111b...
    ...bbbd11111111d1111b...
    ..b11111111111111111bb..
    .b11111111111111111d11b.
    .b111d11111111111111111b
    cdd1d111111111111111111c
    cdddd11111111111111111dc
    cddbd11111d11111dd111dc.
    .cbbdd111dddd11ddbdddcc.
    .ccbbdddddbdddddddbcc...
    ...cccdddbbbdddddcc.....
    ......ccccccccccc.......
    `, SpriteKind.Projectile)
Cloud.setPosition(126, 23)
let Tree = sprites.create(img`
    ......cc66......
    .....c6576c.....
    ....c677576c....
    ....cc677666....
    ...cc6c6667cc...
    ..6c666777cc6c..
    ..c76666766776..
    ..c6777777776c..
    ..cc67777776cc..
    .c67cc76676676c.
    .c777666667777c.
    .c6777777777766.
    .cc7767776776666
    c676cc6766666776
    c777766666677776
    cc7777777777776c
    .c676777677767c.
    ..cc667666766c..
    ...ccc6c66ccc...
    .....cccccc.....
    .......ee.......
    ......eeee......
    .....eeeeee.....
    .......ee.......
    `, SpriteKind.Projectile)
Tree.setPosition(22, 103)
let Flower = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . b b d d b b . 
    b 1 1 3 3 1 1 b 
    b 1 3 5 5 3 1 b 
    b d 3 5 5 3 d b 
    c 1 1 d d 1 1 c 
    c d 1 d d 1 d c 
    . c c 7 6 c c . 
    . . 6 7 6 . . . 
    . . 6 6 8 8 8 6 
    . . 6 8 7 7 7 6 
    . . 8 7 7 7 6 . 
    . . 8 8 8 6 . . 
    `, SpriteKind.Projectile)
Flower.setPosition(144, 107)
let Bee = sprites.create(img`
    . . . . . . . . . . 1 1 1 . . . 
    . . . . 1 1 1 1 . 1 1 1 1 1 . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 1 . . 
    . . . . . f 5 f 5 f 5 1 1 . . . 
    . . . . 5 f 5 f 5 f 5 f 5 f . . 
    . . 5 5 5 f 5 f 5 f 5 f 5 f . . 
    . . 5 f 5 f 5 f 5 f 5 f 5 f 5 . 
    . . 5 5 5 f 5 f 5 f 5 f 5 f 5 . 
    . . 5 5 5 f 5 f 5 f 5 f 5 f . . 
    . . 5 5 5 f 5 f 5 f 5 f 5 f . . 
    . . 5 5 5 f 5 f 5 f 5 f 5 f . . 
    . . . . 5 f 5 f 5 f 5 f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Bee, 100, 100)
