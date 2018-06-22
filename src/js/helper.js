// returns a random value from array
export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Make URL for each learning resource?
export function makeLearningSlug(info) {
  // 1) stringify first so I can use JS string methods
  // 2) delete any characters that fall outside a certain criteria
  // 3) replace spaces with a hyphen
  // 4) viola!
  //5) Then, in the code, grab this function to append this to the generic /learning/pattern and follow Wes tutorials
}
