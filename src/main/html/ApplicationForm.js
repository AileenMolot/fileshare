    var errorMessage = "";
    function testLogin() {
        var login = document.getElementById('login');
        var pattern = /([\w-\.а-яА-я]{4,20}@([\wа-яА-Я]{2,5}.){1,3})/
        
        if (!login.value.match(pattern)) {
            success = false;
            errorMessage ='Логин неверный!\n';    
        }
    }
    function testPass() {
        var password = document.getElementById('password');
        var passPattern = /((?=.+[%!<`~])(?=.+[a-zA-Z])(?=.+[0-9]).{8,20})/g;
          
        if (!password.value.match(passPattern)) {
            success = false;
            errorMessage += "Пароль неверный!\n"
        }
        if (!password.value.match(/(?=.+[%!<`~])/)) {
            success = false;
            errorMessage += "Пароль должен содержать от 1 символа %!<`~\n";
        }
        if (!password.value.match(/(?=.+[a-zA-Z])/)) {
            success = false;
            errorMessage += "Пароль должен содержать строчные и заглавные буквы латиницей\n";
        }
        if (!password.value.match(/(?=.+[0-9])/)) {
            success = false;
            errorMessage += "Пароль должен содержать цифры\n";
        }
        
    }
    
    function checkForm() {
        success = true;
        testLogin();
        testPass();
        if(success === true){
            document.location.href='fileshareLogged.html';
        }
        else
            alert(errorMessage);
    }