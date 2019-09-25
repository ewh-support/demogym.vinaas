$(document).ready(function () {
    show_menu();
    bindingForNumberInput();
});

function show_menu() {
    if ($("#menuid").length) {
        var mn = parseInt($("#menuid").val());
        do {
            $("#mn" + mn).parent().addClass("active");
            mn = parseInt(mn / 100);
        }
        while (mn > 0);
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function goBack() {
    window.history.back();
}

function bindingForNumberInput() {
    $(".input_number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 189, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    $('.input_number').keypress(function (event) {
        if (event.keyCode === 10 || event.keyCode === 13)
            event.preventDefault();
    });

    $(".input_number").keyup(function (e) {
        if ($.inArray(e.keyCode, [9, 27, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && (e.keyCode != 46 && e.keyCode != 8)) {
            e.preventDefault();
        }
    });
}
function printDiv() {
    var printContents = $('#printcontent').html();
    var newWin = window.open('', 'Print-Window');

    newWin.document.open();

    newWin.document.write('<html><head><link href="/Contents/css/bootstrap.min.css" rel="stylesheet"><link href="/Contents/css/styles.css" rel="stylesheet"><script type="text/javascript">function codeAddress() { setTimeout(function () { window.print(); window.close(); }, 1000); } window.onload = codeAddress;</script></head><body>' + printContents + '</body></html>');

    newWin.document.close();
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0].toLowerCase() === sParam.toLowerCase()) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
    return '';
};

