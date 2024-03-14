function operator(op, ...numbers) {
  let resultat = numbers[0];

  if (op === "+") {
    for (number in numbers) {
      resultat += numbers[number];
    }
    resultat -= numbers[0];
  }

  if (op === "-") {
    for (number in numbers) {
      resultat -= numbers[number];
    }
    resultat += numbers[0];
  }

  if (op === "*") {
    resultat = 1;
    for (number in numbers) {
      resultat *= numbers[number];
    }
  }

  if (op === "/") {
    resultat = numbers[0];

    for (number in numbers) {
      if (resultat === 0) {
        console.log("0");
        return;
      } else if (numbers[Number(number) + 1] === 0) {
        console.log("Impossible");
        return;
      } else if (numbers[Number(number) + 1]) {
        resultat /= numbers[Number(number) + 1];
      }
    }
  }

  if (op === "%") {
    console.log("Cette opération n'est pas pris en compte");
    return;
  }

  console.log(resultat);
}

operator("*", 1, 2, 3, 4); // retourne 24
operator("*", 1, 2, 3, 4, 5); // retourne 120

operator("+", 1, 2, 3, 4, 5); // retourne 15

operator("-", 12, 3, 1); // retourne 8
operator("-", 10, 5, 2); // retourne 3
operator("-", 10, 5, 7); // retourne -2
operator("-", 10, 5, -7); // retourne 12

operator("/", 9, 2); // retourne 4.5
operator("/", 480, 2, 4); // retourne 60
operator("/", 9, 0, 2); // retourne impossible
operator("/", 2, 0); // retourne impossible
operator("/", 0, 2); // retourne 0

operator("%", 10, 2); // retourne cet opération n'est pas pris en compte
