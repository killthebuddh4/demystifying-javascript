import Lib from "./lib.js";

describe("Our script works", () => {
  it("Really well, actually.", () => {
    const STATE: { dataToLog: string, loggedData: string[] } = {
      dataToLog: "This is a test!",
      loggedData: [],
    };
    const logger = Lib.createLogger((...args) => (STATE.loggedData = args));

    logger(STATE.dataToLog);

    if (!STATE.loggedData.includes(STATE.dataToLog)) {
      throw new Error("The logger didn't log the data to log");
    }

    return true;
  });
});
