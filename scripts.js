// sticky navigation
const menuIcon = document.getElementById('menuIcon');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const stickyNavList = document.getElementById('stickyNavList');
const stickyNavLink = document.getElementsByClassName('stickyNavLink');

$percentage = $('#percentage');
$label = $('#label');

const html5 = document.getElementById('html5');
const css3 = document.getElementById('css3');
const scss = document.getElementById('scss');
const js = document.getElementById('js');
const jQuery = document.getElementById('jQuery');
const react = document.getElementById('react');
const vs = document.getElementById('vsCode');
const gitHub = document.getElementById('gitHub');
const firebase = document.getElementById('firebase');


menuIcon.onclick = function toggleClass() {
    line1.classList.toggle('change');
    line2.classList.toggle('change');
    line3.classList.toggle('change');
    stickyNavList.classList.toggle('change');

    for (n of stickyNavLink) {
        n.classList.toggle('change');
    }
}

// Circular Progress Bar
// function resetProgress() {
//     const progress = document.getElementById('progressFill');

//     progress.style.setProperty('--loadDuration', `0s`);
//     progress.style.setProperty('--initialStroke', `0 100`);

//     console.log('reset ran');
// }

// function setProgress(skill) {
//     const progress = document.getElementById('progressFill');
//     progress.style.setProperty('--initialStroke', `${skill} 100`);
//     progress.style.setProperty('--loadDuration', `1s`);

//     console.log('set ran');
// }

// function loadProgress(skill, skillName) {
//     resetProgress();

//     setTimeout(() => {
//         setProgress(skill);
//     }, 100);

//     $percentage.text(`${skill}%`);

//     $label.html(`
//         <h2>${skillName}</h2>
//     `)
// }

//button to progress functions
// html5.onclick = function() {
//     loadProgress(90, 'HTML5');
// }

// css3.onclick = function () {
//     loadProgress(80, 'CSS3');
// }

// scss.onclick = function() {
//     loadProgress(80, 'SCSS');
// }

// js.onclick = function () {
//     loadProgress(70, 'JavaScript');
// }

// jQuery.onclick = function () {
//     loadProgress(85, 'jQuery');
// }

// react.onclick = function () {
//     loadProgress(70, 'React');
// }

// vs.onclick = function () {
//     loadProgress(90, 'Visual Studio Code');
// }

// gitHub.onclick = function () {
//     loadProgress(60, 'GitHub');
// }

// firebase.onclick = function () {
//     loadProgress(60, 'Firebase');
// }


// flickity
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    lazyLoad: true
});

$overlay = $('.overlay');
$title = $('.title');
$usedSkills = $('.usedSkills');
$projectDescription = $('.projectDescription');
$links = $('.links');

// carousel overlay
$overlay.hover(
    function () {
        $title.removeClass('visuallyHidden');
        $usedSkills.removeClass('visuallyHidden');
        $projectDescription.removeClass('visuallyHidden');
        $links.removeClass('visuallyHidden');
    }, function () {
        $title.addClass('visuallyHidden');
        $usedSkills.addClass('visuallyHidden');
        $projectDescription.addClass('visuallyHidden');
        $links.addClass('visuallyHidden');
    }
);

$overlay.on('click', function() {
    $title.classList.toggle('visuallyHidden');
    $usedSkills.classList.toggle('visuallyHidden');
    $projectDescription.classList.toggle('visuallyHidden');
    $links.classList.toggle('visuallyHidden');
})