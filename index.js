const logger = require("numan-logger");
const cmd = require("numan-cmd");

(async () => {
  try {
    let count = 0;
    while (true) {
      await cmd.runSync(
        "solana-keygen grind --starts-with numan:1 --ignore-case",
        {
          shell: true,
        }
      );

      logger.logInfo({ msg: "Found an address!", addressesFound: ++count });
    }
  } catch (error) {
    logger.logError(error);
    process.exit(1);
  }
})();
