function queueTime(customers, n) {
  let cassa = new Array(n).fill(0);

  for (let t of customers) {
    let lowestWaitTimeIndex = cassa.indexOf(Math.min(...cassa));

    cassa[lowestWaitTimeIndex] += t;
  }
  return Math.max(...cassa);
}

console.log(queueTime([2, 2, 3, 3, 4, 4], 2));

function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false;

  return (
    array1
      .map((x) => x * x)
      .sort()
      .toString() === array2.sort().toString()
  );
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ]
  )
);

function tribonacci(signature, n) {
  let res = [...signature];

  let reslength = res.length;

  while (reslength < n) {
    let sum = res.slice(-3).reduce((acc, curr) => acc + curr, 0);

    res.push(sum);

    reslength++;
  }

  return res;
}

console.log(tribonacci([1, 1, 1], 10));

function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return "";
  let obj = {};

  listOfCat.map((item) => (obj[item] = 0));

  Object.preventExtensions(obj);
  listOfArt.map(
    (item) =>
      (obj[item.split(" ")[0].charAt(0)] += parseInt(item.split(" ")[1]))
  );

  let res = [];
  for (const [key, value] of Object.entries(obj)) {
    res.push(`(${key} : ${value})`);
  }

  return res.join(" - ");

  // if (!listOfArt.length || !listOfCat.length) return "";
  // return listOfCat
  //   .map((w) => {
  //     const s = listOfArt.reduce(
  //       (a, b) => a + (b.charAt(0) === w ? +b.split(" ")[1] : 0),
  //       0
  //     );
  //     return `(${w} : ${s})`;
  //   })
  //   .join(" - ");
}

console.log(
  stockList(
    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]
  )
);

function dirReduc(arr) {
  const nums = (arr, item) => {
    return arr.filter((b) => b === item).length;
  };

  let countNorth = nums(arr, "NORTH");
  let countSouth = nums(arr, "SOUTH");
  let countEast = nums(arr, "EAST");
  let countWest = nums(arr, "WEST");

  if (
    countNorth === 1 &&
    countSouth === 1 &&
    countEast === 1 &&
    countWest === 1
  ) {
    return arr;
  } else if (countNorth === countSouth && countEast === countWest) {
    return [];
  } else {
    let result = arr.join("");
    let remove = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g;
    while (remove.test(result)) {
      result = result.replace(remove, "");
    }
    return result.match(/NORTH|WEST|EAST|SOUTH/g);
  }
}

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
