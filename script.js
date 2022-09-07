$(document).ready(() => {
    $("td").click(function (event) {
      alert("Kamu klik " + $(this).html() + "!");
    });
    $("th").click(function (event) {
      alert("Kamu klik " + $(this).html() + "!");
    });
  });