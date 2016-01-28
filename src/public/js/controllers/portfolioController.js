"use strict";

angular.module("mySite").controller("portfolioController", function ($scope) {

    $scope.portfolioData = [{
        "imgSrc": "../res/images/scattertale.png",
        "linkWebsite": "http://scattertale.azurewebsites.net",
        "linkSource": "https://github.com/jamesryan83/scattertale",
        "title": "Scattertale",
        "content": "<p>Scattertale is a website for writing and sharing articles.  It has a unique way of creating revisions to parts of articles.  Development started in December 2015 and will be ongoing for sometime</p><p>Have a look around the site, create an account if you want.  What is there currently should be working, but it is far from finished</p><p>It's made with Node.js and Backbone with a T-SQL Database</p>"
    }, {
        "imgSrc": "../res/images/witw.png",
        "linkWebsite": "https://play.google.com/store/apps/details?id=com.dreamfire.whereintheworld&hl=en",
        "linkSource": "https://github.com/jamesryan83/Where-In-The-World",
        "title": "Where in the World",
        "content": "<p>Where in the World is an Android smartphone Google Maps/Streetview based guessing game.  It is similar to <a class='aLink' href='https://geoguessr.com/' target='_blank'>Geoguessr<a>, but has a unique  interactive hint system developed for touch screens</p><p>It was made with Android Java.  It uses an SQLite database, token based payment system for in app purchases and progressive gameplay mechanics. It also has unlockable categories and levels with randomly selected locations</p>"
    }, {
        "imgSrc": "../res/images/mySite.png",
        "linkWebsite": "",
        "linkSource": "https://github.com/jamesryan83/express-angular-website-cv",
        "title": "My Personal Website",
        "content": "<p>This website right here !</p><p>It's made with Node.js and Angular</p>"
    }, {
        "imgSrc": "../res/images/Shortcuts.png",
        "linkWebsite": "",
        "linkSource": "https://github.com/jamesryan83/Shortcuts",
        "title": "Shortcuts",
        "content": "<p>A Windows desktop program used to save a list of shortcuts to a single file which you can then send to people.  Useful in an office environment</p><p>It uses a small C#/WPF library I made which you can see <a class='aLink' href='https://github.com/jamesryan83/Csharp-Library' target='_blank'>here</a></p>"
    }, {
        "imgSrc": "../res/images/easybeam.png",
        "linkWebsite": "https://play.google.com/store/apps/details?id=test.BeamThingAndroid",
        "linkSource": "",
        "title": "EasyBeam",
        "content": "<p>This is an Android app for continuous beam analysis for engineers.  It calculates bending moments, shear forces and deflections of multi-span beams</p><p>I made it with Java back in 2011 not long after I started programming, please ignore how hideous it looks :)<p>"
    }, {
        "imgSrc": "../res/images/Inkscape.png",
        "linkWebsite": "http://jamesryan83.github.io/Get-text-from-Inkscape/",
        "linkSource": "https://github.com/jamesryan83/Get-text-from-Inkscape",
        "title": "Get Text From Inkscape",
        "content": "<p>This a very small web app that takes an Inkscape file (.svg), parses it, and returns the text<p>"
    }, {
        "imgSrc": "../res/images/PortalFrame.png",
        "linkWebsite": "",
        "linkSource": "https://github.com/jamesryan83/Portal-Frame-Designer",
        "title": "Portal Frame designer",
        "content": "<p>Portal Frame Designer was part of my engineering thesis at uni.  The user inputs describe the dimensions and member sizes of a portal frame building.  This data is then sent to an Excel spreadsheet where loads (wind etc.) are applied using VBA, then that data was sent to <a class='aLink'  target='_blank' href='http://www.maxsurf.net/multiframe.html'>Multiframe</a> using the Multiframe API.</p><p>It's written in C#/WPF and uses <a class='aLink' target='_blank' href='https://github.com/helix-toolkit/helix-toolkit'>Helix Toolkit</a> to display a 3D model of the building</p>"
    }, {
        "imgSrc": "../res/images/Redmine.png",
        "linkWebsite": "",
        "linkSource": "https://github.com/jamesryan83/Create-Redmine-Issue",
        "title": "Create Redmine Issues",
        "content": "<p>This is a single page web app that creates Issues on <a class='aLink' target='_blank' href='http://www.redmine.org'>Redmine</a> using the <a class='aLink' target='_blank' href='http://www.redmine.org/projects/redmine/wiki/Rest_api'>Redmine API</a></p><p>It is intended to be run on a local server with Redmine installed</p>"
    }]




});
