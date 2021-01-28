import $ from "jquery";
import App from "./main.js";

$(document).ready(function() {
  let app = new App();
  burger();
});

function burger() {
  $('.burger-btn').on('click', function(){
    $('.burger-btn').toggleClass('burger-btn--active');
    $('.burger-menu').toggleClass('burger-menu--active');
  });
}
