/* HEADER */

window.onscroll = function() {
    let header = document.getElementsByTagName('header');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header[0].style.display = 'block';
    } else {
        header[0].style.display = 'none';
    }
};

/* MENU */

function menu() {
    let menu = document.getElementById('menu_nav');
    let btn = document.getElementById('menu_btn');
  
    if(btn.classList.contains('menu_close')) {
      menu.style.display = 'block';
      btn.classList.remove('menu_close');
      btn.classList.add('menu_open');
    } else {
      menu.style.display = 'none';
      btn.classList.remove('menu_open');
      btn.classList.add('menu_close');
    }
  }

/* BANNER */

const text = document.querySelector(".banner_text p");

text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 13}deg)">${char}</span>`
	)
	.join("");

/* NUMBERS */

window.addEventListener('scroll', function() {
    var element = document.querySelector('.numbers');
    var position = element.getBoundingClientRect();

    if(position.top >= 0 && position.bottom <= window.innerHeight) {

    const counters = document.querySelectorAll('.counter');

    for(let n of counters) {
        const updateCount = () => {
        const target = + n.getAttribute('data-target');
        const count = + n.innerText;
        const speed = 10000;
        const inc = target / speed;
        if(count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            n.innerText = target;
        }
        }
        updateCount();
    }
    }
});

/* ANIMATIONS */

var tl_values_img = gsap.timeline(
    {
        scrollTrigger: {
          trigger: ".values_titles",
        }
      }
);
tl_values_img.from('.line-1', {y: -500})
tl_values_img.from("#values_img1", {y: 200, duration: 0.7});
tl_values_img.from("#values_img2", {y: 200, duration: 0.7});

var tl_values = gsap.timeline(
    {
        scrollTrigger: {
          trigger: ".values_images",
        }
      }
);
tl_values.from("#values_text_left1", {x: -800, duration: 0.7});
tl_values.from("#values_text_left2", {x: -800, duration: 0.7});
tl_values.from("#values_text_right", {x: 800, duration: 0.7});

gsap.from(".line-2", {
    scrollTrigger: ".activities",
    opacity: 0,
    duration: 1,
  });


gsap.from(".activities_title", {
scrollTrigger: ".activities",
x: -500,
duration: 1,
});

var tl_activities = gsap.timeline(
{
    scrollTrigger: {
        trigger: "#activities_content1",
    }
    }
);
tl_activities.from('#activities_content1', {opacity: 0, duration: 0.3});
tl_activities.from('#activities_content2', {opacity: 0, duration: 0.3});
tl_activities.from('#activities_content3', {opacity: 0, duration: 0.3});
tl_activities.from('#activities_content4', {opacity: 0, duration: 0.3});
tl_activities.from('#activities_content5', {opacity: 0, duration: 0.3});

var tl_map = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".map",
        }
        }
    );
tl_map.from('.line-3', {y: -400});
tl_map.from('#pin2', {opacity: 0, duration: 0.3});
tl_map.from('#pin3', {opacity: 0, duration: 0.3});
tl_map.from('#pin4', {opacity: 0, duration: 0.3});
tl_map.from('#pin5', {opacity: 0, duration: 0.3});
tl_map.from('#pin6', {opacity: 0, duration: 0.3});
tl_map.from('#pin7', {opacity: 0, duration: 0.3});

var tl_partners = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".logo_partners",
        }
        }
    );
tl_map.from('#partner1', {opacity: 0, duration: 0.3});
tl_map.from('#partner2', {opacity: 0, duration: 0.3});
tl_map.from('#partner3', {opacity: 0, duration: 0.3});
tl_map.from('#partner4', {opacity: 0, duration: 0.3});
tl_map.from('#partner5', {opacity: 0, duration: 0.3});