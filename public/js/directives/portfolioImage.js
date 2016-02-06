"use strict";

// zooms in on image
angular.module("mySite").directive("portfolioImage", function () {
    return {
        restrict: "A",
        link: function (scope, element, attributes) {

            // when small image clicked
            element.bind("click", function (e) {

                // show dark background
                $("#divImgContainer").show();

                // create img element and center on page
                var imgEl = document.createElement("img");
                imgEl.setAttribute("src", attributes.src);
                imgEl.className = "center";
                imgEl.style.cssText = "width: 50%; position: absolute; z-index: 5000;";

                // remove image and hide background when image clicked
                imgEl.addEventListener("click", function () {
                    $("#divImgContainer").empty();
                    $("#divImgContainer").hide();
                });

                $("#divImgContainer").append(imgEl);
            });
        }
    };
});
