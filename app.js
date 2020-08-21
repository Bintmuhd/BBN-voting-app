let btnAdd = document.querySelector("#add");
let btnSubtract = document.querySelector("#subtract");
let count = document.querySelector(".count1");

let btnAdd2 = document.querySelector("#add2");
let btnSubtract2 = document.querySelector("#subtract2");
let count2 = document.querySelector(".count2");

let btnAdd3 = document.querySelector("#add3");
let btnSubtract3 = document.querySelector("#subtract3");
let count3 = document.querySelector(".count3");

let btnAdd4 = document.querySelector("#add4");
let btnSubtract4 = document.querySelector("#subtract4");
let count4 = document.querySelector(".count4");

let btnAdd5 = document.querySelector("#add5");
let btnSubtract5 = document.querySelector("#subtract5");
let count5 = document.querySelector(".count5");

let btnAdd6 = document.querySelector("#add6");
let btnSubtract6 = document.querySelector("#subtract6");
let count6 = document.querySelector(".count6");

const progressBar = document.querySelector(".progressbar");

const avail = document.querySelector(".avail");

let per = 100;

/*frist button*/
btnAdd.addEventListener("click", () => {
  if (per <= 0) return;
  count.value = parseInt(count.value) + 1;

  per--;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

btnSubtract.addEventListener("click", () => {
  if(count.value == 0) return;
  if (per >= 100) return;
  count.value = parseInt(count.value) - 1;
  per++;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

/*Second button*/

btnAdd2.addEventListener("click", () => {
  if (per <= 0) return;
  count2.value = parseInt(count2.value) + 1;
  per--;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

btnSubtract2.addEventListener("click", () => {
  if(count2.value == 0) return;
  if (per >= 100) return;
  count2.value = parseInt(count2.value) - 1;
  per++;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

/*third button*/

btnAdd3.addEventListener("click", () => {
  if (per <= 0) return;
  count3.value = parseInt(count3.value) + 1;
  per--;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

btnSubtract3.addEventListener("click", () => {
  if(count3.value == 0) return;
  if (per >= 100) return;
  count3.value = parseInt(count3.value) - 1;
  per++;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

/*fourth button*/

btnAdd4.addEventListener("click", () => {
  if (per <= 0) return;
  count4.value = parseInt(count4.value) + 1;
  per--;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

btnSubtract4.addEventListener("click", () => {
  if(count4.value == 0) return;
  if (per >= 100) return;
  count4.value = parseInt(count4.value) - 1;
  per++;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

/*fifth button*/

btnAdd5.addEventListener("click", () => {
  if (per <= 0) return;
  count5.value = parseInt(count5.value) + 1;
  per--;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

btnSubtract5.addEventListener("click", () => {
  if(count5.value == 0) return;
  if (per >= 100) return;
  count5.value = parseInt(count5.value) - 1;
  per++;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

/*sixth button*/
btnAdd6.addEventListener("click", () => {
  if (per <= 0) return;
  count6.value = parseInt(count6.value) + 1;
  per--;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

btnSubtract6.addEventListener("click", () => {
  if(count6.value == 0) return;
  if (per >= 100) return;
  count6.value = parseInt(count6.value) - 1;
  per++;

  progressBar.style.width = per + "%";
  avail.innerText = per;
});

/*lead  button*/

const leadBtn = document.querySelector(".leader-btn");
const backBtn = document.querySelector(".back-btn");

const mainPage = document.querySelector("#main-container");
const leadPage = document.querySelector("#leaderpage");

const allhousmate = [""];

const candidates = ["dorathy", "prince", "nengi", "brighto", "erica", "praise"];
let arrObj = [];

// leaders board sorting
leadBtn.addEventListener("click", function () {
  mainPage.style.display = "none";
  leadPage.style.display = "flex";

  const allh = document.querySelectorAll(".housemates2");
  let arrObj = [];
  candidates.forEach((candidates, idx) => {
    let eachCan = document.querySelector(`.${candidates}`);
    let vtes = document.querySelector(`.count${idx + 1}`);
    let img = document.querySelector(`.img${idx + 1}`);
    console.log(vtes, eachCan, img);
    let obj = {
      name: candidates,
      votes: vtes.value,
      image: img.getAttribute("src"),
    };
    arrObj.push(obj);
  });

  const leadersbord = document.querySelector(".scoreboard");
  console.log(arrObj);
  let newLead = arrObj
    .sort((a, b) => a.votes - b.votes)
    .map((each) => {
      return ` <div class="housemates2">
        <div class="hm2">
        <div class="bio">
            <img src="${each.image}" alt=""><h3>${each.name}</h3>
        </div>
        <div class="main-score">
            <div class="score">${each.votes}</div>
        </div>
        </div>
    </div>`;
    })
    .join("");
  const lastP = arrObj.sort((a, b) => a.votes - b.votes)[0];

  leadersbord.innerHTML = newLead;
  document.querySelector(".tag").innerHTML = lastP.name + " has been evicted";
});

backBtn.addEventListener("click", function () {
  leadPage.style.display = "none";
  mainPage.style.display = "flex";
});
