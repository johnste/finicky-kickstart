export function convertWildcardToRegex(wildcardString) {
  if (!wildcardString) {
    return undefined;
  }

  let result = wildcardString;

  result = result.replace(/[-[\]\/{}()*+?.,\\^$|#\s]/g, "\\$&");
  result = result.replace(/\\\?/g, ".");
  result = result.replace(/\\\*/g, ".*");

  if (
    !wildcardString.startsWith("http://") &&
    !wildcardString.startsWith("https://")
  ) {
    result = "https?:\\/\\/" + result;
  }

  return "/^" + result + "$/";
}
