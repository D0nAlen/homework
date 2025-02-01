function totalAmountPurchases(users) {
    let result = 0;
    users.forEach(user => {
      result += user;
    });
    return result;
  }
  
  let users = [10000, 20000, 30000];
  console.log(totalAmountPurchases(users));
