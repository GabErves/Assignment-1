 // Insert code here;
  //create empty set
  //loop word
  //make variable to store characters
  //if letter in set, increment, else ass
//return object - done

function frequencyCounter(word) {
  var frequency = {};
  for(var i =0; i<word.length; i++){
    let letter = word.charAt(i); //charAt() gets a char at some index
    if(frequency[letter]){
      frequency[letter]++;
    }else{
      frequency[letter]=1;
  }
    return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;
