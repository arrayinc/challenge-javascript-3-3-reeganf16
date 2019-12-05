// *** YOUR ANSWER BELOW ***

function divisibleBy(x,y){
    for(let i = 100; i > 0; i--) {
        if ((i % x === 0) && (i % y !==0)){
            console.log(i);
        }
        if ((i % y === 0) && (i % x !== 0)) {
            console.log(i);
        }
    }
}

(divisibleBy(6,7));