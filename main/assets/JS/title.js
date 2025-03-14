function websiteTitleChange() {
    if (language == "english") {
        Cout("Author: NikeMa2011, edition: " + lastestEdition + "\ngithub profile: https://github.com/NikeMa2011");
        titleTag.innerHTML = ("RPGgame - githubEdition");
    }
    else if (language == "中文") {
        Cout("作者: NikeMa2011, 版本: " + lastestEdition + "\ngithub链接 : https://github.com/NikeMa2011/RPG");
        titleTag.innerHTML = ("RPG小游戏 - github版本");
    }
}