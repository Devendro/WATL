let n1 = 0;
  let n2 = 1;
  for (let i = 0; i <= 20; i++) {
    console.log(n1)
    let nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  