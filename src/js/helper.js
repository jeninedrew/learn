// returns a random value from array
export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Make string fir for a URL
export function makeLearningSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^0-9a-zA-Z\-]/g, "");
}
