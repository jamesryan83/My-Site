"use strict";

var app = app || {};

$(document).ready(function () {
    app.init();
});



// Start
app.init = function () {

    // Create portfolio items
    var link;
    var portfolioItem;
    var img;
    for (var i = 0; i < app.portfolioData.length; i++) {
        portfolioItem = $("#portfolio-item-template").clone();

        img = portfolioItem.find("img").first();
        img.attr("src", app.portfolioData[i].imgSrc);
        img.attr("alt", "image for website " + app.portfolioData[i].title);
        portfolioItem.find("h3").first().text(app.portfolioData[i].title);
        portfolioItem.find(".portfolio-item-right").first().append(app.portfolioData[i].content);

        if (app.portfolioData[i].linkWebsite.length > 0) {
            link = portfolioItem.find(".porfolio-item-link").first();
            link.attr("href", app.portfolioData[i].linkWebsite);
            link.show();
        }

        if (app.portfolioData[i].linkDownload.length > 0) {
            link = portfolioItem.find(".porfolio-item-download").first();
            link.attr("href", app.portfolioData[i].linkDownload);
            link.show();
        }

        if (app.portfolioData[i].linkSource.length > 0) {
            link = portfolioItem.find(".porfolio-item-source").first();
            link.attr("href", app.portfolioData[i].linkSource);
            link.show();
        }

        $("#portfolio-items").append(portfolioItem.html());
    }

}



//{
//    "imgSrc": "../res/images/menuthing.jpg",
//    "linkWebsite": "http://menuthing.azurewebsites.net",
//    "linkDownload": "",
//    "linkSource": "",
//    "title": "Cuisine King",
//    "content": "<p>This is a startup project I am working on.  It's similar to Menulog.  It uses Azure, Node.js/Express, html/scss/jQuery.  It's about 33% complete</p>"
//},


// Portfolio items
app.portfolioData = [{
    "imgSrc": "../res/images/thingz.jpg",
    "linkWebsite": "http://thingz.azurewebsites.net",
    "linkDownload": "",
    "linkSource": "https://github.com/jamesryan83/thingz",
    "title": "Thingz",
    "content": "<p>Demo homepage.  Similar setup to Galaxi (below)</p>" +
        "<p>Probably won't work on Internet Explorer, because it uses webm format videos</p>"
}, {
    "imgSrc": "../res/images/galaxi.png",
    "linkWebsite": "http://galaxi.azurewebsites.net",
    "linkDownload": "",
    "linkSource": "https://github.com/jamesryan83/galaxi",
    "title": "Galaxi",
    "content": "<p>This is a demo home page.  It uses Greensock and ScrollMagic for animations.  Art was made in Inkscape.  Code is html, sass and jQuery</p>"
}, {
    "imgSrc": "../res/images/snappi.png",
    "linkWebsite": "http://snappi.azurewebsites.net",
    "linkDownload": "",
    "linkSource": "https://github.com/jamesryan83/snappi",
    "title": "Snappi",
    "content": "<p>I wanted to try out Xamarin and made a small app/website for posting images. Code is Xamarin.Forms, Node.js and jQuery</p>"
}, {
    "imgSrc": "../res/images/neeonn.png",
    "linkWebsite": "http://shoteratetest.azurewebsites.net",
    "linkDownload": "",
    "linkSource": "https://github.com/jamesryan83/Neeonn",
    "title": "Neeonn",
    "content": "<p>Neeonn is a concept/prototype for a social storyboard sharing platform.  It consists of a website and an Android app</p><p>The website is made with PHP and Laravel on the server, with Backbone and jQuery on the frontend.  The Android app is made with Apache Cordova, Backbone and jQuery</p><p>You can log in with un: test@neeonn.com and pw: neeonn if you want to have a look at the storyboard creating tools inside.  Same login credentials for the app too</p>"
}, {
    "imgSrc": "../res/images/technicorp.png",
    "linkWebsite": "http://technicorp.azurewebsites.net",
    "linkDownload": "",
    "linkSource": "https://github.com/jamesryan83/technicorp",
    "title": "Technicorp",
    "content": "<p>This is a demo home page.  It has a parallax scrolling background and I was also trying out using svg images for slanted backgrounds which you can see in the navbar and login dialogs.  Made with html, sass and jQuery</p>"
}, {
    "imgSrc": "../res/images/tasktime.png",
    "linkWebsite": "",
    "linkDownload": "",
    "linkSource": "https://github.com/jamesryan83/tasktime",
    "title": "Tasktime",
    "content": "<p>Tasktime is a todo list website.  You can create Tasks which are grouped into what are called Timeline Items.  It's a simple way to keep a list of the days tasks</p><p>It's made with SQL Server, PHP and Laravel, html/sass/javascript and Twitter bootstrap</p>"
}, {
    "imgSrc": "../res/images/scattertale.png",
    "linkWebsite": "http://scattertale.azurewebsites.net",
    "linkDownload": "",
    "linkSource": "https://github.com/jamesryan83/scattertale",
    "title": "Scattertale",
    "content": "<p>Scattertale is a website for writing and sharing articles.  It has a unique way of creating revisions to parts of articles.  Development started in December 2015 and will be ongoing for sometime</p><p>Have a look around the site, create an account if you want.  What is there currently should be working, but it is far from finished</p><p>It's made with Node.js and Backbone with a T-SQL Database</p>"
}, {
    "imgSrc": "../res/images/witw.png",
    "linkWebsite": "https://play.google.com/store/apps/details?id=com.dreamfire.whereintheworld&hl=en",
    "linkDownload": "",
    "linkSource": "https://github.com/jamesryan83/Where-In-The-World",
    "title": "Where in the World",
    "content": "<p>Where in the World is an Android smartphone Google Maps/Streetview based guessing game.  It is similar to <a href='https://geoguessr.com/' target='_blank'>Geoguessr</a> but with a unique  interactive hint system developed for touch screens</p><p>It was made with Android Java.  It uses an SQLite database, token based payment system for in app purchases and progressive gameplay mechanics. It also has unlockable categories and levels with randomly selected locations</p>"
}, {
    "imgSrc": "../res/images/mySite.png",
    "linkWebsite": "",
    "linkDownload": "",
    "linkSource": "https://github.com/jamesryan83/My-Site",
    "title": "My Personal Website",
    "content": "<p>This website right here !</p>"
}, {
    "imgSrc": "../res/images/Shortcuts.png",
    "linkWebsite": "",
    "linkDownload": "../res/Shortcuts.zip",
    "linkSource": "https://github.com/jamesryan83/Shortcuts",
    "title": "Shortcuts",
    "content": "<p>A Windows desktop program used to save a list of shortcuts to a single file which you can then send to people.  Useful in an office environment</p><p>It's in C# and WPF and is built on a C#/WPF library which you can see <a href='https://github.com/jamesryan83/Csharp-Library' target='_blank'>here</a></p>"
}, {
    "imgSrc": "../res/images/easybeam.png",
    "linkWebsite": "https://play.google.com/store/apps/details?id=test.BeamThingAndroid",
    "linkDownload": "",
    "linkSource": "",
    "title": "EasyBeam",
    "content": "<p>This is an Android app for continuous beam analysis for engineers.  It calculates bending moments, shear forces and deflections of multi-span beams</p><p>The trial version has almost 30,000 downloads so far.  I made it with Java back in 2011 not long after I started programming, please ignore how hideous it looks :)</p>"
}, {
    "imgSrc": "../res/images/PortalFrame.png",
    "linkWebsite": "",
    "linkDownload": "",
    "linkSource": "https://github.com/jamesryan83/Portal-Frame-Designer",
    "title": "Portal Frame designer",
    "content": "<p>Portal Frame Designer was part of my engineering thesis at uni.  The user inputs describe the dimensions and member sizes of a portal frame building.  This data is then sent to an Excel spreadsheet where loads (wind etc.) are applied using VBA, then that data was sent to <a  target='_blank' href='http://www.maxsurf.net/multiframe.html'>Multiframe</a> using the Multiframe API.</p><p>It's written in C#/WPF and uses <a target='_blank' href='http://docs.helix-toolkit.org/en/latest/introduction/introduction.html'>Helix Toolkit</a> to display a 3D model of the building</p>"
}];
