const AutoCompleteTrie = require('./AutoCompleteTrie')

let tree = new AutoCompleteTrie()
tree.addWord("word")
tree.addWord("adam")
tree.addWord("words")
// console.log(tree.children['w'].children['o'].children['r'].children['d'])
console.log(tree.children['a'].children['d'].children['a'])

// console.log(tree.children['w'])