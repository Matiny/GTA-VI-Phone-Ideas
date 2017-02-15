$(document).ready(function () {

    function showTime() {
        var today = new Date();
        diem = "AM",
            h = today.getHours(),
            m = today.getMinutes();
        if (h > 11) {
            diem = "PM";
        }
        if (h > 12) {
            h -= 12;
        }
        if (m < 10) {
            m = "0" + m;
        }
        $('.clock').text(h + ":" + m + " " + diem);
        setTimeout(function () {
            showTime()
        }, 10000);
    }
    showTime();

    function showDay() {
        var today = new Date();
        var weekday = [];
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tues";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        var d = weekday[today.getDay()];
        $('.day').text(d);
    }

    showDay();

    function hideIcons() {
        $('.row1 img, .row2 img, .row3 img').css('display', 'none');
    }

    $('#close').click(function () {
        $('.app').removeClass('visible');
        setTimeout(function () {
            $('.row1 img, .row2 img, .row3 img').css('display', 'block');
            $('.app').attr('src', 'img/jpgs/loading.jpg');
        }, 400)
    });

    $('#job').click(function () {
        $('.app').attr('src', 'img/jpgs/joblist.jpg')
        .addClass('visible');
        hideIcons();
    });

    $('#find').click(function () {
        $('.app').attr('src', 'img/jpgs/crew.jpg')
        .addClass('visible');
        hideIcons();
    });

    $('#www').click(function () {
        window.open("http://www.google.com");
    });

    $('#serv').click(function () {
        $('.app').attr('src', 'img/jpgs/serv.jpg')
        .addClass('visible');
       hideIcons();
    });

    $('#bikers').click(function () {
        $('.app').attr('src', 'img/jpgs/bikers.jpg')
        .addClass('visible');
       hideIcons();
    });

    $('#merry').click(function () {
        $('.app').attr('src', 'img/jpgs/merry.jpg')
        .addClass('visible');
       hideIcons();
    });

    $('#peg').click(function () {
        $('.app').attr('src', 'img/jpgs/pega.jpg')
        .addClass('visible');
       hideIcons();
    });

    $('#lamar').click(function () {
        $('.app').attr('src', 'img/jpgs/lamar.jpg')
        .addClass('visible');
        hideIcons();
    });

    $('#lester').click(function () {
        $('.app').attr('src', 'img/jpgs/lester.jpg')
        .addClass('visible');
        hideIcons();
    });
});
