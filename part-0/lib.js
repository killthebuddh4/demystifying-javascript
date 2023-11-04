export default {
  createLogger: fn => {
    return (...args) => { 
      fn(...args);
    }
  }
}