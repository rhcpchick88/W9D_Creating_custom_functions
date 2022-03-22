//named my function mathematics and stated it involves my two variables, integer1 and integer2.
function mathematics(integer1,integer2){
    console.log(((integer1+integer2)*5)); // used BEDMAS to make the function add the two arguments together and multiply by 5.
}
//created my two arguments, this works with any numbers as I have tested it multiple times.

var integer1=8;
var integer2=50;

mathematics(integer1,integer2); 

//named my function 
function length(str1){
    if (str1.length>10){    //used the argument str.length to measure the length of the string
        console.log('This string is more than 10 characters'); //true statement
    } else{
        console.log('This string is 10 characters or less') //false statement
    }
}

var str1='Hallo'; //tested my string lengths and the function itself.

length(str1);

// this one I couldn't get working for some reason 

function startsWith(str2){
    result = str2.toString(str2).startsWith('ph'); //tried filtering out words starting with ph and then logging the result
    console.log(result);
}

var str2 = ['street','tree','photo','lamp','phone'] //created my array
startsWith(str2); //prints out false not sure why