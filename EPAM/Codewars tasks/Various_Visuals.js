function diamond(n) {
  let firstHalf = [];

  if (n >= 3 && n % 2 !== 0) {
    for (let i = 0; i < (n - 1) / 2; i++) {
      firstHalf.push(
        " ".repeat((n - 1) / 2 - i) + "*".repeat(i * 2 + 1) + "\n",
      );
    }

    console.log(firstHalf);
    return [...firstHalf, "*".repeat(n) + "\n", ...firstHalf.reverse()].join(
      "",
    );
  }
  return null;
}

console.log(diamond(5));
