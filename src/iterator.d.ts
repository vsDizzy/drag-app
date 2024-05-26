interface Iterator<T, TReturn = any, TNext = undefined> {
  take(limit: uint): Iterable<T>
}
