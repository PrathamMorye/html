// let btn = document.querySelector("#button-addon2");
// let ul = document.querySelector("ul");
// let at = document.querySelector("#alert");

// at.style.display = "none";

// btn.addEventListener("click", function () {
//   let i = document.querySelector("input");
//   let li = document.createElement("li");
//   let del = document.createElement("button");

//   del.innerText = "Delete";
//   del.classList.add("btn", "btn-outline-danger","delete");

//   li.classList.add("list-group-item");
//   li.textContent = i.value;

//   li.append(del);
//   ul.append(li);

//   i.value = "";
// });

// ul.addEventListener("click", function (event) {
//   if (event.target.classList.contains("delete")) {
//     event.target.parentElement.remove();
//     at.style.display = "block";

//     setTimeout(() => {
//         at.style.display = "none";
//     }, 1000);
//   }
// });

// at.addEventListener("click", function(event) {

//     if (event.target.parentElement.id === "alert") {
//         at.style.display = "none";
//     }
// })

// function savetoDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10);

//     if (internetSpeed < 4) {
//       reject("data not saved");
//     } else {
//       resolve("data saved");
//     }
//   });
// }

// savetoDB("pratham")
//   .then(() => {
//     console.log("data 1 saved successfully");
//     return savetoDB("Krishna");
//   })
//   .then(() => {
//     console.log("data2 saved");
//     return savetoDB("Morye");
//   })
//   .then(() => {
//     console.log("data3 saved");
//   })
//   .catch(() => {
//     console.log("data next data not saved");
//   });



// async function getData (url) {
//   try {
//     let res = await fetch(url);
//    // console.log(res);
//     let data = await res.json();
//    console.log(data.fact);
//   }catch (err) {
//     console.log(err);
//   }
// }

// let it1 = setInterval(() => {
//   getData(`https://catfact.ninja/fact`);
// }, 3000);


// setTimeout(() => {
//   clearInterval(it1);
// }, 10000)


let factDisplay = document.createElement("p");  // Create a paragraph to display facts
document.body.appendChild(factDisplay);         // Add it to the page

let stopButton = document.createElement("button"); // Stop button
stopButton.innerText = "Fetching Facts";
document.body.appendChild(stopButton);

let it1;

async function getData(url) {
  try {
    let res = await axios.get(url);
    return res.data.fact;   // Show fact in UI
  } catch (err) {
    return err
  }
}

// Start fetching every 2 seconds
// it1 = setInterval(() => {
//   getData(`https://catfact.ninja/fact`);
// }, 2000);


stopButton.addEventListener("click", async () => {
  let data = await getData(`https://catfact.ninja/fact`);
  factDisplay.innerText = `🐱 Fact: ${data} 😎`;
});

