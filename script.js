const array = ["apple", "axis", "banana", "api", "avocado"];

const { log: l } = console;

const filtered = array.filter((element) => {
  return element.length > 1;
});

l(filtered);

const user = {
  name: "nika",
  age: 29,
};
