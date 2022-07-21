function getUsers() {
   let users = [];
 
   // delay 1 second (1000ms)
   setTimeout(() => {
     users = [
       { username: 'john', email: 'john@test.com' },
       { username: 'jane', email: 'jane@test.com' },
     ];
   }, 1000);
 
   return users;
 }

function findUser(username) {
 const users = getUsers();
 const user = users.find((user) => user.username === username);
 return user;
}

console.log(findUser("john"));
