export function estimateReadTime(inputString) {
  const wordCount = countWordsExcludingTags(inputString);
  const assumedSpeed = 265;
  const readingTime = Math.ceil(wordCount / assumedSpeed);
  return readingTime;
}

function countWordsExcludingTags(inputString) {
  // Remove HTML tags
  const plainText = inputString.replace(/<[^>]*>/g, '');

  // Split the plain text into words
  const wordsArray = plainText.split(/\s+/);

  // Count the words
  const wordCount = wordsArray.length;

  return wordCount;
}