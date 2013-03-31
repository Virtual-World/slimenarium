var AboutLayer = cc.Layer.extend({
    ctor:function () {
        cc.associateWithNative( this, cc.Layer );
    },
    init:function () {
        var bRet = false;
        if (this._super()) {
            var sp = cc.Sprite.create(s_loading);
            sp.setAnchorPoint(cc.p(0,0));
            this.addChild(sp, 0, 1);

            var cacheImage = cc.TextureCache.getInstance().addImage(s_menuTitle);
            var title = cc.Sprite.createWithTexture(cacheImage, cc.rect(0, 36, 100, 34));
            title.setPosition(cc.p(winSize.width / 2, winSize.height - 60));
            this.addChild(title);

            // There is a bug in LabelTTF native. Apparently it fails with some unicode chars.
            var about = cc.LabelTTF.create("Привет от Вади", "Arial", 14, cc.size(winSize.width * 0.85, 320), cc.TEXT_ALIGNMENT_LEFT );
            about.setPosition(cc.p(winSize.width / 2,  winSize.height/2 -20) );
            about.setAnchorPoint( cc.p(0.5, 0.5));
            this.addChild(about);

            var label = cc.LabelTTF.create("Go back", "Arial", 14);
            var back = cc.MenuItemLabel.create(label, this, this.backCallback);
            var menu = cc.Menu.create(back);
            menu.setPosition(cc.p(winSize.width / 2, 40));
            this.addChild(menu);
            bRet = true;
        }

        return bRet;
    },
    backCallback:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(SysMenu.create());
        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
    }
});

AboutLayer.create = function () {
    var sg = new AboutLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};