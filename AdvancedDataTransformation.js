
const addValues = (value1, value2) => {
    // function to add numbers in different data types
    let result = 0
    try {
        result = +(value1) + +(value2)
        // if(isNaN(result)){
        //     console.log("here")
        //     try{
        //         console.log("tu")
        //         result = parseInt(value1) + parseInt(value2)
        //         console.log(parseInt(value1))
        //         console.log("result: " + result)
        //         return result
        //     }
        //     catch (err) {
        //         console.log("error in first")
        //     }
        // }
        return result
    }
    catch (err) {
        try{
            result = parseInt(value1) + parseInt(value2)
            return result
        }
        catch(err) 
        {
            console.log("error2: typeof1: "+ typeof value1 + "; typeof2: " + typeof value2)
        }
        console.log("error: typeof1: " + typeof value1 + "; typeof2: " + typeof value2)
    }

}

const invertBoolean = (value) => {
    // function that checks if value is boolean and returns its inverted value
    if(typeof value === 'boolean'){
        return !value;
    }
    throw new Error ('Invalid boolean value');
}

const stringifyValue = (value) => {
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
        }
    }
    catch(err) {
        throw new Error ("This data type cannot be converted to string")
    }
    
}

const convertToNumber = (value) => {
    //funtion that converts an argument to a number if possible
    result = 0
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
        //throw new Error("Argument cannot be represented as a number")
        console.log("error -----------------------------------------------------")
    }
    if(isNaN(result))
    {
        //throw new Error("Argument cannot be represented as a number")
        console.log("error -----------------------------------------------")
    }
    return result
    
}

const coerceToType = (value, type) => {

}
value = 123
symbol = Symbol("foo")
bignumber = BigInt(90073423234324)
const anarray = [1,5,6]
// console.log(typeof anarray)
//console.log(invertBoolean(0))
//console.log((typeof(false)))
// console.log(false.toString())   // boolean
// console.log(value.toString()) // number
//console.log(typeof(BigInt(900719925474099164737821478432943900491309841089403939045874423423234423)))    // bigint
// console.log(bignumber.toString())    // bigint
// console.log(undefined.toString()) // undefined
// console.log(null.toString()) // null
// console.log(symbol.toString()) // string
// console.log(typeof([1,3,4]))
// console.log(typeof(invertBoolean))
// console.log(typeof(anarray))

/////////////////////////////////////

// console.log(stringifyValue(false))
// console.log(stringifyValue(345))
// console.log(stringifyValue("goer"))
// console.log(stringifyValue(bignumber))
// console.log(stringifyValue(undefined))
// console.log(stringifyValue(null))
// console.log(stringifyValue(symbol))
// console.log(stringifyValue(anarray))
// console.log(stringifyValue(invertBoolean))

/////////////////////////////////////

// console.log(addValues(1,2)) // number number
// console.log(addValues(1,"2"))   // number string
// console.log(addValues("2",1))   // string number
// console.log(addValues("2","3"))   // string number
// console.log(addValues(false,1))   // boolean number
// console.log(addValues("2",true)) // string boolean
// console.log(addValues(true,false))   // boolean boolean
// console.log(addValues(false,false))   // boolean boolean
// console.log(addValues(true,true))   // boolean boolean
// console.log(addValues(undefined,1))   // undefined number --- NaN
// console.log(addValues(0,null))   // number null

// console.log(addValues(BigInt(1200),12))   // bigint number
// console.log(addValues(BigInt(20),BigInt(31)))   // bigint bigint
// console.log(addValues(Symbol("2"),2))   // symbol number
// console.log(addValues("2.56","3.34"))   // stringfloat stringfloat

// console.log(addValues(2.22,3.33))   // numberfloat numberfloat   --- jest zle
// console.log(addValues(2.22,"3.33"))   // numberfloat stringfloat
// console.log(addValues("2.22","3.33"))   // numberfloat stringfloat
// console.log(addValues("2.22",3.33))   // numberfloat stringfloat

// console.log(addValues(1.2,"a"))
// console.log(addValues("b","a"))
// console.log(addValues("b",false))
// console.log(addValues("",null))


// console.log(parseFloat(1)+parseFloat(false))
// console.log((parseFloat(1)+parseFloat(false) == NaN))
// console.log(typeof NaN)
// console.log(typeof (parseFloat(1)+parseFloat(false)))

// console.log((addValues("2",true)))
// console.log(isNaN(addValues("2",true)))

// console.log(parseInt(false))
// console.log(parseInt("123"))
// console.log(parseInt("123abc"))
// console.log(parseInt("abc"))
// console.log(parseInt("123.123"))
// console.log(parseInt("1a2d3"))
// console.log(parseInt("adf3"))

// console.log(parseFloat("123"))
// console.log(parseFloat("123abc"))
// console.log(parseFloat("abc"))
// console.log(parseFloat("123.123"))
// console.log(parseFloat("1a2d3"))
// console.log(parseFloat("adf3"))

// console.log(+("123"))
// console.log(+("123abc"))
// console.log(+("abc"))
// console.log(+("123.123"))
// console.log(+("1a2d3"))
// console.log(+("adf3"))

/////////////////////////////////////////

console.log(convertToNumber(1))
console.log(convertToNumber(1.8))
console.log(convertToNumber("1.8"))
console.log(convertToNumber("4"))
console.log(convertToNumber(true))
console.log(convertToNumber("true"))
console.log(convertToNumber(BigInt(1230)))
console.log(convertToNumber(-5))
console.log(convertToNumber(-5.5))
console.log(convertToNumber("-5.5"))
console.log(convertToNumber("-3"))
console.log(convertToNumber("234abv"))
console.log(convertToNumber("abv234"))
console.log(convertToNumber(Symbol("1")))
console.log("ugabuga")
console.log(convertToNumber())
