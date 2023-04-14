




// skip to content
document.querySelector('a[href="#menu"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
}); 
document.querySelector('a[href="#about-us"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about-us').scrollIntoView({ behavior: 'smooth' });
}); 
document.querySelector('a[href="#contact-us"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contact-us').scrollIntoView({ behavior: 'smooth' });
}); 

// form validation

function validateForm() {
    
}

// only number as input
function onlyNumber(event) {
    if (event.charCode != 8 && event.charCode == 0 || (event.charCode >= 48 && event.charCode <= 57)) {
        return true;
    } else {
        return false;
    }
}
