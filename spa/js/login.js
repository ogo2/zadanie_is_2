$(document).ready(function(){
    $("#login").on('click', function(event){
      event.preventDefault();
  
    var mail_user=$("#email").val(); // Получение значения из поля ввода
    var test_mail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]/;
    var myRe2 = test_mail.test(mail_user);// Проверка соответствия значения поля ввода паттерну
    console.log(myRe2);
    if (myRe2 == false) {
      $(".name2").append('<p style="color:red; font-size: 15px">Некорректный email</p>');
    }
        
      var password_user=$("#password").val(); // Получение значения из поля ввода пароль
      var test_password = /[a-zA-Z0-9]/;
      var myRe5 = test_password.test(password_user);
      console.log(myRe5);
      if (myRe5 == false) {
        $(".name6").append('<p style="color:red; font-size: 15px">Пароль не верный</p>');
      }
    })
   });