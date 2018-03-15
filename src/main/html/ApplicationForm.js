    function testLogin() {
        var login = document.getElementById('login');
        pattern = /([\w-\.а-яА-я]{4,20}@([\wа-яА-Я]{2,5}.){1,3})/
        
        if (!login.value.match(pattern)) {
            success = false;
            alert ('Логин неверный');    
        }
    }
    function testPass() {
        var password = document.getElementById('password');
        allDigitPattern = /[\d]{8,20}/;
        charPattern = /[a-z]{8,20}/;
        noSymbPattern = /\b[\w\d]{8,20}/;
        forbiddenSymbPattern = /[^~":;<>]{3,5}/;
        shortPattern = /\b[\w\d!%&@*]{,8}/;
        longPattern = /\b[\w\d!%&@*]{20,}/;


        if (password.value.match(allDigitPattern)) {
            success = false;
            alert ('Пароль не может состоять только из цифр.Включите буквы и от 3 до 5 символов !%&@*');
        }
        if (password.value.match(charPattern)){
            success = false;
            alert('Пароль не может состоять только из букв.Включите цифры и от 3 до 5 символов !%&@*');  
        }
        if (password.value.match(noSymbPattern)) {
            success = false;
            alert('В пароле нет символов.Включите от 3 до 5 символов !%&@*');
        }
        if (password.value.match(forbiddenSymbPattern)) {
            success = false;
            alert('Введенные в пароле символы не допускаются.Включите от 3 до 5 символов !%&@*');s
        }
        if (password.value.match(shortPattern)) {
            success = false;
            alert('Введенный пароль слишком короткий. Допустимо от 9 до 20 символов'); 
        }
        if (password.value.match(longPattern)) {
            success = false;
            alert('Введенный пароль слишком длинный. Допустимо от 9 до 20 символов');
        }
    }
    
    function checkForm() {
        success = true;
        testLogin();
        testPass();
        if(success == true){
            document.location.href='fileshareLogged.html';
        }
    }