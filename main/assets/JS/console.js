// 控制台输出
function inventoryOpenCout() {
    if(inventoryOpen) {
        if(language == "english") console.log("inventory open");
        else if(language == "中文") console.log("打开物品框");
    } else {
        if(language == "english") console.log("inventory close");
        else if(language == "中文") console.log("关闭物品框");
    }
}
function reSizeCout() {
    if(language == "english") console.log("detect window s size changed:\nwindowHeight: " + windowHeight + " windowWidth: " + windowWidth);
    else if(language == "中文") console.log("检测到窗口大小变化:\nwindowHeight: " + windowHeight + " windowWidth: " + windowWidth);
}
function invalidInputCout() {
    if(language == "english") console.log("[Warn]: invalid input;");
    else if(language == "中文") console.log("[警告]: 无效的输入");
}
function unSetInputCout() {
    if(language == "english") console.log("[Error]: unset input;");
    else if(language == "中文") console.log("[错误]: 未设置输入;");
}
function needDebugOnCout() {
    if(language == "english") console.log("[Error]: ignored, needs \"debugMode\" on(true);");
    else if(language == "中文") console.log("[错误]: 忽略, 需要 \"debugMode\" 为正(true);");
}
function pressKeyCout(key) {
    if(language == "english") console.log("key press: " + key);
    else if(language == "中文") console.log("按下的键; " + key);
}
function variableStatus() {
    if(debugMode) {
        if(language == "english") console.group("variable values / information:");
        else if(language == "中文") console.group("变量值 / 信息:");

        console.log("localStorage.getItem(\"language\") = " + localStorage.getItem("language"));
        console.log(";debugMode: " + debugMode + "\n");

        console.groupEnd();
        if(language == "english") console.log("Note: only for staric information;");
        else if(language == "中文") console.log("注意: 仅适用于静态信息");
    } else {
        needDebugOnCout();
    }
}
function notice() {
    console.log("Since you have not set or open this website before(localStorage.getItem(\"language\") is \"" + localStorage.getItem("language") +"\"), please set the language,(now set default: english)");
}
function welcome() {
    if(language == "english") {
        console.log("Author: NikeMa2011, edition: " + lastestEdition + "\ngithub profile: https://github.com/NikeMa2011");
        title.innerHTML = ("RPGgame - githubEdition");
    }
    else if(language == "中文") {
        console.log("作者: NikeMa2011, 版本: " + lastestEdition + "\ngithub链接 : https://github.com/NikeMa2011/RPG");
        title.innerHTML = ("RPG小游戏 - github版本");
    }
}
function note() {
    if(language == "english")  console.log("Notes:\nto change console output, please change variable \"language\" s value,\nsuch as \"changeLanguage(\"中文\");\", edition(" + lastestEdition + "), \n available languages: \"english\" and \"中文\";");
    else if(language == "中文") console.log("帮助:\n如果你要改变控制台输出的语言的话, 请改变 \"language\" 的值,\n比如 \"changeLanguage(\"english\");\", 版本(" + lastestEdition + "), 可用的语言为: \"english\" 和 \"中文\";");
}
function changeLanguage(option) {
    language = option;
    localStorage.setItem("language", option);
    if(language == "english") console.log("successful change the language, language: " + language);
    else if(language == "中文") console.log("成功的更改了语言: " + language);
}