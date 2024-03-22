globalThis.describe = (name, fn) => {
  console.log(`Running suite: ${name}`);

  try {
    fn()
    console.log(`Test suite ${name} passed`);
  } catch {
    console.log(`Test suite ${name} failed`);
  }
}

globalThis.it = (name, fn) => {
  console.log(`Running test: ${name}`);

  try {
    fn();
    console.log(`Test ${name} passed`);
  } catch {
    console.log(`Test ${name} failed`);
  }
}