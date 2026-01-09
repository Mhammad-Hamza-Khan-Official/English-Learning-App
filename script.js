// console.log("Hellow");

const StrToArrSpliter = (arr) => {
  return arr.map((parameters) => {
    return parameters.split(" ");
  });
};

const Perfect = [
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
  "He will have written the report before Monday.",
];

const Continuous = [
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
  "He will be playing football.",
];

const PerfectContinuous = [
  // 🔹 Present Perfect Continuous
  "I have been studying for two hours.",
  "She has been working here since 2022.",
  "They have been playing cricket all day.",
  "We have been learning JavaScript.",
  "He has been writing a letter.",

  // 🔹 Past Perfect Continuous
  "I had been studying before the exam started.",
  "She had been waiting for an hour.",
  "They had been working all night.",
  "We had been watching TV before dinner.",
  "He had been reading a book.",

  // 🔹 Future Perfect Continuous
  "I will have been studying for three hours by 8 PM.",
  "She will have been working here for five years.",
  "They will have been traveling all day.",
  "We will have been waiting since morning.",
  "He will have been playing football by evening.",
];

const Indefinite = [
  // 🔹 Present Indefinite (3rd person singular)
  "The girl sings a song.",
  "My father works in an office.",
  "Ali plays cricket every day.",
  "The teacher teaches English.",
  "Which boy runs very fast?",
  "That man drives a bus.",
  "The child likes milk.",
  "Sara writes a letter.",

  // 🔹 Present Indefinite (1st / 2nd / plural)
  "I play football daily.",
  "We study in this school.",
  "You speak English well.",
  "They live in Lahore.",

  // 🔹 Past Indefinite
  "The girl sang a song.",
  "My father worked late yesterday.",
  "Ali played cricket last night.",
  "The teacher taught us grammar.",
  "They went to the market.",
  "I watched a movie.",

  // 🔹 Future Indefinite
  "The girl will sing a song.",
  "My father will go to the office.",
  "Ali will play cricket tomorrow.",
  "The teacher will explain the lesson.",
  "Which boy will win the race?",
  "They will visit Karachi.",
];

function CheckWhichTense(string) {
  const str = string.toLowerCase();
  const Sentence = str.split(" ");

  const RemoveCommas = (arr) => arr.toString().replaceAll(",", " ");

  // ------------------------------------------------------------
  // ====================Continuous=============
  const CheckContinuousTense = () => {
    const Present = () => {
      const IsAmAreIdx = Sentence.findIndex((word) =>
        ["is", "am", "are"].includes(word)
      );
      if (IsAmAreIdx === -1) return false;
      const nextWord = Sentence[IsAmAreIdx + 1];
      return nextWord.endsWith("ing");
    };

    const Past = () => {
      const wasWereIdx = Sentence.findIndex((word) =>
        ["was", "were"].includes(word)
      );
      if (wasWereIdx == -1) return false;
      const nextWord = Sentence[wasWereIdx + 1];
      return nextWord.endsWith("ing");
    };

    const Future = () => {
      const willIdx = Sentence.findIndex((word) => ["will"].includes(word));
      if (willIdx == -1) return false;
      const nextWord = Sentence[willIdx + 1];
      const Verb = Sentence[willIdx + 2];
      return nextWord === "be" && Verb.endsWith("ing");
    };

    if (Present()) console.log("This is Present Continuous Sentence");
    else if (Past()) console.log("This is Past Continuous Sentence");
    else if (Future()) console.log("This is Future Continuous Sentence");
    else console.log("This is NOT Continuous Sentence");
  };
  // -----------------------------------------------------------
  // =========================Perfect Continuous===============
  const CheckPerfectContinuousTense = () => {
    const Present = () => {
      const haveIdx = Sentence.findIndex((word) =>
        ["has", "have"].includes(word)
      );
      if (haveIdx === -1) {
        return false;
      }
      const nextWord = Sentence[haveIdx + 1];
      const previousWord = Sentence[haveIdx - 1];
      const Verb = Sentence[haveIdx + 2];
      console.log(nextWord);
      console.log(previousWord);
      console.log(Verb);

      if (
        nextWord === "been" &&
        Verb.endsWith("ing") &&
        previousWord !== "will"
      ) {
        return true;
      }
    };

    const Past = () => {
      const hadIdx = Sentence.findIndex((word) => ["had"].includes(word));
      if (hadIdx === -1) return false;
      const nextWord = Sentence[hadIdx + 1];
      const Verb = Sentence[hadIdx + 2];
      if (nextWord === "been" && Verb.endsWith("ing")) {
        return true;
      }
    };

    const Future = () => {
      const willIdx = Sentence.findIndex((word) => ["will"].includes(word));
      if (willIdx === -1) return false;

      const nextWord = Sentence[willIdx + 1];
      const Verb = Sentence[willIdx + 3];
      console.log(nextWord);
      console.log(Verb);

      if (nextWord === "have" && Verb.endsWith("ing")) {
        return true;
      }
    };

    if (Present()) console.log("This is Present Perfect Continuous Sentence");
    else if (Past()) console.log("This is Past Perfect Continuous Sentence");
    else if (Future())
      console.log("This is Future Perfect Continuous Sentence");
    else console.log("This is NOT Perfect Continuous Sentence");
  };
  // ------------------------------------------------------------
  // =========================Peerfect===========
  const CheckPerfectTense = () => {
    const PresentPerfect = () => {
      const haveIdx = Sentence.findIndex((word) =>
        ["have", "has"].includes(word)
      );
      if (haveIdx === -1) return [false, Sentence];
      const nextWord = Sentence[haveIdx + 1];
      if (!nextWord || nextWord === "been") return [false, Sentence]; // skip Perfect Continuous
      const sentenceStr = RemoveCommas(Sentence);
      if (sentenceStr.endsWith("have.") || sentenceStr.endsWith("has."))
        return [false, Sentence];
      return [true, Sentence];
    };

    const PastPerfect = () => {
      const hadIdx = Sentence.findIndex((word) => ["had"].includes(word));
      if (hadIdx === -1) return [false, Sentence];
      const nextWord = Sentence[hadIdx + 1];
      if (nextWord === "been") return [false, Sentence]; // skip Perfect Continuous
      return [true, Sentence];
    };

    const FuturePerfect = () => {
      const willIdx = Sentence.findIndex((word) => word === "will");
      if (willIdx === -1) {
        return [false, Sentence];
      }
      const nextWord = Sentence[willIdx + 1];
      const Verb = Sentence[willIdx + 2];
      if (nextWord === "have" && Verb !== "been") return [true, Sentence];
      return [false, Sentence];
    };

    const present = PresentPerfect();
    const past = PastPerfect();
    const future = FuturePerfect();

    if (present[0])
      console.log("This is Present Perfect Tense", RemoveCommas(present[1]));
    else if (past[0])
      console.log("This is Past Perfect Tense", RemoveCommas(past[1]));
    else if (future[0])
      console.log("This is Future Perfect Tense", RemoveCommas(future[1]));
    else console.log("This is not a Perfect Tense");
  };
  // --------------------------------------------------------------
  // ========================Indefinite==============================
  const CheckIndefiniteTense = () => {
    const present = () => {
      const AuxiliaryVerbs = [
        "is",
        "am",
        "are",
        "has",
        "have",
        "had",
        "was",
        "were",
      ];
      const Verb = nlp(RemoveCommas(Sentence)).verbs().out();
      const VerbIndex = Sentence.findIndex((word) => word.includes(Verb));

      const Noun = nlp(RemoveCommas(Sentence.slice(0,VerbIndex))).nouns().out().split(" ");

      const isSingularNoun = Noun.some((noun) => !noun.endsWith("s") && !noun.endsWith("es"))
      const isPluralNoun = Noun.some((word) => {
        return word.endsWith("s") || word.endsWith("es")
      })

      const isSingularVerb = !(Verb.endsWith("s") || Verb.endsWith("es"))
      const isPluralVerb = (Verb.endsWith("s") || Verb.endsWith("es"))

      const containAuxiliary = Sentence.some((word) =>
        AuxiliaryVerbs.includes(word)
      );

      if (containAuxiliary) {
        return false;
      }
      const FirstSecondper = ["i", "we", "they", "you"];


      if (VerbIndex == -1) return false;

      let beforeVerbWords = Sentence.slice(0,VerbIndex)

      const SubjectThirdPerPlu = beforeVerbWords.some((word) =>
        word.endsWith("s") || word.endsWith("es")
      );

      const ThirdPerSingSub = beforeVerbWords.some((word) =>
        isSingularNoun
      );

      console.log("ThirdPerSingSub :",ThirdPerSingSub);
      console.log("isSingularNoun :",isSingularNoun);
      console.log("isPluralNoun :",isPluralNoun);
      

      console.log("isSingularVerb :",isSingularVerb);
      console.log("isPluralVerb :",isPluralVerb);
      
      const SubjectFirstSecondper = FirstSecondper.some((word) =>
        beforeVerbWords.includes(word)
      );



      console.log("Verbs: ",Verb);
      console.log("Nouns: ",Noun)
      console.log("Sentence: ",Sentence)

      if (SubjectThirdPerPlu && isSingularVerb) {
        console.log("SubjectThirdPerPlu && isSingularVerb");
        return true;
      } else if (
        SubjectFirstSecondper && isSingularVerb
      ) {
        console.log("SubjectFirstSecondper && isSingularVerb");
        return true;
      } else if (isPluralNoun && isSingularVerb ){
          console.log("isPluralNoun && isSingularVerb");
          return true
      } else if (isSingularNoun && isPluralVerb ) {
        return true;
      }else{
        return false;
      }

    };

    if(present()){
      console.log("This is Indefinite present");
    }else if (!present()){
      console.log("This is not Indefinite present");

    }
  };
  // =====================Invoke==========
  CheckIndefiniteTense();
  CheckPerfectContinuousTense();
  CheckPerfectTense();
  CheckContinuousTense();
}

CheckWhichTense("i works in an office.");
// const nlp = require("compromise");

// // Example sentence
// let doc = nlp("She goes to school by bus.");

// // Get verbs as a Compromise collection
// let verbs = doc.verbs().json(); // <-- convert to array of objects

// // Map through each verb and get forms
// const Verbtype = verbs.map(verb => {
//     const verbDoc = nlp(verb.text); // convert text back to Compromise for transformations
//     console.log(verb.text);

//     console.log(verbDoc.verbs().toInfinitive().text());

//     return {
//         text: verb.text,                     // original verb in sentence
//         Indefinite : verbDoc.verbs().toInfinitive().text(),
//         present: verbDoc.verbs().toPresentTense().text(),
//         past: verbDoc.verbs().toPastTense().text(),
//         gerund: verbDoc.verbs().toGerund().text()
//     };
// });

// console.log(Verbtype);

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
//
