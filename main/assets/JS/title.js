function websiteTitleChange() {
    if (language == "english") {
        Cout("Author" + text.author + "edition: " + lastestEdition + "\ngithub profile: " + text.githubLink);
        title.innerHTML = (title.english);
    }
    else if (language == "中文") {
        Cout("作者" + text.author + "版本: " + lastestEdition + "\ngithub链接 : " + text.githubLink);
        title.innerHTML = (title.english);
    }
}