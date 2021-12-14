var emailDiv = document.querySelector('.contact-email');
var emailHover = document.querySelector('.email-hover');
var emailAddress = document.querySelector('.email-address');
var copyText = document.querySelector('.copy-text');

emailDiv.addEventListener("mouseover", function() {
    emailHover.style.backgroundColor = "#2b60ffc2";
    emailAddress.style.opacity = "0.1";
    copyText.style.opacity = "1";
});
emailDiv.addEventListener("mouseout", function() {
    emailHover.style.backgroundColor = "transparent";
    emailAddress.style.opacity = "1";
    copyText.style.opacity = "0";
});
emailDiv.addEventListener("click", function(){
    copyText.innerHTML = "Copied!&nbsp &nbsp &nbsp &nbsp &nbsp";
    setTimeout(function(){copyText.innerHTML = "Click to copy"}, 2500);
    navigator.clipboard.writeText('daniel@danielholthus.com');
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 90%',
        end: 'bottom bottom',
        scrub: 0.2,
    }
});

tl.from('.contact-title-background', {scaleX: 0.2, transformOrigin: "left center", ease: "none"});