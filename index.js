function shout (string) {
  return string.toUpperCase()
}
var uppercase = "HELLO!"

uppercase.toUpperCase () === uppercase // true

var lowercase = 'hello!'

lowercase.toLowercase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowercase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase// false

function whisper(string) {
  return string.toLowerCase()
}

logShout(string){
console.log()
}