const imgs = ['img/IMG_1148.JPG', 'img/IMG_1153.JPG', 'img/IMG_1151.JPG'];
let num = 0;
slideShow();

function slideShow() {
    document.getElementById("footerimg").src = imgs[num];
    if (num == imgs.length - 1) {
        num = 0;
    }
    else {
        num++;
    }

    setTimeout('slideShow()', 3000);
}


//トグルボタンが押されたときに、クラスを付与
function addClass() {
    const nav = document.getElementsByClassName('nav');
    const nav_toggle = document.getElementsByClassName('nav_toggle');
    nav[0].classList.toggle('show');
    nav_toggle[0].classList.toggle('show');

    const header = document.getElementsByClassName('header');

    header[0].classList.toggle('active');
}

