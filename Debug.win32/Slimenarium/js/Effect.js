var removeFromParent = function( sprite )
{
    sprite.removeFromParentAndCleanup( true );
};

var spark = function (ccpoint, parent, scale, duration) {
    scale = scale || 0.3;
    duration = duration || 0.5;

    var one = cc.Sprite.create(s_explode1);
    var two = cc.Sprite.create(s_explode2);
    var three = cc.Sprite.create(s_explode3);

    one.setBlendFunc(gl.SRC_ALPHA, gl.ONE);
    two.setBlendFunc(gl.SRC_ALPHA, gl.ONE);
    three.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

    one.setPosition(ccpoint);
    two.setPosition(ccpoint);
    three.setPosition(ccpoint);

    //parent.addChild(one);
    parent.addChild(two);
    parent.addChild(three);
    one.setScale(scale);
    two.setScale(scale);
    three.setScale(scale);

    three.setRotation(Math.random() * 360);

    var left = cc.RotateBy.create(duration, -45);
    var right = cc.RotateBy.create(duration, 45);
    var scaleBy = cc.ScaleBy.create(duration, 3, 3);
    var fadeOut = cc.FadeOut.create(duration);
    var remove = cc.CallFunc.create(this, removeFromParent );
    var seq = cc.Sequence.create( fadeOut, remove );

    one.runAction(left);
    two.runAction(right);

    one.runAction(scaleBy);
    two.runAction(scaleBy.copy());
    three.runAction(scaleBy.copy());

    one.runAction(seq);
    two.runAction(seq.copy() );
    three.runAction(seq.copy());
};

