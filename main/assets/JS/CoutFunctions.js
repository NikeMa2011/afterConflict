function Cout(text, option) {
    if (text == null) {
        console.error("the \"cout\" function did not define the output text QWQ");
    }
    if (option == null) {
        console.log(text);
    } else if (option == "warn") {
        console.warn(text);
    } else if (option == "error") {
        console.error(text);
    } else if (option == "log") {
        console.log(text);
    } else {
        console.error("the \"Cout\" function only allow \"warn\", \"error\" and \"log\" QWQ");
    }
}