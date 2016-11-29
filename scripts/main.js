var menuAnimate = $('#menu-animate'),
    logic = false,
    screenBrowser = window.innerWidth;

function headAndShowTopMenu() {
    logic = !logic;
    if (screenBrowser > 850) {
        return false;
    } else if (!logic) {
        menuAnimate.fadeOut('slow', function () {
            $(this).css('display: block')
        });
    } else {
        menuAnimate.fadeIn('slow', function () {
            $(this).css('display: none')
        });
    }
}

$(document).ready(function () {
    $(function($){
        $(".phone").mask("+7 (999) 999-99-99");
    });

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: $(this).serialize(),
            success: function (data) {
                console.log('Сообщение отправлено');
                $($(this)).html(data);
            },
            error: function (jqXHR, text, error) {
                console.log('Сообщение не отправлено');
                $($(this)).html(error);
            }
        });
        return false;
    });
});
console.log('Ура');