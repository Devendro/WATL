// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function createRightAngledNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

createRightAngledNumberTriangle(5);



// -------------------------------------------------------------------------------------------

// 5 
// 5 4 
// 5 4 3 
// 5 4 3 2 
// 5 4 3 2 1 

function printLeftAngledTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = n; j >= i; j--) {
            row += j + ' ';
        }
        console.log(row);
    }
}

printLeftAngledTriangle(5);



// -------------------------------------------------------------------------------------------

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

function printInvertedRightAngledTriangle(n) {
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}

printInvertedRightAngledTriangle(5);


// -------------------------------------------------------------------------------------------

// 5 4 3 2 1 
// 4 3 2 1 
// 3 2 1 
// 2 1 
// 1 


for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = i; j >= 1; j--) {
    row += j + ' ';
  }
  console.log(row);
}


// -------------------------------------------------------------------------------------------

// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1


for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = i; j >= 1; j--) {
    row += i + ' ';
  }
  console.log(row);
}

// -------------------------------------------------------------------------------------------

// 8 8 8 8 
// 6 6 6 
// 4 4 
// 2 


for (let i = 8; i >= 2; i -= 2) {
  let row = '';
  for (let j = i; j >= 2; j -= 2) {
    row += i + ' ';
  }
  console.log(row);
}




