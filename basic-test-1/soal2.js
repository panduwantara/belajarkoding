function cekPalindrome(string) {
    string = string.toLowerCase();
    const charactersArr = string.split("");
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  
    const lettersArr = [];
    charactersArr.forEach((char) => {
      if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
  
    return lettersArr.join("") === lettersArr.reverse().join("");
  }
  const kalimat = "kodok"
  if (cekPalindrome(kalimat) == true){
    console.log(`
    ---
    check Palindrome
    ---
    Masukkan kata : ${kalimat}
    
    ${kalimat}
    Kata yang ada masukkan adalah palindrome`)
  } else if (cekPalindrome(kalimat) == false){
    console.log(`
    ---
    check Palindrome
    ---
    Masukkan kata : ${kalimat}
    
    ${kalimat}
    Kata yang ada masukkan bukan palindrome`)
  }

  