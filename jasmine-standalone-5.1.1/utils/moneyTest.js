import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', ()=>{              //this will create a test case name called test suite format currency
    it('converts cents into dollars', ()=>{                   //it is a function provided by jasmine 
        expect(formatCurrency(2095)).toEqual('20.95');         //expect is a function provided by jasmine which works like if else statement, .toEqual method compares the result with whatever we provide in it
    });

    it('works with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the nearest cent',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
})      //we can use describe inside another describe to further orgaanize the testing process