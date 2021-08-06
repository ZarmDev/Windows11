const windowsClick = document.getElementById('windowsClick');

const windows = document.getElementById('windows');

const batteryLevel = document.getElementById('battery-level');

const wallpaper = document.getElementById('wallpaper');

const square = document.getElementById('square');

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

window.check = false;

window.myInterval3 = undefined;

window.x = undefined;

window.y = undefined;

wallpaper.addEventListener('mousemove', function (e) {
    window.x = e.clientX;
    window.y = e.clientY;
})

wallpaper.addEventListener('mousedown', function (e) {
    window.check = true;
    square.style.left = `${e.clientX}px`;
    square.style.top = `${e.clientY}px`;
    square.style.visibility = 'visible';
    square.style.width = '0';
    square.style.height = '0';
    square.style.padding = '0';
    setTimeout(function () {
        window.myInterval3 = setInterval(function () {
            // console.log(square.style);
            if (window.y > e.clientY) {
                square.style.paddingTop = `${window.y - e.clientY}px`;
            } else {
                square.style.paddingBottom = `${e.clientY - window.y}px`;
            }
            if (window.x > e.clientX) {
                square.style.paddingLeft = `${window.x - e.clientX}px`;
            } else {
                square.style.paddingRight = `${e.clientX - window.x}px`;
            }
        }, 10)
    }, 100)
})

wallpaper.addEventListener('mouseup', function (e) {
    clearInterval(window.myInterval3)
    square.style.visibility = 'hidden';
})

square.addEventListener('mouseup', function (e) {
    clearInterval(window.myInterval3)
    square.style.visibility = 'hidden';
})

document.getElementsByTagName('html')[0].addEventListener('mousedown', function () {
    if (window.check == true) {
        window.check = false;
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
    }
})

try {
navigator.getBattery().then(function(battery) {
    if (battery.level >= 0.95) {
        batteryLevel.src = 'https://img.icons8.com/fluent/48/000000/full-battery.png';
    } else if (battery.level >= 0.50) {
        batteryLevel.src = 'https://img.icons8.com/fluent/48/000000/medium-battery.png';
    } else if (battery.level < 0.50) {
        batteryLevel.src = 'https://img.icons8.com/fluent/48/000000/low-battery.png';
    } else if (battery.level == 0) {
        batteryLevel.src = 'https://img.icons8.com/fluent/48/000000/empty-battery.png';
    }
    if (battery.charging == true) {
        batteryLevel.src = 'https://img.icons8.com/fluent/48/000000/charge-battery.png';
    }
})
} catch {
    batteryLevel.src = 'https://img.icons8.com/fluent/48/000000/no-battery.png';
}

for (var i = 0; i < document.getElementsByTagName('span').length; i++) {
    var lenT = document.getElementsByTagName('span')[i];
    console.log(lenT.textContent.length);
    if (lenT.textContent.length > 10) {
        lenT.style.right = `${lenT.textContent.length - lenT.textContent.length * 0.6}ch`;
    } else if (lenT.textContent.length >= 6) {
        lenT.style.right = `${lenT.textContent.length - lenT.textContent.length * 0.25}ch`;
    } else {
        lenT.style.right = `${lenT.textContent.length - lenT.textContent.length * 0.015}ch`;
    }
}