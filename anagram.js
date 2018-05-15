/*Anagram Program in Javascript
Author : Ibe Ogele
For : NodeJS_Class
*/
function wordsAnagram(firstWord, secondWord) {
    var firstWordArray=[];
    var secondWordArray=[];
    if (typeof(firstWord)=="string" && typeof(secondWord)=="string"){
        if (firstWord.length == secondWord.length){
           //Their lengths are the same, we can now proceed
            firstWordArray = firstWord.toLowerCase().split('').sort(); //convert the word into an array of letters and sort
            secondWordArray = secondWord.toLowerCase().split('').sort(); //convert the word into an array of letters and sort
            //convert to string before comparing the strings
            if (firstWordArray.join() == secondWordArray.join()){
                console.log("true");
            } else {
                console.log("false");
            }
        } else{
            console.log("the words must be of the same length");
        }
    } else {
        console.log("invalid input, only strings are allowed");
    }
}
//test case 1, this should be true
wordsAnagram("kate","take");
//test case 2, this should be true
wordsAnagram("jab","bag");