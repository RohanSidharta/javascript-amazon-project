import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite: formatCurrency');

console.log('converts cents into dollars');

if(formatCurrency(2095) === '20.95'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('works wiith 0');

if(formatCurrency(0)==='0.00'){
    console.log('passed');

}else{
    console.log('failed');
}

console.log('rounds up to the nearest cent');

if(formatCurrency(2000.4)=== '20.00'){
    console.log('passed');

}else{
    console.log('failed');
}

//automated test will enable to retest our code efficiently without doing anyhting even if we made changes in the code
//above are the tes cases which are testing the formatcurrency function if it works in every situation or not
//even if we change formatcurrency in future we can just run this file and findout what can it do like if it oasses or fails in the tests 
//this method we are using is called automated testing where we use code to test the code