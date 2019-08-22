Promise란
====
프로미스는 자바스크립트 비동기 처리에 사용되는 객체이다.

```
$.get('url 주소/products/1', function (response) {
  // ...
});
```
위 API가 실행되면 서버에다 요청을 보낸다. 그런데 여기서 데이터를 받아오기도 전에 마치 데이터를 다 받아온 것 마냥 화면에 데이터를 표시하려고 하면 오류가 발생하거나 빈 화면이 뜬다. 이와 같은 문제점을 해결하기 위한 방법 중 하나가 프로미스이다.

Promise 선언부
---

- **Pending(대기)** : 비동기 처리 로직이 아직 완료되지 않은 상태
- **Fulfilled(이행)** : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- **Rejected(실패)** : 비동기 처리가 실패하거나 오류가 발생한 상태

### Pending
new Promise() 메서드를 호출하면 Pending(대기) 상태가 된다.
```
new Promise(funtion(resolve,reject){
    //...
});
```

### Fulfilled
콜백 함수의 인자 resolve를  실행하면 Fulfilled(이행) 상태가 된다.
```
new Promise(function (resolve, reject) {
  resolve();
});
```
그리고 이행 상태가 되면 then()을 이용하여 처리 결과 값을 받을 수 있다.
```
function getData() {
  return new Promise(function (resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function (resolvedData) {
  console.log(resolvedData); // 100
});
```
### Rejected
reject 인자로 reject() 메서드를 실행하면 Rejected(실패) 상태가 된다.
```
new Promise(function (resolve, reject) {
  reject();
});
```
그리고, 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 catch()로 받을 수 있다.
```
function getData() {
  return new Promise(function (resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData().then().catch(function (err) {
  console.log(err); // Error: Request is failed
});
```
![alltext](https://joshua1988.github.io/images/posts/web/javascript/promise.svg)


promise 연결하기
----
```
new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 2000);
})
.then(function(result) {
  console.log(result); // 1
  return result + 10;
})
.then(function(result) {
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  console.log(result); // 31
});
```

첫 번째 .then()에서는 이행된 결과 값 1을 받아서 10을 더한 후 그다음 .then() 으로 넘겨준다. 

두 번째 .then()에서도 마찬가지로 바로 이전 프로미스의 결과 값 11을 받아서 20을 더하고 다음 .then()으로 넘겨준다. 

마지막 .then()에서 최종 결과 값 31을 출력한다.

**then() 메서드를 호출하고 나면 새로운 프로미스 객체가 반환된다.**

promise 에러 처리 방법
---
1. then()의 두 번째 인자로 에러를 처리하는 방법

2. catch()를 이용하는 방법
```
function getData() {
  return new Promise(function (resolve, reject) {
    reject('failed');
  });
}

// 1. then()으로 에러를 처리하는 코드
getData().then(function () {
  // ...
}, function (err) {
  console.log(err);
});

// 2. catch()로 에러를 처리하는 코드
getData().then().catch(function (err) {
  console.log(err);
});
```

**프로미스 에러 처리는 가급적 catch()로**

then
```
// then()의 두 번째 인자로는 감지하지 못하는 오류
function getData() {
  return new Promise(function (resolve, reject) {
    resolve('hi');
  });
}

getData().then(function (result) {
  console.log(result);
  throw new Error("Error in then()"); 
  // Uncaught (in promise) Error: Error in then()
}, function (err) {
  console.log('then error : ', err);
});
```
실행결과:
![alltext](https://joshua1988.github.io/images/posts/web/javascript/then-not-handling-error.png)

catch
```
// catch()로 오류를 감지하는 코드
function getData() {
  return new Promise(function (resolve, reject) {
    resolve('hi');
  });
}

getData().then(function (result) {
  console.log(result); // hi
  throw new Error("Error in then()");
}).catch(function (err) {
  console.log('then error : ', err); // then error :  Error: Error in then()
});
```
실행결과
![alltext](https://joshua1988.github.io/images/posts/web/javascript/catch-handling-error.png)