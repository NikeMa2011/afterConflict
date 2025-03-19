// 控制台输出
function inventoryOpenCout() {
    if (inventoryOpen) {
        if (language == "english") Cout(text.english.inventory.open);
        else if (language == "中文") Cout(text.chinese.inventory.open);
    } else {
        if (language == "english") Cout(text.english.inventory.closeclose);
        else if (language == "中文") Cout(text.chinese.inventory.close); n8
    }
}
function reSizeCout() {
    if (language == "english") Cout(text.english.reSize + text.english.window.height + windowHeight + ' ' + text.english.window.width + windowWidth);
    else if (language == "中文") Cout(text.chinese.reSize + text.chinese.window.height + windowHeight + ' ' + text.chinese.window.width + windowWidth);
}
function invalidInputCout() {
    if (language == "english") Cout(text.english.warn);
    else if (language == "中文") Cout(text.chinese.warn);
}
function unSetInputCout() {
    if (language == "english") Cout(text.english.error);
    else if (language == "中文") Cout(text.chinese.error);
}
function needDebugOnCout() {
    if (language == "english") Cout(text.english.needDebugModeOn);
    else if (language == "中文") Cout(text.chinese.needDebugModeOn);
}
function pressKeyCout(keyPress) {
    if (language == "english") Cout(text.english.keyPress + keyPress);
    else if (language == "中文") Cout(text.chinese.keyPress + keyPress);
}
function variableStatus() {
    if (debugMode) {
        if (language == "english") console.group(text.english.status.title);
        else if (language == "中文") console.group(text.chinese.status.title);

        if (language == "english") {
            Cout(text.english.status.language + localStorage.getItem("language"));
            Cout(text.english.status.debugMode + debugMode + "\n");
        } else if (language == "中文") {
            Cout(text.chinese.status.language + localStorage.getItem("language"));
            Cout(text.chinese.status.debugMode + debugMode + "\n");
        }

        console.groupEnd();
        if (language == "english") Cout(text.english.status.note);
        else if (language == "中文") Cout(text.chinese.status.note);
    } else {
        needDebugOnCout();
    }
}
function notice() {
    Cout("Since you have not set or open this website before(localStorage.getItem(\"language\") is \"" + localStorage.getItem("language") + "\"), please set the language,(now set default: english)");
}
function note() {
    if (language == "english") Cout("Notes:\nto change console output, please change variable \"language\" s value,\nsuch as \"changeLanguage(\"中文\");\", edition(" + lastestEdition + "), \n available languages: \"english\" and \"中文\";");
    else if (language == "中文") Cout("帮助:\n如果你要改变控制台输出的语言的话, 请改变 \"language\" 的值,\n比如 \"changeLanguage(\"english\");\", 版本(" + lastestEdition + "), 可用的语言为: \"english\" 和 \"中文\";");
}
function changeLanguage(option) {
    language = option;
    localStorage.setItem("language", option);
    if (language == "english") Cout("successful change the language, language: " + language);
    else if (language == "中文") Cout("成功的更改了语言: " + language);
}