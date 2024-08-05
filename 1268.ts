/* 
  * 1268. Search Suggestions System
  *
  * You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.

 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].

Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Explanation: The only word "havana" will be always suggested while typing the search word.

 

Constraints:

    1 <= products.length <= 1000
    1 <= products[i].length <= 3000
    1 <= sum(products[i].length) <= 2 * 104
    All the strings of products are unique.
    products[i] consists of lowercase English letters.
    1 <= searchWord.length <= 1000
    searchWord consists of lowercase English letters.

*/

export function lexicographicalCompare(str1: string, str2: string): number {
  const shortestStrLength = str1.length < str2.length ? str1.length : str2.length;
  for (let i = 0; i < shortestStrLength; i++) {
    if (str1[i] === str2[i]) {
      continue;
    }
    return str1.charCodeAt(i) - str2.charCodeAt(i);
  }
  if (str1.length === str2.length) {
    // Same word
    return 0;
  }
  return str1.length < str2.length ? -1 : 1;
}

export function suggestedProducts(products: string[], searchWord: string): string[][] {
  let currSearchWord = '';
  const suggestionResults: string[][] = [];
  let currOrderedResults: string[] = [];
  // console.log({ searchWord, products });

  for (let i = 0; i < searchWord.length; i++) {
    currSearchWord += searchWord[i];
    currOrderedResults = [];
    // console.log({ currSearchWord });
    // TODO: remove products that don't match so we don't have to iterate over them in the future
    for (const product of products) {
      if (product.startsWith(currSearchWord)) {
        // console.log({ product });
        // TODO: Maybe add in the correct lexicographical order to remove final sorting step?
        currOrderedResults.push(product);
      }
    }
    // TODO: Come back and sort this lexicographically (char codes?)
    suggestionResults.push(currOrderedResults.sort(lexicographicalCompare).slice(0, 3));
    // console.log({ suggestionResults });
  }
  return suggestionResults;
}

// Found this interesting, simple solution as well. Apparently the sort function is good enough, and sorting first is pretty sneaky.
/* function suggestedProducts(products: string[], searchWord: string): string[][] {
    products.sort();
    const results: string[][] = [];
    for (let i = 0; i < searchWord.length; i++) {
        const suggestions: string[] = [];
        for (const product of products) {
            if (suggestions.length === 3) break;
            if (product.startsWith(searchWord.slice(0, i + 1))) suggestions.push(product);
        }
        results.push(suggestions);
    }
    return results;
} */
