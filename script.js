let pocet = 0;
let ciel = 0;

noveZadanie();

function noveZadanie() {
  ciel = Math.floor(Math.random() * 5) + 3;

  document.getElementById("zadanie").innerHTML =
    "🎯 Postav vežu z " + ciel + " kociek";
}

function pridajKocku(farba) {
  const kocka = document.createElement("div");

  kocka.className = "lego " + farba;

  document.getElementById("veza").appendChild(kocka);

  pocet++;
}

function skontroluj() {
  const pocetKociek =
    document.getElementById("veza").children.length;

  if (pocetKociek === ciel) {
    document.getElementById("vysledok").innerHTML =
      "🏆 Výborne!";

    firework();
    playSuccessSound();
  } else {
    document.getElementById("vysledok").innerHTML =
      "🙂 Skús ešte raz!";
  }
}

function vymaz() {
  document.getElementById("veza").innerHTML = "";
  document.getElementById("vysledok").innerHTML = "";

  pocet = 0;

  noveZadanie();
}

function firework() {
  const container = document.getElementById("fireworks");

  for (let i = 0; i < 60; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    const colors = [
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
      "#ff8800"
    ];

    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    particle.style.left = "50%";
    particle.style.top = "50%";

    const x = (Math.random() - 0.5) * 800;
    const y = (Math.random() - 0.5) * 800;

    particle.animate(
      [
        {
          transform: "translate(0,0)",
          opacity: 1
        },
        {
          transform: `translate(${x}px, ${y}px)`,
          opacity: 0
        }
      ],
      {
        duration: 1500,
        easing: "ease-out"
      }
    );

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1500);
  }
}
function playSuccessSound() {
  document.getElementById("successSound").play();
}