// const nameUser = "Doe";
// const age = 43;
// const city = "Chicago";
const user = {
  nameUser: "Doe",
  age: 43,
  city: "Chicago",
};
console.log(user);
user.job = "web developper";
//Decomposition d'objet
// const cityUserOne = user.city;
// const nameUser = user.nameUser;
// const age = user.age;
// const { city: cityOfUserOne, age, nameUser} = user
//Avec l'operateur rest qui  doit être en dernière position
const { city: cityOfUserOne, ...rest } = user;
console.log(rest);
