const { boolean } = require("webidl-conversions");

class AutoCompleteTrie {
    constructor(value) {
        this.value = value;
        this.children ={};
        this.endOfWord = false;
    }

    putFlag(lastLetter) {
        if(this.children[lastLetter]) {
            this.children[lastLetter].endOfWord = true
            console.log(this.children[lastLetter])

        }
    }

    addWord(word) {
        for (let i=0; i<word.length; i++){
            if(!this.children[word[i]] && i==0) {
                this.children[word[i]] = new AutoCompleteTrie(word[i])

                this.children[word[i]].addWord(word.substring(1))
            }
            else if(this.children[word[i]]) {
                // this.checkIfInChildren()
                this.children[word[i]] = new AutoCompleteTrie(word[i])
                this.children[word[i]].addWord(word.substring(1))
            }
            if(i == word.length-1) {
                this.endOfWord = true
            }
            else{
                this.endOfWord = false
            }
        }
        this.putFlag(word[word.length-1])

    }

    findWord(word) {

    }

    predictWord(word) {

    }
}

module.exports = AutoCompleteTrie