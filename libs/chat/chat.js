$('.chat-container #prime').click(function () {
    toggleFab();
});
function toggleFab() {
    $('.chat-container .prime').toggleClass('fa-comment');
    $('.chat-container .prime').toggleClass('fa-close');
    $('.chat-container .prime').toggleClass('is-active');
    $('.chat-container .prime').toggleClass('is-visible');
    $('.chat-container #prime').toggleClass('is-float');
    $('.chat-container .chat').toggleClass('is-visible');
    $('.chat-container .fab').toggleClass('is-visible');
    if ($('.chat-container .prime').hasClass('fa-close')) {
        showChat();
        $('.chat-container #prime').addClass('d-none')
        if (window.innerWidth <= 768) {
            $('body').addClass('overflow-hidden')
        }
    } else {
        hideChat();
        $('.chat-container #prime').removeClass('d-none')
        $('body').removeClass('overflow-hidden')
    }
}
function hideChat() {
    var ancestor = document.querySelector('.chat-container'),
    descendents = ancestor.getElementsByTagName('*');
    for (var i = 0; i < descendents.length; ++i) {
        if(descendents[i].id !== 'prime' && !$(descendents[i]).hasClass('prime') 
                && !$(descendents[i]).hasClass('fabs') && !$(descendents[i]).hasClass('fab_field')) {
            $(descendents[i]).css('display', 'none');
        }
    }
}

function showChat() {
    var ancestor = document.querySelector('.chat-container'),
    descendents = ancestor.getElementsByTagName('*');
    for (var i = 0; i < descendents.length; ++i) {
        if(descendents[i].id !== 'prime' && !$(descendents[i]).hasClass('prime') 
                && !$(descendents[i]).hasClass('fabs') && !$(descendents[i]).hasClass('fab_field')) {
            $(descendents[i]).css('display', 'block');
        }
    }
}

hideChat();
