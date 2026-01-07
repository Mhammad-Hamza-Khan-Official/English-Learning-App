// console.log("Hellow");

const StrToArrSpliter = (arr) => {
  return arr.map((parameters) => {
    return parameters.split(" ");
  });
};

const PerfectSentences = [
//    //  Present Perfect
  "I have finished my homework.",
  "She has completed the task.",
  "They have visited Lahore.",
  "We have learned JavaScript.",
  "He has written a letter.",

  //  Past Perfect
  "I had finished my homework before dinner.",
  "She had left the office early.",
  "They had completed the project on time.",
  "We had seen the movie already.",
  "He had gone to the market.",

  //  Future Perfect
  "I will have finished my homework by 8 PM.",
  "She will have completed the course next month.",
  "They will have arrived by tomorrow.",
  "We will have learned React by next year.",
  "He will have written the report before Monday."
];

const ContinuousSentences = [
  //  Present Continuous
  "I am studying English.",
  "She is watching TV.",
  "They are playing cricket.",
  "We are learning JavaScript.",
  "He is working in the office.",

  //  Past Continuous
  "I was reading a book.",
  "She was cooking dinner.",
  "They were sleeping at night.",
  "We were watching a movie.",
  "He was writing a letter.",

  //  Future Continuous
  "I will be studying tomorrow.",
  "She will be working at 9 AM.",
  "They will be traveling next week.",
  "We will be waiting for you.",
  "He will be playing football."
];





function CheckWhichTense(str) {
  const Sentence = str.split(" ");

  const RemoveCommas = (arr) => arr.toString().replaceAll(",", " ");
  
  function CheckPerfectTense(){
    /* ================= PRESENT PERFECT ================= */
    const PresentPerfect = () => {
      const haveIdx = Sentence.findIndex((word) =>
        ["have", "have.", "has", "has."].includes(word)
      );
  
      const containWillORHad = Sentence.some((word) =>
        ["will", "will.", "had", "had."].includes(word)
      );
  
      if (haveIdx === -1 || containWillORHad) return [false, Sentence];
  
      const nextWord = Sentence[haveIdx + 1];
      const stopWords = ["a", "an", "the", "my", "your"];
  
      if (!nextWord || stopWords.includes(nextWord)) {
        return [false, Sentence];
      }
  
      const sentenceStr = RemoveCommas(Sentence);
  
      if (sentenceStr.endsWith("has.") || sentenceStr.endsWith("have.")) {
        return [false, Sentence];
      }
  
      return [true, Sentence];
    };
  
    /* ================= PAST PERFECT ================= */
    const PastPerfect = () => {
      const hadIdx = Sentence.findIndex((word) => ["had", "had."].includes(word));
      const containHad = Sentence.some((word => ["had", "had."].includes(word)))
      const string = RemoveCommas(Sentence)
  
      if (hadIdx === -1) return [false, Sentence];
  
  
      if (!string.endsWith("had.") && containHad) {
        return [true, Sentence];
      }
  
      return [false, Sentence];
    };
  
    /* ================= FUTURE PERFECT ================= */
    const FuturePerfect = () => {
      const willIdx = Sentence.findIndex((word) => word === "will");
  
      if (willIdx === -1) return [false, Sentence];
  
      const nextWord = Sentence[willIdx + 1];
  
      if (nextWord === "have") {
        return [true, Sentence];
      }else{
        return [false, Sentence];
      }
  
    };
  
    /* ================= FINAL CHECK ================= */
  const present = PresentPerfect();
  const past = PastPerfect();
  const future = FuturePerfect();
  
  if (present[0]) {
    console.log("This is Present Perfect Tense");
    console.log(RemoveCommas(present[1]));
    return true;
  
  } else if (past[0]) {
    console.log("This is Past Perfect Tense");
    console.log(RemoveCommas(past[1]));
    return true;
  
  } else if (future[0]) {
    console.log("This is Future Perfect Tense");
    console.log(RemoveCommas(future[1]));
    return true;
  
  } else {
    console.log("This is not a Perfect Tense");
    return false
  }
  }
  
  function CheckContinuousTense() {
    // ======================Present===================
    const Present = () => {
      const IsAmAreIdx = Sentence.findIndex((word) => 
        ["is" , "am" , "are"].includes(word)
      )

      if (IsAmAreIdx === -1) return false;

      const nextWord = Sentence[IsAmAreIdx + 1];

      if (nextWord.endsWith("ing")) {
        console.log(nextWord);
        return true
      }else{
        return false
      }
      
    }

    // ========================Past=================
    const Past =() => {

      const wasWereIdx = Sentence.findIndex((word) => ["was"||"were"].includes(word))

      if(wasWereIdx == -1) return false;
      const nextWord = Sentence[wasWereIdx + 1]
      if (nextWord.endsWith("ing")) {
        return true
      }else{
        return false;
      }

    }
    // ======================Future================
     const Future =() => {

      const willIdx = Sentence.findIndex((word) => ["will"].includes(word))

      if(willIdx == -1) return false;
      const nextWord = Sentence[wasWereIdx + 1]
      if (nextWord == "be") {
        return true
      }else{
        return false;
      }

    }
    // =====================Final Check================
    if(Present()){
      console.log("This is Present Continuous Sentence")
    }else if(Past()) {
      console.log("This is Past Continuous Sentence")
    }else if(Future()) {
      console.log("This is Future Continuous Sentence")

    }else{
      console.log("This is NOT Continuous Sentence")

    }
  }
  
  CheckContinuousTense()
  console.log(`CheckPerfectTense : ${CheckPerfectTense()}`)


}

CheckWhichTense(ContinuousSentences[0]);

// function StartRecognition() {
//   //---SpeechRecognition
//   const recognition = new SpeechRecognition();
//   recognition.lang = "en-US"; // language
//   recognition.interimResults = false; // Get final result only
//   recognition.maxAlternatives = 1; // best match only

//   recognition.start();

//   recognition.onresult = (event) => {
//     // const speechText = event.results[0][0].transcript.trim();
//     const SpokenText = event.results[0][0].transcript;
//     console.log("Recognized :", SpokenText);
//   };

//   recognition.onend = () => {
//     console.log("Voice recognition stopped");
//   };

//   recognition.onerror = (event) => {
//     console.error("Error:", event.error);
//   };
//   // =========================================================
// }

// function findSubject(sentence) {
//   const words = sentence
//     .replace(/[?.!]/g, "") // 1
//     .split(" ");           // 2

//   const verbIndex = words.findIndex(word =>
//     /^[a-zA-Z]+(s|es)?$/.test(word) && word.length > 2 // 3
//   );

//   if (verbIndex === -1) return "unknown"; // 4

//   return words.slice(0, verbIndex).join(" "); // 5
// }

// console.log(findSubject("I play football."));


