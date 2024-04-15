const AdvancedDataTransformation = {
    addValues: function (value1, value2) {
    // function to add arguments having different data types
    // checking for NaN
    if(typeof value1 !== 'bigint' || typeof value2 !== 'bigint'){
        if(isNaN(value1) || isNaN(value2)){
            throw new Error ("Invalid value")
        }
    } 
    // checking if both values are the same type
    if(typeof value1 === typeof value2){
        try{ 
            switch(typeof value1){ // adding numberical values in both types and converting the result to a previous type          
            case 'number':
                return value1 + value2
            case 'string':
                return this.stringifyValue(this.convertToNumber(value1)+this.convertToNumber(value2)) 
            case 'boolean':
                return this.coerceToType(this.convertToNumber(value1)+this.convertToNumber(value2),'boolean')         
            case 'bigint': 
                return value1 + value2             
        }}
        catch (err){
            throw new Error("Function does not support addition of these values")
        }
    }
    else {
        throw new Error("Values have different types")
    }
    // if(typeof(result)!=='bigint' && isNaN(result)){  // checking for NaN
    //     throw new Error("Addition of these values results in NaN")
    // }
    //     return result
    },

    invertBoolean: function (value) {
    // function that checks if value is boolean and returns its inverted value
    if(typeof value === 'boolean'){
        return !value;
    }
    throw new Error ('Invalid boolean value');
    },

    stringifyValue: function (value) {
    // function that returns the stringified value of the given argument
    if(typeof value === 'object'){
        return JSON.stringify(value)
    }
    try{
        return value.toString()
    }
    catch(err) {
        throw new Error ("This data type cannot be converted to string")
    }
    },

    convertToNumber: function (value) {
    //funtion that converts an argument to a number if possible
    result = 0
    if(typeof value === 'date'){
        return Date.parse(value)
    }
    try{    // first the function checks if the argument has the string or bigint type because the unary plus operator doesn't deal well with those two, parseFloat is better here
        if(typeof value === 'string' || typeof value === 'bigint'){
            result = parseFloat(value);
        }
        else{// in other situations the function use the unary plus operator 
           result = +value
        }
    }
    catch (err)
    {
        throw new Error("Argument cannot be represented as a number")
    }
    if(isNaN(result))   // if the argument is NaN the error is thrown
    {
        throw new Error("Argument cannot be represented as a number")
    }
    return result
    },

    coerceToType: function (value, type) {
    // function that converts given value to a given type
    try{
        switch (type) {
            case 'string':
                return this.stringifyValue(value)
            case 'number':
                return this.convertToNumber(value)
            case 'boolean':
                return Boolean(value)
            case 'symbol':
                return Symbol(value)
            case 'bigint':
                return BigInt(value)
            case 'date':
                return new Date(value)
        }
    }
    catch(err){
        throw new Error("argument cannot be converted into given type")
    }   
    throw new Error("argument cannot be converted into given type")
},
}

console.log(AdvancedDataTransformation.addValues(2,3))
console.log(AdvancedDataTransformation.addValues("23.12","13.12"))
console.log(AdvancedDataTransformation.addValues(false,true))
console.log(AdvancedDataTransformation.addValues(BigInt(123),BigInt(123)))
// console.log(AdvancedDataTransformation.addValues("213",123))
console.log(AdvancedDataTransformation.addValues(NaN,4))
//console.log(BigInt(NaN))
// // console.log(isNaN("123adc"))
// // console.log(parseInt("123abc312"))
// console.log(1/0)
//console.log(AdvancedDataTransformation.addValues([1,2,3],[1,2,3]))
console.log(isNaN([1,2,3]))