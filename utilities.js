var utilities = {};

(function(window){

//A function that operates similarly to .forEach. This will iterate and call the 
//callback parameter for each element or property of a list at the interval specified by the n parameter. 
//It will not call callback on values greater than the list’s number of elements.

//http://jsbin.com/hebicu/edit?js,console,output

utilities.by = function(list, n, callback){
  for (var i = 0; i < list.length; i+=n){
    callback(list[i]);
  }
};

//A function that will create an array of all the keys of an object.
  
//http://jsbin.com/homeyeg/edit?js,console,output

utilities.keys = function(object){
  var result = [];
    for (var k in object){
        if (object.hasOwnProperty(k)) 
        result.push(k);
    }
    return console.log(result);
};
  
//A function that will create an array of all the values of an object.

//utilities.values({count: 5, length: 10, total: 16}); // will output: [5, 10, 16]

//http://jsbin.com/sofeqed/edit?js,console,output

utilities.values = function(object){
  var result = [];
  for (var p in object){
    result.push(object[p]);
  }
  return console.log(result);
};

//A function that will create an array of all the keys and values of an object in the 
//order of [key, value, key, value] for as many key/value pairs as exist in the object.

//utilities.pairs({count: 5, length: 10, total: 16}); // will output: ["count", 5, "length", 10, "total", 16]

//http://jsbin.com/coxedix/edit?js,console,output

utilities.pairs = function(object){
  var result1 = [];
  var result2 = [];
  for (var k in object){
        if (object.hasOwnProperty(k)) 
        result1.push(k);
  }
  for (var p in object){
    result2.push(object[p]);
  }
  if (result1.length == result2.length){
    var result3 = [];
    for (var i = 0; i < result1.length; i++){
      result3.push(result1[i], result2[i]);
    }
    return result3;
  }
}  

//A function that returns a randomly re-arranged copy of the elements in its parameter array.

//Example Usage:

//var arr = [1,2,3,4,5];

//utilities.shuffle(arr); // will output something like: [2,4,5,3,1]

//http://jsbin.com/yikime/edit?js,console,output

utilities.shuffle = function(array){
  for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
  
/*
A function that will return the plural of a word depending on the value of the n parameter. 
If n is 1, return the non-plural word (parameter word); otherwise, add an “s” to the plural word. 
If the pluralWord parameter is provided, instead of adding an “s,” it will return the pluralWord.
Example Usage:
utilities.pluralize(1, "lion");     // returns "lion"
utilities.pluralize(2, "lion");     // returns "lions"
utilities.pluralize(5, "lion");     // returns "lions"
utilities.pluralize(0, "lion");     // returns "lions"
utilities.pluralize(1, "lioness");  // returns "lioness"
utilities.pluralize(2, "lioness");  // returns "lionesss"
utilities.pluralize(2, "lioness", "lionesses); // "lionesses"
                    
.pluralize(n, word, pluralWord)
*/

//http://jsbin.com/wusayu/edit?js,console,output  
  
utilities.pluralize = function(n, word, pluralWord){
  pluralWord = pluralWord || 0;
  if (n == 1 && pluralWord === 0){
    return console.log(word);
  }
  else if (n >= 0 && pluralWord === 0){
    return console.log(word + "s");
  }
  else if (n > 1 && pluralWord !== 0){
    return console.log(pluralWord);
  }
}

/*
A function for converting a camelCase string to a dashed string. Camel case presents words 
with no spaces separating them and with each word’s first letter capitalized except the first word, 
which is lower case.
Examples: hotDog, spaceStationComplex, myFirstFunction.
Dashed strings are entirely lowercase, and words are separated by hyphens (-).
Examples: hot-dog, space-station-complex, my-first-function.
.toDash(str)
http://jsbin.com/gerorel/edit?js,console,output
*/

utilities.toDash = function(str){
  return console.log(str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase());
}

//A function for converting a dashed string to a camelCase string.

//http://jsbin.com/direwur/edit?js,console,output

//.toCamel(str)

utilities.toCamel = function(str){
  return str.replace(/\W+(.)/g, function (x, chr) {
    return chr.toUpperCase();
    })
  }

//A function that searches all values of the parameter obj and 
//returns “true” if any are equal to the search parameter. Otherwise has 
//should return “false.”

//http://jsbin.com/kofiquj/edit?js,console,output

//.has(obj, search)

utilities.has = function(obj, search){
  for (var i in obj){
    if (obj[i] === search){
      return true;
      i++;
    }
  }
  return false;
}

//A function that returns a new object by picking all key/value pairs from the parameter obj. 
//The keys that are picked will be determined by the array parameter keys.

//Example Usage:
/*
var data = {
 type: "transformer",
 index: 19,
 siblings: 19,
 access: "full"
};
utilities.pick(data, ["type", "index"]);      // returns {type: "transformer", index: 19};
utilities.pick(data, ["siblings", "index"]);  // returns {siblings: 19, index: 19};
utilities.pick(data, ["access", "animals"]);  // returns {access: "full"};
http://jsbin.com/yorevuv/edit?js,console,output
*/

utilities.pick = function(obj, keys) {
    var result = {};
    for(var p in obj){
      if(keys.indexOf(p) >= 0){
        result[p] = obj[p];
      }
    }
    return result;
}

//A function that will take an array and create a linked list for it, each value assigned to a key, followed by a new nested object.
//The argument arr is supposed to be an array that is passed through. 

utilities.listCreate = function(arr){ 
  let obj = null; 
  for (i = arr.length-1; i >= 0; i--){ 
  obj = { 
    list: arr[i], 
    rest: obj 
    }; 
  } 
return (obj); 
} 
  

//A function that will check an object to see if it has a nested object within it, and will return the name value.  
  
utilities.objHasNested = function(obj){
  let key;
  for (key in obj){
    if (obj[key] == "[object Object]"){
      return key;
    }
  }
}

window.utilities = utilities;

})(window);
