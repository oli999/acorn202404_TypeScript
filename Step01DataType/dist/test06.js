"use strict";
// test06.ts
/*
    [ function type ]

    함수 만드는 방법

    function 함수명(매개변수명:type, 매개변수명2:type, ... ):리턴type{
    
    }

*/
(function () {
    // number type 2 개를 전달 받아서 number type 을 리턴해주는 함수 
    function sum(num1, num2) {
        return num1 + num2;
    }
    // string type 1 개를 전달 받고 어떤 데이터도 리턴해주지 않는 함수 
    function printMsg(msg) {
        console.log(msg);
    }
    // return type 을 명시 하지 않으면 return type 을 infer 한다 
    function getMsg() {
        return "hello";
    }
    // result 는 string type 으로 infer 된다 
    let result = getMsg();
    //다른 type 대입 불가
    //result = 10
})();
