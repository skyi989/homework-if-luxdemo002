// 請介紹兩個字串方法跟數字方法
//字串方法1
let text1 = '123'
let text2 = '456'

console.log(text1.concat('', text2))//合併兩個字串

//字串方法2
let text3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   0,1,2,3,4,5,6,7,8
console.log(text3.slice(2, 7))//從字串中截取一個段落slice(開始,結束)

//數字用法1
let num = 1234//轉換數字的進制

console.log(num.toString(2))//二進制
console.log(num.toString(8))//八進制
console.log(num.toString(10))//十進制
console.log(num.toString(16))//十六進制

//數字用法2

2 ** 2
let x = 2
x **= 4
console.log(Math.pow(2, 4))//輸出指數 2的4次方

2 ** 2
let y = 2
y **= 2
console.log(Math.pow(2, 5))//輸出指數 2的5次方

3 ** 3
let z = 3
z **= 3
console.log(Math.pow(3, 3))//輸出指數 3的3次方

// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money > 500) {

    console.log('乾爹')
}
else {

    console.log('廢物')
}