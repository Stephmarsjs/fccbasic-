function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    var lastChar = str.substr(-target.length);
    // -- Falcor
    return target == lastChar;
  }
  
  confirmEnding("Bastian", "n");