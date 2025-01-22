function invalidInputCout() {
    if(language == "english") console.log("[Warn]: invalid input;");
    else if(language == "中文") console.log("[Warn]: 无效的输入");
}
function unSetInputCout() {
    if(language == "english") console.log("[Error]: unset input;");
    else if(language == "中文") console.log("[Error]: 未设置输入;");
}
function needDebugOnCout() {
    if(language == "english") console.log("[Error]: ignored, needs \"debugMode\" on(true);");
    else if(language == "中文") console.log("[Error]: 忽略, 需要 \"debugMode\" 为正(true);");
}
// 定义
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "48px serif";

let windowHeight, windowWidth;
const pointerHeight = 30, pointerWidth = 4;
const peopleHeight = 100, peopleWidth = 50;

const lastestEdition = "2025-1-22";
let debugMode = false;
let language = "english";

let peopleX, peopleY;
let mouseX, mouseY;
let positionX = 0, positionY = 0;

// 函数
function reSize() {
    windowHeight = window.innerHeight - 6;
    windowWidth = window.innerWidth - 6;
    canvas.height = windowHeight;
    canvas.width = windowWidth;
}
function debug(option) {
    if(option == undefined) {
        if(debugMode) debugMode = false;
        else debugMode = true;
    } else {
        unSetInputCout();
    }
}
// 控制台输出
function variableStatus() {
    if(debugMode) {
        if(language == "english") console.group("variable values / information:");
        else if(language == "中文") console.group("变量值 / 信息:");
        
        console.log("localStorage.getItem(\"language\") = " + localStorage.getItem("language") + "\ndebugMode: " + debugMode + "\n");

        console.groupEnd();
        if(language == "english") console.log("Note: only for staric information;");
        else if(language == "中文") console.log("注意: 仅适用于静态信息");
    } else {
        needDebugOnCout();
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
   else  if(language == "中文") console.log("成功的更改了语言: " + language);
}

// 监听事件
window.onresize = () => {
    reSize();
    if(language == "english") console.log("detect window s size changed:\nwindowHeight: " + windowHeight + " windowWidth: " + windowWidth + " (-5)");
    else if(language == "中文") console.log("检测到窗口大小变化:\nwindowHeight: " + windowHeight + " windowWidth: " + windowWidth + " (-5)");
};
window.onmousemove = (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
    peopleX = windowWidth - mouseX;
    peopleY = windowHeight - mouseY;
    // 简单可靠
};
window.onkeydown = (event) => {
    if(event.key == 'w') positionY ++;
    else if(event.key == 'a') positionX --;
    else if(event.key == 's') positionY --;
    else if(event.key == 'd') positionX ++;
}

// 主要渲染
function render() {
    ctx.clearRect(0, 0, windowWidth, windowHeight);

    ctx.fillStyle = "#123456";
    ctx.fillRect(0, 0, windowWidth, windowHeight);

    ctx.fillStyle = "#ffffff";
    ctx.fillText(("X: " + positionX + " Y; " + positionY), 30, 40);
    if(debugMode) {
        ctx.fillText((peopleX + ' ' + peopleY + ' ' +peopleWidth + ' ' + peopleHeight), 30, 50);
        ctx.fillText((peopleX + ' ' + peopleY + ' ' +peopleWidth + ' ' + peopleHeight), 30, 50); 
    }
    ctx.strokeRect(peopleX - (peopleWidth / 2), peopleY - (peopleHeight / 2), peopleWidth, peopleHeight);
    ctx.fillRect(mouseX - (pointerWidth / 2), mouseY - (pointerHeight / 2), pointerWidth, pointerHeight);
    ctx.fillRect(mouseX - (pointerHeight / 2), mouseY - (pointerWidth / 2), pointerHeight, pointerWidth);
}

// 初始化
if(language == "english") console.log("Author: NikeMa2011, edition: " + lastestEdition + "\ngithub profile: https://github.com/NikeMa2011");
else if(language == "中文") console.log("作者: NikeMa2011, 版本: " + lastestEdition + "\ngithub链接 : https://github.com/NikeMa2011/RPG");
if(localStorage.getItem("language") == undefined) {
    console.log("Since you have not set or open this website before(localStorage.getItem(\"language\") is \"" + localStorage.getItem("language") +"\"), please set the language,");
    localStorage.setItem("language", "english");
} else {
    language = localStorage.getItem("language");
}
note();

reSize();

setInterval("render()", 20);