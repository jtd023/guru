const assert = require("assert");

const Node = function ( operator = "", value = "", left = "", right = "" ) {
  
  const concated = left + " " + operator + " " + right;
  
  const isDefault = function () { if( ["+","-","x","÷"].indexOf(operator) === -1 ) { return 1; } };
  
  const result = function () { 
    
    if( isDefault() ){ return value; }
      
    return eval( concated.replace("x","*").replace("÷","/") ); 
     
  };
  
  const toString = function () { 
    
    if( isDefault() ) { return value.toString(); }
      
    return '(' + concated + ')'; 
    
  };
  
  return { result, toString };
  
};

//TEST
const tree = Node(
  "÷",
  null,
  Node(
    "+",
    null,
    Node("", 7, null, null),
    Node(
      "x",
      null,
      Node("-", null, Node("", 3, null, null), Node("", 2, null, null)),
      Node("", 5, null, null)
    )
  ),
  Node("", 6, null, null)
);
assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());