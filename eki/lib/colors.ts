
const colored = (sgr: number) => (msg: string) => process.stdout.isTTY ? `\x1b[${sgr}m${msg}\x1b[0m` : msg


export const color = {
  red: colored(31),
  green: colored(32),
  yellow: colored(33),
  blue: colored(34),
  magenta: colored(35),
  cyan: colored(36),
  grey: colored(37),
}