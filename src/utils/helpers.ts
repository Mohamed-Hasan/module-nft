export function getIntersectionBetweenArrays(arraysToInspect: string[][]) {
  const keysOccurrences = arraysToInspect.reduce((cumKeyOccurences, array) => {
    return array.reduce((cum, identifier) => {
      cum[identifier] = cum[identifier] ? ++cum[identifier] : 1;
      return cum;
    }, cumKeyOccurences);
  }, {} as Record<string, number>);
  const intersection = Object.entries(keysOccurrences)
    .filter(([, occurences]) => occurences === arraysToInspect.length)
    .map(([address]) => address);
  return intersection;
}
