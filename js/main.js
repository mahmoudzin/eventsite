new WOW().init();


$(document).ready(function() {
    

    $(".singer-cart").click(function() {
        let dataArrive = $(this).data().arrive
        for(let i=0; i<$(this).siblings().length; i++){
            if($(this).siblings().eq(i).attr('id') != '' && $(dataArrive).siblings().eq(i).attr('id') != undefined){
                $(this).siblings().eq(i).prev().find('#open').addClass('fa-chevron-down').removeClass('fa-chevron-up')
                $(this).siblings().eq(i).slideUp(1000)
            } 
        }
        if ($(this).find('#open').hasClass('fa-chevron-up')) {
            $(this).find('#open').addClass('fa-chevron-down').removeClass('fa-chevron-up')
            $(dataArrive).slideUp(1000)
        }else{
            $(this).find('#open').removeClass('fa-chevron-down').addClass('fa-chevron-up')
            $(dataArrive).slideDown(1000) 
        }
   })

    function counter(){
        const eventDate = new Date("8/25/2022");
        const nowDate = new Date();
        const remindDate = (eventDate - nowDate);
        const seconedNumbers = Math.floor((remindDate / 1000) % 60)
        const munitsNumber = Math.floor(((remindDate / 1000) / 60) % 60)
        const hoursNumber = Math.floor((((remindDate / 1000) / 60) / 24) % 24)
        const daysNumber =  Math.floor((((remindDate / 1000) / 60) / 60) / 24 - hoursNumber)
        $('#days').html(daysNumber < 10 ? `0${daysNumber} D` : `${daysNumber} D`)
        $('#hours').html(hoursNumber < 10 ? `0${hoursNumber} h` : `${hoursNumber} h`)
        $('#minutes').html(munitsNumber < 10 ? `0${munitsNumber} m` : `${munitsNumber} m`)
        $('#socend').html(seconedNumbers < 10 ? `0${seconedNumbers} s` : `${seconedNumbers} s`)

    }
    setInterval(counter, 1000)
    /* Counter the letters*/ 
    $('#message').keyup(function(){
        let length = $('#message').val().length;
        let countNumber = $('#counte').html();
        let remined = 100 - length;
        if (remined > 0){
            $('#counte').html(remined);
        }else{
            $('#counte').html('your available character finished ');
        }
    })
    /*move Actvie class*/
    $('#menu a').click(function(){
        let target = $(this).attr('href')
        let topSection = $(target).offset().top;
        $('body,html').animate({scrollTop: topSection}, 1000)

        $(this).addClass('active-link');
        $(this).parent().siblings().find('a').removeClass('active-link')
    }) 

    let toggleBtnWidth = $('#toggle-btn').outerWidth()
    $('#toggle-btn').css('right', `-${toggleBtnWidth}px`)
    let menuWidth = $('#menu').outerWidth()
    $('#menu').css('left', `-${menuWidth}px`)
    $('#toggle-btn').click(function(){
        //console.log($('#menu').css('left'))
        if($('#menu').css('left') == '0px'){
            $('#menu').css('left', `-${menuWidth}px`)
            $(this).find('i').removeClass('active-link')
            $(this).find('i').addClass('fa-spin')
        }else{
            $('#menu').css('left', 0);
            $(this).find('i').addClass('active-link')
            $(this).find('i').removeClass('fa-spin')
        }
    })
    $('#close-btn').click(function(){
        $('#menu').css('left', `-${menuWidth}px`)
        $('#toggle-btn').find('i').removeClass('active-link')
        $('#toggle-btn').find('i').addClass('fa-spin')
    })
    //COlor oprions click
$('.color-options ul li div').click(function(e){
    changeColor($(this).css('background-color'))
    $(this).addClass('border border-2')
    $(this).parent().siblings().find('div').removeClass('border border-2')
})
let root = document.documentElement
 const changeColor = (val) => {
    root.style.setProperty('--main-color', val);
 }
 //imgs oprions click
 $('.imgs-options img').click(function(e){
    let newSec = $(this).attr('src');
    $('#home').css('background-image', `url(../${newSec})`)
    $(this).addClass('border border-2')
    $(this).parent().siblings().find('img').removeClass('border border-2')
})
})
