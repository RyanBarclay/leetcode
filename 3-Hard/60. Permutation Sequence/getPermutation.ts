// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// 1. "123"
// 2. "132"
// 3. "213"
// 4. "231"
// 5. "312"
// 6. "321"
// Given n and k, return the kth permutation sequence.

function getPermutation(n: number, k: number): string {
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  let factorial = Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, cur) => acc * cur,
    1
  );
  let result = "";

  k--;

  while (nums.length > 0) {
    factorial /= nums.length;
    const index = Math.floor(k / factorial);
    result += nums[index];
    nums.splice(index, 1);
    k -= index * factorial;
  }

  return result;
}
