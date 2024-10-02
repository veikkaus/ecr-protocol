
const colored = sgr => msg => process.stdout.isTTY ? `\x1b[${sgr}m${msg}\x1b[0m` : msg

module.exports = {
  red: colored(31),
  green: colored(32),
  yellow: colored(33),
  blue: colored(34),
  magenta: colored(35),
  cyan: colored(36),
  grey: colored(37),
}
