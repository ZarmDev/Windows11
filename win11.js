const windowsClick = document.getElementById('windowsClick');

const windows = document.getElementById('windows');

const batteryLevel = document.getElementById('battery-level');

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