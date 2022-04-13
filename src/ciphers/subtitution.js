// 𝑒Π(𝑥) = Π (x)
// 𝑑Π(𝑦) = Π −1 (x)

// encode(plainText, newalpha map alphabet) -> return cipher
// decode(cipherText, newalpha map alphabet) -> return message

// encode("hentoithubay", "xnyahpogzqwbtsflrcvmuekjdi") -> return "ghsmfzmgunxd"
// decode("ghsmfzmgunxd", "xnyahpogzqwbtsflrcvmuekjdi") -> return "hentoithubay"

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

function substitutionEncrypt(message, newalpha) {
  let result = '';
  //let newalpha = "xnyahpogzqwbtsflrcvmuekjdi"; shift(alphabet);

  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++) {
    let index = alphabet.indexOf(message[i]);
    result += newalpha[index];
  }
  return result;
}

function substitutionDecrypt(cipher, newalpha) {
  let result = '';
  cipher = cipher.toLowerCase();
  for (let i = 0; i < cipher.length; i++) {
    let index = newalpha.indexOf(cipher[i]);
    result += alphabet[index];
  }
  return result;
}

let en = substitutionEncrypt('hentoithubay', 'xnyahpogzqwbtsflrcvmuekjdi');
let de = substitutionDecrypt('ghsmfzmgunxd', 'xnyahpogzqwbtsflrcvmuekjdi');
console.log(en, de);
