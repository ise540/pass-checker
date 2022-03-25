$("<h1>", {
  class: "header",
  text: "Проверка сложности пароля JQuery",
}).prependTo("body");

$("<div>", {
  class: "form-group",
  style: "display: inline-block",
}).insertAfter(".header");

$("<input>", {
  id: "password",
  type: "password",
  class: "form-control",
  style: "width: 450px",
}).prependTo(".form-group");

$("<button>", {
  text: "click-click",
})
  .on("click", () => console.log("click"))
  .insertAfter(".form-group");

$("#password").password({
  enterPass: "Введите пароль",
  shortPass: "Пароль слишком короткий",
  containsField: "Пароль содержит имя пользователя",
  badPass: "Слабый; попробуйте использовать комбинации букв и цифр",
  goodPass: "Средний; попробуйте использовать специальные символы",
  strongPass: "Сильный пароль",
  showPercent: true,
  showText: true,
  animate: true,
  animateSpeed: "fast",
  field: false,
  fieldPartialMatch: true,
  minimumLength: 4,
  useColorBarImage: true,
  customColorBarRGB: {
    red: [0, 240],
    green: [0, 240],
    blue: 10,
  },
});
