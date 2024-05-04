window.onload = function() {
        header();
        function header(){
    let past_name = prompt("Бажаю здоров'я! Напишіть Ваше прізвище...");
    console.log(past_name);
    let first_name = prompt("... напишіть, будь ласка, Ваше ім'я та по-батькові...");
    let rank = prompt ("Напишіть, яке у Вас звання...");
    let post = prompt("... з якого Ви військового підрозділу?");
    let table_header = document.getElementById("table-header"); 
// Отримати посилання на комірки таблиці за їх id
    let _past_name = document.getElementById("past_name");
    let _first_name = document.getElementById("first_name");
    let _rank = document.getElementById("rank");
    let _post = document.getElementById("post");
    let _date = new Date();
    let _data_date = _date.getDate();
    let _month_date = _date.getMonth();
    const month_array = ["січня","лютого","березня","квітня", "травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];
    _month_date = month_array[_month_date];
    let _year_date = _date.getFullYear();
  let date = _data_date + " " + _month_date + " " + _year_date + " року";
   
// Вставити значення в комірки
    _past_name.innerHTML = past_name;
    _first_name.innerHTML = first_name;
    _rank.innerHTML = rank;
    _post.innerHTML = post;
     _date = document.getElementsByClassName("date");
     for (var i = 0; i < _date.length; i++) {
      _date[i].innerHTML = date;
}
    _date.innerHTML = date;
    document.getElementById("content").style.display = "block";

        }}