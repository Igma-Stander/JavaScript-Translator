let dictionary = new Map();

//used afrikaaans as language
dictionary.set("bread", "brood");
dictionary.set("juice", "sap");
dictionary.set("cheese", "kaas");
dictionary.set("dog", "hond");
dictionary.set("cat", "kat");
dictionary.set("grapes", "druiwe");
dictionary.set("school", "skool");
dictionary.set("month", "maand");
dictionary.set("garden", "tuin");
dictionary.set("fan", "waaier");

//inserted error response
while (true) {
  let word = prompt("What word would you like to translate?");
  if (dictionary.has(word)) {
    alert(`Your answer is: ${dictionary.get(word)}`);
  } else {
    alert("Sorry your word is not available.");
  }
  break;
  /*wanted to prompt if the user wanted to continue and then translate word again and if the user said no then break the while loop,
  but doesn't want me to declare another variable in this location. Any tips?*/
}
