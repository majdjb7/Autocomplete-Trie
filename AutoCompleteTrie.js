class AutoCompleteTrie {
    constructor(value) {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
    }

    addLetterToTree(root, word) {
        if(word.length == 1 && root.children[word]) {
            root.children[word].endOfWord == true
        }
        if(!root.children[word[0]]) {
            root.children[word[0]] = new AutoCompleteTrie(word[0])
            if(word.length === 1) {
                root.children[word[0]].endOfWord = true
            }
        }
        else {

        }
        if (word.length > 1) {
            this.addLetterToTree(root.children[word[0]], word.slice(1));
          }
    }

    addWord(word) {
        this.addLetterToTree(this, word)
    }

    findWordHelper(root, word) {
        let result

        if(!word || !root.children[word[0]]) {
            return false
        }
        if(root.children[word[0]].endOfWord == true && word.length == 1) {
            return true
        }
        if(root.children[word[0]].value == word[0]) {
            result = this.findWordHelper(root.children[word[0]], word.slice(1))
            return result
        }
        else{
            return false
        }
  
    }

    findWord(word) {
        if(this.children[word[0]]) {
            return this.findWordHelper(this.children[word[0]], word.slice(1))
        }
        else{
            return false
        }
    }

    

    predictWord(word) {
        let predictions = []
        if(this.children[word[0]]) {
            console.log(this.children[word[0]])
        }
        return predictions
    }
}

module.exports = AutoCompleteTrie