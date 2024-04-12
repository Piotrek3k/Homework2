const AdvancedDataTransformation = {
    addValues: function (value1, value2) {
    // function to add arguments having different data types
    const type = typeof value1
    const result = this.convertToNumber(value1) + this.convertToNumber(value2)  // function converts both arguments to numbers and adds them if possible
    try{
        return this.coerceToType(result, type)   // in the end, result is converted to type of the first value if possible
    }
    catch(err){
        return result // if converting back to type of the first value is not possible, function returns result as a number  
    }   
    
    },

    invertBoolean: function (value) {
    // function that checks if value is boolean and returns its inverted value
    if(typeof value === 'boolean'){
        return !value;
    }
    throw new Error ('Invalid boolean value');
    },

    stringifyValue: function (value) {
    // function that returns the stringified value of the given parameter
    try{
        switch(typeof value){
            case 'boolean':
                return value.toString();
            case 'number':
                return value.toString();
            case 'string': 
                return value;
            case 'bigint':
                return value.toString();
            case 'undefined':
                return "undefined";
            case 'null': 
                return "null";
            case "symbol":
                return value.toString();
            case "object":
                return JSON.stringify(value);
            case "date":
                return value.toString();
        }
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
        switch (typeof type) {
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

    concatValues: function (value1,value2) {
    // additional function to concat values as strings
    const type = typeof value1
    const result = this.stringifyValue(value1).concat(this.stringifyValue(value2))
    try{
        return this.coerceToType(result, type)   // in the end, result is converted to type of the first value if possible
    }
    catch(err){
        return result // if converting back to type of the first value is not possible, function returns result as a string  
    } 
},
}

console.log(AdvancedDataTransformation.addValues(213,"123"))
console.log(AdvancedDataTransformation.concatValues(213,"123"))
console.log(AdvancedDataTransformation.invertBoolean(true))