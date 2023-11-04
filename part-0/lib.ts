export default {
  createLogger: (fn: (...args: string[]) => unknown) => {
    return (...args: string[]) => {
      fn(...args);
    };
  },
};
