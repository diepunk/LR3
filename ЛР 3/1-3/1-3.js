//Индивидуальное задание 1
var x,y;
x = prompt('Введите певрое число?');
x = parseInt(x);
y = prompt('Введите второе число?');
if (x > y) {
    alert("Наибольшее = "+ x)
} else {
    alert("Наибольшее = "+ y)
}
//Индивидуальное задание 2
var admin, name=('Тимур');
admin=name;
alert("admin "+ admin)
//Индивидуальное задание 3
do {
    var age = prompt('Сколько вам лет?','Введите ваш возраст сюда');
} while(!confirm("Вы уверены что вам "+ age +"?"))