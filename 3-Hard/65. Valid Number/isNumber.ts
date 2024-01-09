function isNumber(s: string): boolean {
  const regex = /^(\+|-)?(\d+(\.\d*)?|\.\d+)(e(\+|-)?\d+)?$/i;
  return regex.test(s.trim());
}
