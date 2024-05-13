let seconds = 3600;

let timerId = setTimeout(function () {
  alert("Час вичерпано!");
}, seconds * 1000);

let halfTime = seconds / 2;
let halfTimeId = setTimeout(function () {
  alert("Залишилось менше половини часу!");
}, halfTime * 1000);
