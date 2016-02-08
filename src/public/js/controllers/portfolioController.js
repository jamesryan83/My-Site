"use strict";

angular.module("mySite").controller("portfolioController", function ($scope) {

    $scope.portfolioData = [{
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
        "content": "<p>Where in the World is an Android smartphone Google Maps/Streetview based guessing game.  It is similar to <a class='aLink' href='https://geoguessr.com/' target='_blank'>Geoguessr<a>, but has a unique  interactive hint system developed for touch screens</p><p>It was made with Android Java.  It uses an SQLite database, token based payment system for in app purchases and progressive gameplay mechanics. It also has unlockable categories and levels with randomly selected locations</p>"
    }, {
        "imgSrc": "../res/images/mySite.png",
        "linkWebsite": "",
        "linkDownload": "",
        "linkSource": "https://github.com/jamesryan83/My-Site",
        "title": "My Personal Website",
        "content": "<p>This website right here !</p><p>It's made with Node.js and Angular</p>"
    }, {
        "imgSrc": "../res/images/trello.png",
        "linkWebsite": "http://trellouidemo.azurewebsites.net/",
        "linkDownload": "",
        "linkSource": "https://github.com/jamesryan83/TrelloUiDemo",
        "title": "Trello UI Demo",
        "content": "<p>This is a clone of the landing page from <a class='aLink' target='_blank' href='https://trello.com/'>Trello</a></p><p>It's supposed to demonstrate that if someone gives me a UI mockup I can do the layout for them.  There are some slight differences such as the font as they use a fairly expensive one</p><p>It uses images from Trello but I did the page layout using html and sass</p>"
    }, {
        "imgSrc": "../res/images/trendy.png",
        "linkWebsite": "https://trendytrendz.azurewebsites.net/",
        "linkDownload": "",
        "linkSource": "https://github.com/jamesryan83/Trendytrendz",
        "title": "Trendytrendz",
        "content": "<p>Searches Google and Reddit based on Twitter trending hashtags</p><p>It uses the <a class='aLink'  href='https://dev.twitter.com/rest/public' target='_blank'>Twitter</a> and <a class='aLink'  href='https://developers.google.com/custom-search/json-api/v1/overview' target='_blank'>Google</a> apis.  Both of these apis have very strict usage limits, so this website is really only a demo</p><p>Twitter only allows 1 api call per minute for trend data, so there is a separate Azure Webjob that runs continuously and updates the data for each country which is then cached on the server.  Therefore the trend data may be up to 2 hours old</p><p>Made with Node.js/html/sass/javascript</p>"
    }, {
        "imgSrc": "../res/images/Shortcuts.png",
        "linkWebsite": "",
        "linkDownload": "../res/Shortcuts.zip",
        "linkSource": "https://github.com/jamesryan83/Shortcuts",
        "title": "Shortcuts",
        "content": "<p>A Windows desktop program used to save a list of shortcuts to a single file which you can then send to people.  Useful in an office environment</p><p>It's in C# and WPF and is built on a C#/WPF library which you can see <a class='aLink' href='https://github.com/jamesryan83/Csharp-Library' target='_blank'>here</a></p>"
    }, {
        "imgSrc": "../res/images/easybeam.png",
        "linkWebsite": "https://play.google.com/store/apps/details?id=test.BeamThingAndroid",
        "linkDownload": "",
        "linkSource": "",
        "title": "EasyBeam",
        "content": "<p>This is an Android app for continuous beam analysis for engineers.  It calculates bending moments, shear forces and deflections of multi-span beams</p><p>I made it with Java back in 2011 not long after I started programming, please ignore how hideous it looks :)</p>"
    }, {
        "imgSrc": "../res/images/PortalFrame.png",
        "linkWebsite": "",
        "linkDownload": "",
        "linkSource": "https://github.com/jamesryan83/Portal-Frame-Designer",
        "title": "Portal Frame designer",
        "content": "<p>Portal Frame Designer was part of my engineering thesis at uni.  The user inputs describe the dimensions and member sizes of a portal frame building.  This data is then sent to an Excel spreadsheet where loads (wind etc.) are applied using VBA, then that data was sent to <a class='aLink'  target='_blank' href='http://www.maxsurf.net/multiframe.html'>Multiframe</a> using the Multiframe API.</p><p>It's written in C#/WPF and uses <a class='aLink' target='_blank' href='http://docs.helix-toolkit.org/en/latest/introduction/introduction.html'>Helix Toolkit</a> to display a 3D model of the building</p>"
    }, {
        "imgSrc": "../res/images/Redmine.png",
        "linkWebsite": "",
        "linkDownload": "",
        "linkSource": "https://github.com/jamesryan83/Create-Redmine-Issue",
        "title": "Create Redmine Issues",
        "content": "<p>This is a single page web app that creates Issues on <a class='aLink' target='_blank' href='http://www.redmine.org'>Redmine</a> using the <a class='aLink' target='_blank' href='http://www.redmine.org/projects/redmine/wiki/Rest_api'>Redmine API</a></p><p>It is intended to be run on a local server with Redmine installed</p>"
    }]




});
