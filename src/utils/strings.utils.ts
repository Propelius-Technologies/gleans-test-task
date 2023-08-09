export const removeHtmlTags = (inputString: string) => {
  return inputString.replace(/<[^>]+>/g, '');
};
