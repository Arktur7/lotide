const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // --> always fails!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value because we are not checking itassertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words.length, 3); // original array should still have 3 elements!