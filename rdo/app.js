// let items = [{
//         id: 0,
//         item_name: "Celtic Music Radio",
//         item_link: "http://stream.celticmusicradio.net:8000/celticmusic.mp3"
//     },
//     {
//         id: 1,
//         item_name: "Radio Open Source",
//         item_link: "https://media.blubrry.com/radioopensource/content.blubrry.com/radioopensource/200702-OS-PODCAST-JamesBaldwin.mp3"
//     }
// ]

let items = JSON.parse(localStorage.getItem("items")) || [];

let itemList = document.querySelector("#itemList");

let form = document.querySelector("form");
let itemName = document.querySelector("#item_name");
let itemLink = document.querySelector("#item_url");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let itemObject = {
    id: items.length,
    item_name: itemName.value,
    item_link: itemLink.value,
  };
  items = [itemObject, ...items];
  itemName.value = "";
  itemLink.value = "";
  render();
});

const render = () => {
  itemList.innerHTML = "";
  items.forEach((item) => {
    itemList.innerHTML += `
        <tr class="item">
          <th scope="row">
            <button id="id${item.id}" type="button" class="btn btn-outline-primary rdo" data-url="${item.item_link}">
              <i class="fa fa-play" aria-hidden="true"></i>
            </button>
          </th>
          <td class="align-middle">${item.item_name}</td>
          <td class="align-middle text-right">
            <div class="del btn" onclick="del(${item.id})">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            <div/>
          </td>
        </tr>
        `;
  });
  localStorage.setItem("items", JSON.stringify(items));
};

render();

let del = (id) => {
  items = items.filter((item) => item.id !== id);
  render();
};

//sw initialization
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((sw) => console.log("Service work registration successful"))
    .catch((err) => console.log("Error"));
} else {
  console.log("Service Worker not supported!");
}

let haltedPrompt;
const installButton = document.getElementById("install_button");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  haltedPrompt = e;
  installButton.style.display = "block";
});


installButton.addEventListener("click", () => {
  if (!haltedPrompt) {
    return;
  }
  haltedPrompt.prompt();
  haltedPrompt.userChoice.then((result) => {
    console.log("userChoice", result);
    haltedPrompt = null;
    installButton.style.display = "none";
  });
});

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);
