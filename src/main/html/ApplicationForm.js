function testLogin (login) {
beforePattern = /\b[\wа-я]{1,3}@[\w.а-я]+\.[\wа-я]+\b/;
beforePattern2 = /\b[\wа-я]{20,}@[\w.а-я]+\.[\wа-я]+\b/;
digitalPattern= /\b\d+@\d+\.\d+\b/;
afterPattern= /\b[\wа-я]+@[\w.а-я]{1}\.[\wа-я]+\b/;
afterPattern2= /\b[\wа-я]{4,20}@[\w.а-я]{6,}\.[\wа-я]+\b/;

if (digitalPattern.test(login)===true) {
alert ('Логин не может состоять только из цифр'); return false;
return true;
}
if (beforePattern.test(login)===true) {
alert ('Имя пользователя не может быть меньше 4 символов'); return false;
return true;
}
if (beforePattern2.test(login)===true) {
alert ('Имя пользователя не может быть больше 20 символов'); return false;
return true;
}
if (afterPattern.test(login)===true) {
alert ('Имя домена должно быть больше 2 символов (до 5)'); return false;
return true;
}
if (afterPattern2.test(login)===true) {
alert ('Имя домена должно быть до 5 символов (больше 2)'); return false;
return true;
}
}
