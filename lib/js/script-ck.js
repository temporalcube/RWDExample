/* Author: Matt Henry

*/(function(){function b(a){articles.fadeOut(50)}function c(c){b();a.delay(100).fadeIn();c.preventDefault()}function d(a){b();aboutthissite.delay(100).fadeIn();a.preventDefault()}function e(a){b();mysites.delay(100).fadeIn();a.preventDefault()}function f(a){b();meonline.delay(100).fadeIn();a.preventDefault()}function g(a){b();welcomenote.delay(100).fadeIn();a.preventDefault()}$(".websiteemail").replaceWith('<span class="websiteemail">Email: <a href="mailto:matt-rwdexample@matthenry.us?subject=Matt\'s RWD Example Site Email Contact" class="cntct2">Contact Matt</a></span>');$.fx.speeds._default=300;var a=$("article#mybackground");aboutthissite=$("article#aboutthissite");mysites=$("article#mysites");meonline=$("article#meonline");welcomenote=$("article#welcomenote");articles=$(".primarycontent article");$("a.mybackgroundlink").on("click",c);$("a.aboutthissitelink").on("click",d);$("a.mysiteslink").on("click",e);$("a.meonlinelink").on("click",f);$("a.welcomenotelink").on("click",g)})();