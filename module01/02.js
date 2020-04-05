function seekNumberPair(x, y) {
    var pairNumbers = [];

    console.log('Initial:');
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);
    console.log(`List = ${pairNumbers}`);
    
    while (x <= y) {
    
      var n = x % 2;
      
      if (n === 0) {
        pairNumbers.push(x)
        console.log(`Add ${x} to list!`);
      };  
      x++;    
    };

    console.log(pairNumbers);
  };

  seekNumberPair(10, 50);