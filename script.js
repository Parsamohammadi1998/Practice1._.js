const array =[1, 7, 8, 4, 3, 6, 9];
let zoj = 0;
let fard = 0;

const oddEven = (numList) => {
    for (let el of numList){
        el % 2===0 ? zoj++ : fard++;
    }
};

GoddEven(array);
console.log("zoj", zoj);
console.log("fard", fard);
