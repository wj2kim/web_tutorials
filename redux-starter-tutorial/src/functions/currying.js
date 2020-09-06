function add(a, b) {
    return function(b){
        return a + b 
    }
}

const add2 = a => b => a + b; // (a, b) => a + b 

const add1 = add(1);
add(1)(5); // add(1,5);

// currying 은 

// N => 1 함축 