class AutoCompleteTrie {
    constructor(value) {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
    }

    // addLetterToTree(root, word) {
    //     if(word.length == 1 && root.children[word]) {
    //         root.children[word].endOfWord == true
    //     }
    //     if(!root.children[word[0]]) {
    //         root.children[word[0]] = new AutoCompleteTrie(word[0])
    //         if(word.length === 1) {
    //             root.children[word[0]].endOfWord = true
    //         }
    //     }
    //     else {

    //     }
    //     if (word.length > 1) {
    //         this.addLetterToTree(root.children[word[0]], word.slice(1));
    //       }
    // }

    // addWord(word) {
    //     this.addLetterToTree(this, word)
    // }

    // findWordHelper(root, word) {
    //     let result

    //     if(!word || !root.children[word[0]]) {
    //         return false
    //     }
    //     if(root.children[word[0]].endOfWord == true && word.length == 1) {
    //         return true
    //     }
    //     if(root.children[word[0]].value == word[0]) {
    //         result = this.findWordHelper(root.children[word[0]], word.slice(1))
    //         return result
    //     }
    //     else{
    //         return false
    //     }
  
    // }

    // findWord(word) {
    //     if(this.children[word[0]]) {
    //         return this.findWordHelper(this.children[word[0]], word.slice(1))
    //     }
    //     else{
    //         return false
    //     }
    // }

    // getChildren(root, string, predictions) {
    //     let node = root;
    //     while (string) {
    //       node = root.children[string[0]];
    //       string = string.substr(1);
    //     }
    //     console.log(node)
    //     return node;
    // }

    // allWordsHelper(stringSoFar, tree, predictions) {
    //     for (let k in tree.children) {
    //       const child = tree.children[k];
    //       let newString = stringSoFar + child.value;
    //       if (child.endWord) {
    //         predictions.push(newString);
    //       }
    //       this.allWordsHelper(newString, child);
    //     }
    //   };

    // // predictWord(word) {
    // //     let predictions = []

      

    // //     let restOfTree = this.getChildren(this.children[word[0]], word.slice(1), predictions)
    // //     if(restOfTree) {
    // //         this.allWordsHelper(word, restOfTree, predictions)
    // //     }
    // //     return predictions
    // // }

    addWordHelper(node, str) {
        if (!node.children[str[0]]) {
          node.children[str[0]] = new AutoCompleteTrie(str[0]);
          if (str.length === 1) {
            node.children[str[0]].endWord = 1;
          }
        } else {
        }
        if (str.length > 1) {
          this.addWordHelper(node.children[str[0]], str.slice(1));
        }
      }
      addWord(string) {
        this.addWordHelper(this, string);
      }
      /**************************************************/
    
      predictWord(string) {
        let allWords = [];
        /**************************************************/
        const getRemainingTree = function (string, tree) {
          let node = tree;
          while (string) {
            node = node.children[string[0]];
            string = string.substr(1);
          }
          return node;
        };
        /**************************************************/
        const allWordsHelper = function (stringSoFar, tree) {
          for (let k in tree.children) {
            const child = tree.children[k];
            let newString = stringSoFar + child.value;
            if (child.endWord) {
              allWords.push(newString);
            }
            allWordsHelper(newString, child);
          }
        };
        /**************************************************/
        let remainingTree = getRemainingTree(string, this);
        if (remainingTree) {
          allWordsHelper(string, remainingTree);
        }
        return allWords;
      }

    
}

module.exports = AutoCompleteTrie