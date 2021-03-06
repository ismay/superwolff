export default function calculateSizes({ amount, index }) {
  const remainderForTwo = amount % 2;
  const remainderForThree = amount % 3;
  const isLast = index + 1 === amount;
  const isSecondToLast = index + 1 === amount - 1;
  const sizes = [];

  /**
   * Going through the sizes from large to small viewport
   */

  // Largest
  if (remainderForThree === 1 && isLast) {
    // It will be full width
    sizes.push("(min-width: 50em) 50em");
  } else if (remainderForThree === 2 && (isSecondToLast || isLast)) {
    // It will be half the available width
    sizes.push("(min-width: 50em) 25em");
  } else {
    // It will be a third of the available width
    sizes.push("(min-width: 50em) 17em");
  }

  // Large
  if (remainderForThree === 1 && isLast) {
    // It will be full width
    sizes.push("(min-width: 35em) 100vw");
  } else if (remainderForThree === 2 && (isSecondToLast || isLast)) {
    // It will be half the available width
    sizes.push("(min-width: 35em) 50vw");
  } else {
    // It will be a third of the available width
    sizes.push("(min-width: 35em) 33vw");
  }

  // Medium
  if (remainderForTwo === 1 && isLast) {
    // It will be full width
    sizes.push("(min-width: 30em) 100vw");
  } else {
    // It will be half the available width
    sizes.push("(min-width: 30em) 50vw");
  }

  // Small
  sizes.push(
    // All images are full width at the smallest size
    "100vw"
  );

  return sizes.join(", ");
}
