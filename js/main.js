/**
 
 aden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

**/

//P.R.E.P Parameter, Return, Example, Pseudo code

//P - A string will be given

//R - Return to the console

//E - "How can mirrors be real if our eyes aren't real" = "How Can Mirrors Be Real If Our Eyes Aren't Real"

    function toJadenCase (sentence) {
    //Pseudo - split the string at the space
        let splitUp = sentence.split(" ")
    //loop through each element of the NOW array and capitalize the first letter
        for (let i = 0; i < splitUp.length; i++){
            splitUp[i] = splitUp[i].charAt(0).toUpperCase() + splitUp[i].slice(1)
        }
        //Join all the elements of the array back into a string
        let backTogether = splitUp.join(" ")
        console.log(backTogether)

  }

  toJadenCase("split up this sentence")