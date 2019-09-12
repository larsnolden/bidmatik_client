export default (str, chars) =>
  str.length > chars
    ? Array.from(str)
      .slice(0, chars - 3)
      .join('')
    + '...'
    : str;
