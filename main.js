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

function email(option) {
    var email, subject, body;
    email = "Benjamink1409@gmail.com";
    switch (option) {
        case 'en':
            subject = "Benjamin, please allow access to your Pickup Sports repository";
            body = "Hello Benjamin,%0D%0A%0D%0APlease add me to your repository access list.%0D%0AMy Github username is: %0D%0A%0D%0AThank you!";
            break;
        case 'de':
            subject = "Benjamin, bitte erlauben Sie den Zugriff auf Ihr Pickup Sports-Repository";
            body = "Hallo Benjamin, %0D%0A%0D%0Abitte füge mich zu deiner Repository-Zugriffsliste hinzu.%0D%0AMein Github-Benutzername lautet:%0D%0A%0D%0ADanke!"
            break;
        case 'hire':
            subject = "Benjamin, please join our team of Avengers!";
            body = "";
            break;
        default:
            break;
    }
    document.location = "mailto:"+email+"?subject="+subject+"&body="+body;  
}
