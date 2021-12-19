const AutoCompleteTrie = require('./AutoCompleteTrie')

let tree = new AutoCompleteTrie()
tree.addWord("word")
tree.addWord("wording")
tree.addWord("woman")
tree.addWord("adam")
tree.addWord("words")
tree.addWord("w")

// console.log(tree.findWord("word"))

// console.log(tree.children["w"].children["o"]);

console.log(tree.predictWord("wo"))