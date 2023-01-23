/////// gsap animasyon

gsap.from(".main__text", {
  opacity: 0,
  duration: 2,
  delay: 0.6,
  y: 35,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".main__button", {
  opacity: 0,
  duration: 2,
  delay: 0.6,
  y: 35,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".countdown", {
  opacity: 0,
  duration: 2,
  delay: 1.4,
  y: 35,
  ease: "expo.out",
  stagger: 0.2,
});

//////////// scroll reveal

const sr = ScrollReveal({
  duration: 2000,
  reset: false,
});

sr.reveal(".que-1", { origin: "left", distance: "10px", delay: 2 });
sr.reveal(".que-2", { origin: "right", distance: "10px", delay: 2 });
sr.reveal(".mizyon__vector", { origin: "right", distance: "100px", delay: 20 });
sr.reveal(".join__form", { origin: "right", distance: "5px", delay: 2 });

//////////////// timer burda olacak

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    // zaman değiştirmek için burdan ayarlayın
    dayMonth = "12/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText =
        Math.floor(distance / day) + " :"),
        (document.getElementById("hours").innerText =
          Math.floor((distance % day) / hour) + " :"),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        ));
    }, 0);
})();

//////// dil seçimi

let container = document.getElementById("select-container");
let items = container.getElementsByTagName("ul")[0].getElementsByTagName("li");
let selectedItem = items[0];

hideSelected();

function onSelect(item) {
  showUnselected();
  selectedItem.innerHTML = item.innerHTML;
  selectedItem.setAttribute(
    "lang-selection",
    item.getAttribute("lang-selection")
  );
  selectedItem.setAttribute("tooltip", item.getAttribute("tooltip"));
  hideSelected();
  unwrapSelector();
}

function unwrapSelector() {
  container.style.pointerEvents = "none";
  setTimeout(() => (container.style.pointerEvents = "auto"), 200);
}

function showUnselected() {
  let selectedLangCode = selectedItem.getAttribute("lang-selection");

  for (let i = 1; i < items.length; i++) {
    if (items[i].getAttribute("lang-selection") == selectedLangCode) {
      items[i].style.opacity = "1";
      items[i].style.display = "";
      break;
    }
  }
}

function hideSelected() {
  let selectedLangCode = selectedItem.getAttribute("lang-selection");

  for (let i = 1; i < items.length; i++) {
    if (items[i].getAttribute("lang-selection") == selectedLangCode) {
      items[i].style.opacity = "0";
      setTimeout(() => (items[i].style.display = "none"), 200);
      break;
    }
  }
}
