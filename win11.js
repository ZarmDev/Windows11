const windowsClick = document.getElementById('windowsClick');

const windows = document.getElementById('windows');


window.toggled = false;

windows.addEventListener('mousedown', function () {
    if (window.toggled == true) {
        window.toggled = false;
        var i = 100;
        var t = 1;
        var myInterval2 = setInterval(function () {
            windowsClick.style.bottom = `${i}px`;
            windowsClick.style.opacity = `${t}`;
            console.log(i, t);
            i -= 6;
            t -= 0.05;
            if (i < 20) {
                clearInterval(myInterval2)
                windowsClick.style.visibility = 'hidden';
            }
        }, 1)
    } else if (window.toggled == false) {
        window.toggled = true;
        windowsClick.style.visibility = 'visible';
        windowsClick.style.opacity = '0';
        var i = 10;
        var t = 0;
        var myInterval = setInterval(function () {
            windowsClick.style.bottom = `${i}px`;
            windowsClick.style.opacity = `${t}`;
            i += 6;
            t += 0.1;
            if (i > 80) {
                clearInterval(myInterval)
            }
        }, 1)
    }
})