const letsFlat = function( arr ) {
  
  if ( arr instanceof Array ) {
    
    if ( arr.length === 0 ) { return []; }
    
    return letsFlat( arr[0] ).concat( letsFlat ( arr.slice(1) ) );
    
  }
  
  return [arr];
  
};

//TEST
letsFlat([ 1, [ 2, [ 3 ] ], 4 ]); //[ 1, 2, 3, 4 ]