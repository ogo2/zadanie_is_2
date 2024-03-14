
$(document).ready(function(){
  $("#reg").on('click', function(event){
    event.preventDefault();

    var mail_user=$("#email").val(); // Получение значения из поля ввода
    var test_mail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]/;
    var myRe2 = test_mail.test(mail_user);// Проверка соответствия значения поля ввода паттерну
    console.log(myRe2);
    if (myRe2 == false) {
      $(".name2").append('<p style="color:red; font-size: 15px">Некорректный email</p>');
    }
  
    var login_user=$("#username").val(); // Получение значения из поля ввода
    var test_login = /[]/;
    var myRe4 = test_login.test(login_user);// Проверка соответствия значения поля ввода паттерну
    console.log(myRe4);
    if (myRe4 == false) {
      $(".name4").append('<p style="color:red; font-size: 15px">Некорректное имя пользователя (должны быть только латинские буквы и цифры)</p>');
    }
      
    // Получить введенное значение пароля
    var password_info = $("#password").val();
    console.log(password_info);
    var password_pattern = /[a-zA-Z0-9._-]/;
    var is_valid_password = password_pattern.test(password_info);
    console.log(is_valid_password);
    var confirm_password_info = $("#confirmPassword").val();
    console.log(confirm_password_info);
    var passwords_match = (password_info === confirm_password_info);
    console.log(passwords_match);
    // Если пароль недопустим или пароли не совпадают, вывести сообщение об ошибке
    if (!is_valid_password || !passwords_match) {
       $(".name6").append('<p style="color: red; font-size: 15px;">Введите корректный пароль и убедитесь, что пароли совпадают!</p>');
       $("#reg").attr("disabled", true); // Делаем ссылку недействительной
       return true;
    }
  })
 });
