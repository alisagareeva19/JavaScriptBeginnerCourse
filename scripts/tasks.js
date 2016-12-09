// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):

var usersData = [
    { 'user' : 'Bob', 'password' : 'MyNameIsBob' },
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
    { 'user' : 'Drake' , 'password' : 'MyNameIsDrake'}
];

function getFieldValues (abc, svoistvo) {
    var q;
    var otvet = [];
    var i;
    for (i = 0; i < 2; i++) {
        if (abc[i][svoistvo] > abc[i+1][svoistvo]) {
            q = abc[i][svoistvo];
            abc[i][svoistvo] = abc[i+1][svoistvo];
            abc[i+1][svoistvo] = q;
        }
    }
    for (i = 0; i < 3; i++) {
        otvet.push(abc[i][svoistvo]);
    }
    return otvet;
}

console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x) {
    if (x % 2 == 0) {
        return x;
    }
}
console.log(numbers.filter(isEven)); // --> [2, 8, 34]

// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках

var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
function findSimilarWords(s1, s2) {
    var r = s1.split(' ');
    var result = [];
    r.forEach(function(elem)
              {
        var a = s2.match(elem);
        if (a != null)
            {
                result.push(a[0]);
            }
    });
    
    return result;
}
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];

// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:

//var IpAddress = '10.223.98.2';
//var subnetMask = 28;
//console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); 
// Broadcast - 10.223.98.15, Network - 10.223.98.0

// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];

function makeItClean (mArray) {
    var messArray2 = [];
    var netPovtora = true;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < mArray[i].length; j++) {
            netPovtora = true;
            for (var l = 0; l < messArray2.length; l++) {
                if (messArray2[l] == mArray[i][j]) {
                    netPovtora = false;
                }
            }
           if (netPovtora) {
              messArray2.push(mArray[i][j]); 
           } 
        }
    }
 return messArray2;    
}
console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, undefined, true];