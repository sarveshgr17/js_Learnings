const accountId = 1445321;
let accountEmail = "SarveshRangnath@gmail.com";
var accountPassword = "12345";
accountCity = "Pune";
let accountState;
// accountId = 1234 // not allowed to change
accountEmail = "10041234@sher.com";
accountPassword = "21212121";
X;
accountCity = "Benguluru";
// ! Prefer not to use var because of inblock scope and function scope
console.log(accountId);
console.log(accountState);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
