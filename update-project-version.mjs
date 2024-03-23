import fs from "fs";
import readline from "readline";

/**
 * Updates the project version in the package.json file based on the provided type.
 * Supported types are "patch", "minor", and "major".
 *
 * @param {string} type - Version type to increase. Must be one of "patch", "minor", or "major".
 * @throws {Error} Will throw an error if invalid type provided.
 */
function updateVersion(type) {
  // Read package.json
  const packageJsonPath = "./package.json";
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  const currentVersion = packageJson.version;

  // Get current version
  let [major, minor, patch] = currentVersion.split(".").map(Number);

  // Update version based on the type
  switch (type) {
    case "patch": {
      patch++;
      break;
    }
    case "minor": {
      minor++;
      patch = 0; // Reset patch version for a minor update
      break;
    }
    case "major": {
      major++;
      minor = 0; // Reset minor and patch versions for a major update
      patch = 0;
      break;
    }
    default: {
      throw new Error(
        '❎ Invalid version type. Use "patch", "minor", or "major".'
      );
    }
  }

  // Update package.json with the new version
  packageJson.version = `${major}.${minor}.${patch}`;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  const newVersion = packageJson.version;

  console.log(
    `✅ Successfully updated version: ${currentVersion} → ${newVersion}`
  );
}

/**
 * Initiates the script prompting the user for a version type and starts the update process afterwards.
 */
function startScript() {
  // Create interface to read user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt user for version type
  rl.question(
    "Which version do you want to update (patch/minor/major)? ",
    async (answer) => {
      try {
        updateVersion(answer.trim());
      } catch (error) {
        console.error(error.message);
      }
      rl.close();
    }
  );
}
startScript();
