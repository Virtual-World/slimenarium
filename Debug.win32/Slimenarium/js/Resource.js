var dirImg = "";
var dirMusic = "";
var musicSuffix = ".mp3";
if( cc.config.deviceType == 'browser') {
    dirImg = "res/";
    dirMusic = "res/Music/";
    musicSuffix = "";
}
else if( cc.config.engine == 'cocos2d-x') {
    dirImg = "res/";
    dirMusic = "res/Music/";
    musicSuffix = ".mp3";
}

//image
var Game_bg01 = dirImg + "Game_Background.jpg"; // Переменная фона игры.
var s_loading = dirImg + "Menu_Background.jpg";
var s_ship01 = dirImg + "ship01.png";
var s_menu = dirImg + "menu.png";
var s_cocos2dhtml5 = dirImg + "cocos2d-html5.png";
var s_gameOver = dirImg + "gameOver.png";
var s_menuTitle = dirImg + "menuTitle.png";
var s_flare = dirImg + "flare.jpg";
var s_bullet = dirImg + "bullet.png";
var s_explode1 = dirImg + "explode1.jpg";
var s_explode2= dirImg + "explode2.jpg";
var s_explode3 = dirImg + "explode3.jpg";
var s_hit = dirImg + "hit.jpg";
var s_arial14 = dirImg + "arial-14.png";
var s_arial14_fnt = dirImg + "arial-14.fnt";

//music
var s_bgMusic = dirMusic + "bgMusic" + musicSuffix;
var s_mainMainMusic = dirMusic + "mainMainMusic" + musicSuffix;

//effect
var s_buttonEffect = dirMusic + "buttonEffet" + musicSuffix;

//plist
var s_explosion_plist = dirImg + "explosion.plist";
var s_bullet_plist = dirImg + "bullet.plist";

var g_ressources = [
    //image
    {type:"image", src:s_loading},
    {type:"image", src:s_ship01},
    {type:"image", src:s_menu},
    {type:"image", src:s_cocos2dhtml5},
    {type:"image", src:s_gameOver},
    {type:"image", src:s_menuTitle},
    {type:"image", src:s_flare},
    {type:"image", src:s_bullet},
    {type:"image", src:s_explode1},
    {type:"image", src:s_explode2},
    {type:"image", src:s_explode3},
    {type:"image", src:s_hit},
    {type:"image", src:s_arial14},

    //plist
    {type:"plist", src:s_bullet_plist},

    //music
    {type:"bgm", src:s_bgMusic},
    {type:"bgm", src:s_mainMainMusic},

    //effect
    {type:"effect", src:s_buttonEffect},

    // FNT
    {type:"fnt", src:s_arial14_fnt}

];
