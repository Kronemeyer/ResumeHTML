function changeLang(lang) {
    var newL, prevL, actClass, inactClass, i;
    if (lang == "deOL") {
        newL = "deutsch";
        prevL = "english";
        actClass = "de";
        inactClass = "en";
    } else {
        newL = "english";
        prevL = "deutsch"
        actClass = "en";
        inactClass = "de";
    }

    english = document.getElementsByClassName(prevL);
    for (i=0;i<english.length;i++){
        english[i].style.display = 'none';
    }
    deutsch = document.getElementsByClassName(newL);
    for (i=0;i<deutsch.length;i++){
        deutsch[i].style.display = 'block';
    }
    active = document.getElementById(actClass);
    active.className = "tabactive";
    inactive = document.getElementById(inactClass);
    inactive.className = "tabinactive";
}

function openl(lang) {
    var prev;
    if (lang == 'deOL') {prev = 'enOL';} else {prev = 'deOL';}
    if (document.getElementById(lang).style.width == '100%') {
        return;
    }
    changeLang(lang);
    document.getElementById(prev).style.width = '0%';
    document.getElementById(lang).style.width = '100%';
}