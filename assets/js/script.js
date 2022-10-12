window.onscroll = function() {
    let header = document.getElementsByTagName('header');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header[0].style.display = 'block';
    } else {
        header[0].style.display = 'none';
    }
};


const text = document.querySelector(".banner_text p");

text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 13}deg)">${char}</span>`
	)
	.join("");

window.addEventListener('scroll', function() {
    var element = document.querySelector('.numbers');
    var position = element.getBoundingClientRect();

    if(position.top >= 0 && position.bottom <= window.innerHeight) {

    const counters = document.querySelectorAll('.counter');

    for(let n of counters) {
        const updateCount = () => {
        const target = + n.getAttribute('data-target');
        const count = + n.innerText;
        const speed = 7000;
        const inc = target / speed;
        if(count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 200);
        } else {
            n.innerText = target;
        }
        }
        updateCount();
    }
    }
});