let hacker1 = "Nuno";
console.log(`The Driver's name is ${hacker1}`);
let hacker2 = "Juliana";
console.log(`The Navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length}characters`
  );
} else {
  console.log(`wow, you both got equally long names, XX characters!!`);
}

const space = " ";
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedName += `${hacker1[i].toUpperCase()}${space}`;
}
console.log(spacedName);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}

console.log(reversedName);

if (hacker1.localeCompare(hacker2)) {
  console.log(`The driver's name goes first`);
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`What?! You both got the same name?`);
}

let ipsumString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus erat, dignissim et diam at, volutpat lobortis ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed viverra lacinia urna vitae ultrices. Donec tristique convallis malesuada. In egestas, enim semper aliquam porttitor, nulla leo tristique dolor, eget laoreet purus tellus at mauris. Suspendisse egestas urna eu sagittis consequat. Proin convallis ipsum dui. Proin consequat orci sit amet nunc vehicula, sit amet interdum nunc tristique. Phasellus eu pharetra ligula. Duis placerat varius purus nec pellentesque. Fusce eu euismod lacus. Donec vitae purus porta, lacinia mi eget, bibendum ipsum. Maecenas in convallis nisi.

Proin bibendum eleifend mi. Curabitur eget dapibus lacus. Proin vel velit vitae odio convallis porta. Quisque vel mollis turpis. Proin sit amet lectus quis odio porta faucibus et sit amet nibh. Duis lacinia lacus quis ipsum eleifend tempus. Etiam euismod porta sapien, in rhoncus enim condimentum et.

Nulla facilisi. Donec vehicula leo sit amet commodo viverra. Aliquam fermentum justo justo, mollis auctor urna viverra et. Ut quis ex massa. Donec a rhoncus quam, vitae fringilla nisl. Etiam eu nisl dictum, imperdiet sapien sit amet, placerat dolor. Sed tortor purus, dignissim quis nisl sit amet, ultricies gravida neque.`;

let regex = /\s+/gi;
let ipsumCount = ipsumString
  .trim()
  .replace(regex, " ")
  .split(" ");
console.log(ipsumCount.length);

let count = 0;
for (let i = 0; i < ipsumString.length; i++) {
  if (ipsumCount[i] === "et") {
    count++;
  }
}
console.log(count);
