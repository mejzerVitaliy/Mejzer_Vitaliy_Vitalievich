/* In first method i used closing in function,
and i added checking of number, if it less that zero i rewrited adding */
var sum_to_n_a = function (n) {
    let sum = 0;

    function add(num) {
        if (num > 0) {
            sum += num;
            return add(num - 1);
        } else if (num < 0) {
            sum += num;
            return add(num + 1);
        } else if (num = 0) {
            return sum;
        }

        return sum;
    }

    return add(n)
};

/* In second method i used recursion in function, 
and added checking of number */
var sum_to_n_b = function(n) {
    if (n === 0) {
        return 0;
    } else if (n > 0) {
        return n + sum_to_n_b(n - 1); 
    } else {
        return n + sum_to_n_b(n + 1); 
    }
};

/* In third method i used my favorite, but bad optized loop for, 
and also i added checking of number  */
var sum_to_n_c = function(n) {
    let sum = 0;

    if (n === 0) {
        return sum;
    } else if (n > 0) {
        for (let num = 1; num <= n; num++) {
            sum += num;
        }
    } else if (n < 0) {
        for (let num = -1; num >= n; num--) {
            sum += num;
        }
    }

    return sum;
};

console.log('1 method - ', sum_to_n_a(-5));
console.log('2 method - ', sum_to_n_b(-5));
console.log('3 method - ', sum_to_n_c(-5));
