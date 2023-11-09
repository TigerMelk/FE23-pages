//* Rader
for (let i = 0; i < 5; i++) {
  const h3El = document.createElement("h3");
  document.body.appendChild(h3El);
  h3El.innerText = "Rad" + (i + 1);
  document.body.style.textAlign = "center";
  h3El.style.color = "blue";
  h3El.style.fontSize = "13px" + (i + 1);
  const hue = 120 + i * 15;
  h3El.style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
}

//* Div
const div = document.createElement("div");
document.body.appendChild(div);
div.style.border = "1px solid black";
div.style.maxWidth = "100vw";

div.style.display = "flex";
div.style.justifyContent = "space-evenly";

//*  listor

for (let i = 0; i < 3; i++) {
  const ulEl = document.createElement("ul");
  div.appendChild(ulEl);
  console.log(i);
  ulEl.style.border = "6px solid purple";
  const siffror = [
    "ett",
    "två",
    "tre",
    "fyra",
    "fem",
    "sex",
    "sju",
    "åtta",
    "nio",
    "10",
  ];
  for (let j = 0; j < 10; j++) {
    const liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.innerText = [j];
    console.log(j);
    liEl.style.listStyle = "none";
    if (i == 0) {
      liEl.innerText = j;
    } else if (i == 1) {
      liEl.innerText = "yo";
    } else {
      liEl.innerText = siffror[j];
    }
  }
}
