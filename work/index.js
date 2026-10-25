require('dotenv').config();

function getCommandLineArg(argName) {
  const args = process.argv.slice(2);
  
  for (let i = 0; i < args.length; i++) {
    // Варіант: --name=John
    if (args[i].startsWith(`${argName}=`)) {
      return args[i].split('=')[1];
    }
    // Варіант: --name John
    if (args[i] === argName && args[i + 1]) {
      return args[i + 1];
    }
  }
  
  return null;
}

function getName() {
  const cliName = getCommandLineArg('--name');
  if (cliName) {
    return cliName;
  }

  if (process.env.NAME) {
    return process.env.NAME;
  }

  return 'unknown user';
}

const name = getName();
console.log(`Hello ${name}!`);