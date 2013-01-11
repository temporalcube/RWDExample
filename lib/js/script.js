/* Author: Matt Henry

*/

(function (){

$('.websiteemail').replaceWith('<span class="websiteemail">Email: <a href="mailto:matt-rwdexample@matthenry.us?subject=Matt\'s RWD Example Site Email Contact" class="cntct2">Contact Matt<\/a><\/span>');


/*
 * mybackground, aboutthissite, mysites, meonline hides on load.
 * #mybackground links show mybackround and hide welcomenote, aboutthissite, mysites, meonline
 * #aboutthissite links show aboutthissite and hide welcomenote, mybackground, mysites, meonline
 * #mysites links show mysites and hide welcomenote, mybackground, aboutthissite, meonline
 * #meonline links show meonline and hide welcomenote, mybackground, aboutthissite, mysites
 * #welcomenote links show welcomenote and hide mybackground, aboutthissite, mysites, meonline
 */

$.fx.speeds._default = 300;
var mybackground = $('article#mybackground') 
	aboutthissite = $('article#aboutthissite')
	mysites = $('article#mysites')
	meonline = $('article#meonline')
	welcomenote = $('article#welcomenote')
	articles = $('.primarycontent article')

function hidearticles(e) {
	articles.fadeOut(50);
}

function showmybackground(e) {
	//articles.fadeOut(function(){mybackground.fadeIn();});
	hidearticles();
	mybackground.delay(100).fadeIn();
	e.preventDefault();
}
function showaboutthissite(e) {
	//articles.fadeOut(function(){aboutthissite.fadeIn();});
	hidearticles();
	aboutthissite.delay(100).fadeIn();
	e.preventDefault();
}
function showmysites(e) {
	hidearticles();
	mysites.delay(100).fadeIn();
	e.preventDefault();
}
function showmeonline(e) {
	hidearticles();
	meonline.delay(100).fadeIn();
	e.preventDefault();
}
function showwelcomenote(e) {
	hidearticles();	
	welcomenote.delay(100).fadeIn();
	e.preventDefault();
}
$('a.mybackgroundlink').on('click', showmybackground);



$('a.aboutthissitelink').on('click', showaboutthissite);



$('a.mysiteslink').on('click', showmysites);


$('a.meonlinelink').on('click', showmeonline);


$('a.welcomenotelink').on('click', showwelcomenote);


})();