// anagram 

let word1="mad";
let word2="dam";

word1=word1.split('').sort()
// console.log(word1);
word2=word2.split('').sort()

if(word1.join('')==word2.join('')){
    console.log('Word is Anagram');
}else{
    console.log('Word is not an Anagram')
}