 // 0,1,2,5,5,5,5,5,8,9,
// Все елементы заменить на 5
// let a=[0,1,2,3,4,5,6,7,8,9,];
// for (let i = 3; i<=7; i++){ //Як измепнить номер 'i'
//     a[i] = 5;//  Что делать с каждим елементом 'i' [i]
// }
// document.write(a);
//-----------------------------------------

// Леси решение. 27.03.21
// Задача 1. Дано масив цілих чисел. Кожне від’ємне число замінити на 0.
// let arr = [1, -2, 3, -4, 5]
// arr.forEach((val, i, arr) => {
//     if (arr[i] < 0)
//     arr[i]=0;
// });
// document.write(arr)
//-----------------------------------------
//До кожного елемента, що менший за нуль додати 90
//  let b=[34,2,-5,2,-65]
// b.forEach((val,i,arr)=>{
//         if(val<0)
//         arr[i]+=90
//     })
// document.write(b)
//---------------------------------------------

// Мое решение.
// Задача 2. Дано масив цін. Сформувати новий масив, який містить тільки ті ціни, які менші за задану.

// let prise = [10, 20, 30, 40, 50, 60]
// prise.forEach((val,i,arr)=>{
//      if (val<40)
// document.write(val+'<br>')})
//--------------------------------------------

// Мое решение.
// Задача 3. Дано масив цін товарів. Для цін, які менші за 1000грн.(30грн.) додати 20% (2%)ціни, для тих, які більші за 1000 грн. (30грн.) відняти 30% (3%).
// let price = [10, 20, 30, 40, 50]
// price.forEach((val,i,arr)=>{
//     if (val<30){
//     arr[i]+=val*2
// }
// else{
//     arr[i]-=val*3
// }
// })
// document.write(price)

//---------------------------------------------------

// Мое решение.
// Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.

// let names = ['Natan', 'Milana', 'Anton', 'Nataliya', 'Nadiya']
// let listNames = names.filter((val,i,arr)=>val[0]==='N')
// document.write(listNames)
//------------------------------------------------------

// Мое решение.
// Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).

// let carWeights = [1000, 1500, 2000, 3000, 4000, 5000]
// carWeights.forEach((val,i,arr)=>{if(val<2000)
// document.write(`Легковой: ${val+'<br>'}`)})
//-----------------------------------------

// Мое решение.
// Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня. З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10 .
 
// let numberOfVisitors = [20, 4, 6, 5, 33, 5, 22]
// numberOfVisitors.forEach((val,i,arr)=>{if(val<10)
// document.write(val+ '<br>')})
//---------------------------------------------

// Мое решение. ??????????????????????????
// Задача 7. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».

// let symbol = []
// let userInput = prompt(`ВВедите символ ${i + 1})`);
//????????????????????????????????????????

//------------------------------------------------

// ??????????????????????????????
// Задача 8. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел.

// let b = []
// let userInput = parseFloat(prompt('Введите число'));



// Задача 1. Дано масив цілих чисел. Кожне від’ємне число замінити на 0.
// Задача 2. Дано масив цін. Сформувати новий масив, який містить тільки ті ціни, які менші за задану.
// Задача 3. Дано масив цін товарів. Для цін, які менші за 1000грн. додати 20% ціни, для тих, які більші за 1000 грн. відняти 30%.
// Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.
// Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).
// Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня. З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.
// Задача 7. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».
// Задача 8. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел.
// Задача 9. Розробити функцію, яка би для довільної кількості чисел знаходила максимальне.

//-------------------------------------------

// 1.	Задача. Відсортувати масив імен за останньою літерою.
// 2.	Задача. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20% (помножити на 0.8), а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).
// 3.	Задача. Дано масив років народження працівників. Вивести масив тих, які є призовного віку (менше 25 років).
// 4.	Задача. Дано масив показників гемоглобіну (масив чисел). Сформувати масив тих, які є меншими за 115.
// 5.	Задача. Дано масив цін товарів. Сформувати масив тих, які є меншими за 2000грн.
// 6.	Задача. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.
// 7.	Задача. Дано масив номерів автомобілів. Сформувати масив тих, які починаються на літеру «А» і закінчуються на літеру «Р».
// 8.	Задача. Дано масив літер. Сформувати рядок, який складається тільки з голосних літер.

//--------------------------------------------------

// Мое решение не получилось.
// 1.	Задача. Відсортувати масив імен за останньою літерою.

let names = ['Natan', 'Milana', 'Antona', 'Nataliya', 'Nadiya']
let n=na.filter((val,i,arr)=>{
    // let nam=val.toUpperCase()
    

    return nname[0]===na[na.length - 1 ]
})
document.write(n)


//---------------------------------------------------

// Лесина задача. 
// 1.Відсортувати масив імен за останньою літерою.
// let names = ['Nadia', 'Maria', 'Orest', 'Jessica', 'Don', 'Oleg']
// function compareFunction(firstEl, secondEl){
//     if (firstEl[arr.length+1] > secondEl[arr.length+1]) 
//         return firstEl    
// };
 
// names.sort(compareFunction)
// //----------------------------------------------------

// Задача 3. Дано масив цін товарів. Для цін, які менші за 1000грн. додати 20% ціни, для тих, які більші за 1000 грн. відняти 30%.
 
// let price = [457, 567, 55, 98, 456, 527, 54]
// function modPrice(arr) {
//     let modifiedPrice = price.map((val, i, arr) => {
//         if (val < 1000) {
//              val+(val*0,2)
//         }else{
//             val-(val*0,3)
//         }       
//     })
//     return modifiedPrice 