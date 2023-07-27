
const strBin = (dec) => {
    return (dec >>> 0).toString(2);
}
// const strConvert = (dec) =>{
//   return (dec<<< 0).toString(2);
// }
  
  const ascFunct = (item) => {
    let numRetain;
    try {
      //created a conditional to chack if input is a string or      number.
      //for String___________________
      if (typeof item === 'string' || item instanceof String) {
        numRetain = ''
        for (i = 0; i <= item.length - 1; i++) {
          let finalOut = item[i].charCodeAt()
          let binaryString = strBin(finalOut)
          numRetain += binaryString;
        }
        let binaryHolder = numRetain;
        let binTest = binaryHolder
        for (i = 0; i <= binaryHolder.length; i++) {
          //usimg fibiach logic to identify dupleateusimg fibi
        }
        console.log("0"+binaryHolder)
        // return binaryHolder
        let accZero = 0;
        let accOne = 0;
        for (i = 0; i < binaryHolder.length; i++) {
          if (binaryHolder[i] == 0) {
            accZero += 1;
          }
          if (binaryHolder[i] == 1) {
            accOne += 1
          }  
        }
        console.log(accZero, "0 count", accOne, "1 count");
        //for Number_________________
      } else if (item != String|| item instanceof Number) {
        let newNum = item.toString()
        for (let i = 0; i <= newNum.length; i++) {
          console.log(newNum[i].join())
          console.log("this is a number");
          // console.log(newNum[i].charCodeAt())
        }
      } else {
        console.log('not working ')
      }
    } catch (e) {
      console.log('item is not compatible')
    }
    // return numRetain.toString()
  
  
  }
  const binaryDcrypt = (x)=>{
  //  let newItem =  ascFunct(x)
    console.log(ascFunct(x), "deCrypt item")
  }
 // Node class to build the Huffman tree
class Node {
  constructor(symbol, frequency) {
    this.symbol = symbol;
    this.frequency = frequency;
    this.left = null;
    this.right = null;
  }
}

// Function to construct the Huffman tree
function buildHuffmanTree(input) {
  const frequencyMap = new Map();

  // Count the frequency of each character in the input
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  // Create an array of nodes for each character and frequency
  const nodes = [];
  frequencyMap.forEach((frequency, symbol) => {
    nodes.push(new Node(symbol, frequency));
  });

  // Construct the Huffman tree
  while (nodes.length > 1) {
    nodes.sort((a, b) => a.frequency - b.frequency);
    const left = nodes.shift();
    const right = nodes.shift();
    const parent = new Node(null, left.frequency + right.frequency);
    parent.left = left;
    parent.right = right;
    nodes.push(parent);
  }

  return nodes[0]; // Root of the Huffman tree
}

// Function to generate the Huffman codes for each character
function generateHuffmanCodes(root, code = '', codesMap = new Map()) {
  if (root) {
    if (root.symbol) {
      codesMap.set(root.symbol, code);
    }
    generateHuffmanCodes(root.left, code + '0', codesMap);
    generateHuffmanCodes(root.right, code + '1', codesMap);
  }
  return codesMap;
}

// Function to compress the input using Huffman coding
function huffmanCompress(input) {
  const root = buildHuffmanTree(input);
  const codesMap = generateHuffmanCodes(root);
  let compressed = '';

  // Convert the input string to its Huffman coded representation
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    compressed += codesMap.get(char);
  }

  return compressed;
}

// Example usage:
const inputString = "this is an example for huffman compression";
const compressedString = huffmanCompress(inputString);
console.log("Compressed: ", compressedString);


  
  //https://stackoverflow.com/questions/23575218/convert-decimal-number-to-fraction-in-javascript-or-closest-fraction

  module.exports = binaryDcrypt("dc");