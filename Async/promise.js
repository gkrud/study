const f3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

const work3=()=>{
    let a;
    f3()
    .then((a)=>{
        console.log(a);
    });
}

work3();