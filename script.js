let main_it_1 = document.getElementById('main_item_1');
let main_it_2 = document.getElementById('main_item_2');
let main_it_3 = document.getElementById('main_item_3');
let main_it_4 = document.getElementById('main_item_4');
let main_it_5 = document.getElementById('main_item_5');
let main_it_6 = document.getElementById('main_item_6');

let activeElement = null;

function toggleSize(element) {
    if (element.style.transform === 'scale(1.2, 1.2)') {
        element.style.transform = 'scale(1, 1)';
    } else {
        element.style.transform = 'scale(1.2, 1.2)';
    }

   
    if (activeElement && activeElement !== element) {
        activeElement.style.transform = 'scale(1, 1)';
    }


    activeElement = element;
}
let isExpanded = false;

$('#bth_main').click(function() {
    if (isExpanded) {
        $('.main_ittt').slideUp();
    } else {
        $('.main_ittt').slideDown();
        $('.main_ittt').css('display', 'flex');
    }
    isExpanded = !isExpanded;
});

main_it_1.addEventListener('click', () => toggleSize(main_it_1));
main_it_2.addEventListener('click', () => toggleSize(main_it_2));
main_it_3.addEventListener('click', () => toggleSize(main_it_3));
main_it_4.addEventListener('click', () => toggleSize(main_it_4));
main_it_5.addEventListener('click', () => toggleSize(main_it_5));
main_it_6.addEventListener('click', () => toggleSize(main_it_6));

let levels = document.querySelectorAll('.level');

levels.forEach(level => {
    level.addEventListener('click', () => {
        
        if (level.classList.contains('expanded')) {
            level.classList.remove('expanded');
            if (['a1', 'a2', 'b1', 'b2', 'c1'].includes(level.id)) {
                level.style.height = ''; 
            }
        } else {
            
            levels.forEach(l => {
                l.classList.remove('expanded');
                if (['a1', 'a2', 'b1', 'b2','c1'].includes(l.id)) {
                    l.style.height = ''; 
                }
            });

            
            level.classList.add('expanded');
            if (['a1', 'a2', 'b1', 'b2','c1'].includes(level.id)) {
                level.style.height = '220px'; 
            }
        }
    });
});
$('#bth_main').click(function(){
    $('.main_ittt').slideToggle();
});

$('#box_img_nav').click(function() {
    $('body').toggleClass('dark-theme');
});

let voc_btn = document.getElementById('voc');
let tran_btn = document.getElementById('tran');
let audio_btn = document.getElementById('aud');
let voc_box = document.getElementById('voc_box');
let tran_box = document.getElementById('tran_box');
let audio_box = document.getElementById('audio_box');

voc_btn.addEventListener('click', () => {
    voc_box.style.display = 'grid';
    tran_box.style.display = 'none';
    audio_box.style.display = 'none';
});

tran_btn.addEventListener('click', () => {
    voc_box.style.display = 'none';
    tran_box.style.display = 'grid';
    audio_box.style.display = 'none';
});

audio_btn.addEventListener('click', () => {
    voc_box.style.display = 'none';
    tran_box.style.display = 'none';
    audio_box.style.display = 'flex';
});


let Answer_btn = document.getElementById('Answer_voc');

let answer_apple = document.getElementById('Apple');
let answer_air = document.getElementById('Air');
let answer_animal = document.getElementById('Animal');
let answer_area = document.getElementById('Area');
let answer_body = document.getElementById('Body');
let answer_bottom = document.getElementById('Bottom');
let answer_car = document.getElementById('Car');
let answer_country = document.getElementById('Country');
let answer_city = document.getElementById('City');
let answer_dog = document.getElementById('Dog');

const correctAnswers = {
    Apple: 'apple',
    Air: 'air',
    Animal: 'animal',
    Area: 'area',
    Body: 'body',
    Bottom: 'bottom',
    Car: 'car',
    Country: 'country',
    City: 'city',
    Dog: 'dog'
};

Answer_btn.addEventListener('click', () => {
    for (let key in correctAnswers) {
        let inputElement = document.getElementById(key);
        if (inputElement.value.toLowerCase() === correctAnswers[key]) {
            inputElement.style.background = '#A6FAAA';
        } else {
            inputElement.style.background = '#FABAA6';
        }
    }
});

let checkTranslationsBtn = document.getElementById('checkTranslations');

const correctTranslations = {
    uk_Apple: 'яблуко',
    uk_Banana: 'банан',
    uk_Cherry: 'вишня',
    uk_Date: 'фінік',
    uk_Elderberry: 'бузина',
    uk_Fig: 'інжир',
    uk_Grape: 'виноград',
    uk_Honeydew: 'нектар',
    uk_IndianFig: 'індійська смоківниця',
    uk_Jackfruit: 'джекфрут',
    eng_Apple: 'apple',
    eng_Banana: 'banana',
    eng_Cherry: 'cherry',
    eng_Date: 'date',
    eng_Elderberry: 'elderberry',
    eng_Fig: 'fig',
    eng_Grape: 'grape',
    eng_Honeydew: 'melon',
    eng_IndianFig: 'indian fig',
    eng_Jackfruit: 'jackfruit'
};

checkTranslationsBtn.addEventListener('click', () => {
    for (let key in correctTranslations) {
        let inputElement = document.getElementById(key);
        if (inputElement.value.trim().toLowerCase() === correctTranslations[key]) {
            inputElement.style.background = '#A6FAAA'; // green for correct
        } else {
            inputElement.style.background = '#FABAA6'; // red for incorrect
        }
    }
});


const correctAnswerss = {
    input_1: 'apple',
    input_2: 'banana',
    input_3: 'date',
    input_4: 'Apple',
    input_5: 'Banana',
    input_6: 'Date',
};

document.addEventListener("DOMContentLoaded", () => {
    const playPauseButtons = document.querySelectorAll('.play-pause');
    const audioElements = document.querySelectorAll('.audio');
    const progressBars = document.querySelectorAll('.progress-bar');
    const checkAudioButton = document.getElementById('checkAudio');

    playPauseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const audio = audioElements[index];
            if (audio.paused) {
                audio.play();
                button.textContent = 'Pause';
            } else {
                audio.pause();
                button.textContent = 'Play';
            }
        });

        audioElements[index].addEventListener('timeupdate', () => {
            progressBars[index].value = (audioElements[index].currentTime / audioElements[index].duration) * 100;
        });

        progressBars[index].addEventListener('input', () => {
            audioElements[index].currentTime = (progressBars[index].value / 100) * audioElements[index].duration;
        });
    });

    checkAudioButton.addEventListener('click', () => {
        for (let key in correctAnswerss) {
            let inputElement = document.getElementById(key);
            if (inputElement.value.trim().toLowerCase() === correctAnswerss[key]) {
                inputElement.style.background = '#A6FAAA';
            } else {
                inputElement.style.background = '#FABAA6';
            }
        }
    });
});

let mybutton = document.getElementById("scrollToTopBtn");


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


mybutton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
setTimeout(()=>{
    let method_h2_1=document.getElementById("method_h2_1")
    method_h2_1.style.height="60px"
},500)
let plus1=document.getElementById("plus1")

const toggles = document.querySelectorAll('.toggle-container');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.parentElement.nextElementSibling;
            const bar = this.querySelector('.toggle-bar');

            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                this.classList.remove('minus');
                content.style.height = '0';
            } else {
                document.querySelectorAll('.methods_blocks p').forEach(p => {
                    p.classList.remove('expanded');
                    p.style.height = '0';
                });
                document.querySelectorAll('.toggle-container').forEach(container => {
                    container.classList.remove('minus');
                });
                content.classList.add('expanded');
                this.classList.add('minus');
                content.style.height = content.scrollHeight + 'px';
            }
        });
    });

let footer_btn1=document.getElementById("footer_btn1")
footer_btn1.addEventListener("click",function(){
    let footer_inp_text1=document.getElementById("footer_inp_text1").value
    let footer_alert=document.getElementById("footer_alert")
    footer_alert.style.display="flex"
    let footer_alert_text=document.getElementById("footer_alert_text").innerText="your emeil: "+footer_inp_text1+"?"
})

let footer_alert_yes=document.getElementById("footer_alert_yes")
footer_alert_yes.addEventListener("click",function(){
    let footer_alert=document.getElementById("footer_alert")
    footer_alert.style.display="none"
})

let footer_alert_no=document.getElementById("footer_alert_no")
footer_alert_no.addEventListener("click",function(){
    let footer_alert=document.getElementById("footer_alert")
    footer_alert.style.display="none"
})


let box_img_nav=document.getElementById('box_img_nav')
let nav=document.getElementById('nav')
let header=document.getElementById('header')
let section_histori=document.getElementById('section_histori')
let box=document.getElementById('box')
let theme="light"



box_img_nav.addEventListener("click",function(){

    if (theme=="light"){
        box.style.background="#333"
        box.style.transition="all 2s "
        section_histori.style.background="#333"
        section_histori.style.transition="all 2s "
        header.style.background="#64646C"
        header.style.transition="all 2s "
   box_img_nav.style.transform="rotate(180deg)"
   box_img_nav.style.transition="all 2s "
   nav.style.transition="all 2s "
    nav.style.background="#64646C"
    btn_nav_Login_login.style.background="black"
    main_1.style.transition="all 2s "

theme="dark"

}

else {
    box_img_nav.style.transform="rotate(0deg)"
    nav.style.background="#23BD93"
    header.style.background="#23BD93"
    section_histori.style.background="#ffff"
    box.style.background="#ffff"
    box.style.transition="all 2s "
    box_img_nav.style.transition="all 2s "
        btn_nav_Login_login.style.background="#ffff"
    nav.style.transition="all 2s "


    theme="light"

}

})


let btn_nav_Login=document.getElementById('btn_nav_Login')
let btn_nav_Login_login=document.getElementById('btn_nav_Login_login')
let btn_nav_Login_login1=document.getElementById('btn_nav_Login_login1')
let btn_nav_Login_logi2=document.getElementById('btn_nav_Login_login2')

btn_nav_Login.addEventListener('click',function(){

    btn_nav_Login_login.style.display="flex"
    btn_nav_Login_login1.style.display="block"
    btn_nav_Login_login.style.justifyContent="space-around"
    btn_nav_Login_login.style.alignItems="center"
    btn_nav_Login_login2.style.display="flex"

})


let btn_nav_Login_login2_block_button_log=document.getElementById('btn_nav_Login_login2_block_button_log')
btn_nav_Login_login2_block_button_log.addEventListener("click",function(){
    btn_nav_Login_login.style.display="none"


})


let btn_nav_Sing_up=document.getElementById('btn_nav_Sing_up')
let  btn_nav_Sing_up_up=document.getElementById('btn_nav_Sing_up_up')
let btn_nav_Login_login3=document.getElementById('btn_nav_Login_login3')

btn_nav_Sing_up.addEventListener('click',function(){
    btn_nav_Sing_up_up.style.display="flex"
btn_nav_Sing_up_up.style.justifyContent=" space-around"
    btn_nav_Sing_up_up.style.alignItems="center"
    btn_nav_Login_login3.style.display="flex"

})

let btn_nav_Login_login2_block_button_up=document.getElementById('btn_nav_Login_login2_block_button_up')
btn_nav_Login_login2_block_button_up.addEventListener("click",function(){
    btn_nav_Sing_up_up.style.display="none"
})

