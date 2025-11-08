const toggle = document.getElementById('dark');
const body = document.body;
const bck = document.querySelector('.bck');
const astro = document.querySelector('.e4');
console.log(toggle)

if (localStorage.getItem('theme') === 'darck') {
  body.classList.add('darck');
  bck.style.backgroundImage = "url('./header_v2.svg')";
  astro.style.backgroundImage = "url(./sol.svg)";
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('darck');
    bck.style.backgroundImage = "url('./header_v2.svg')";
    astro.style.backgroundImage = "url(./sol.svg)";
    localStorage.setItem('theme', 'darck');
  } else {
    body.classList.remove('darck');
    bck.style.backgroundImage = "url('./header.svg')";
    astro.style.backgroundImage = "url(./lua.svg)";
    localStorage.setItem('theme', 'light');
  }
});

const char = document.getElementById('graf');
const soft = document.getElementsByName("fluf")[0];
const hard = document.getElementsByName("rock")[0];
const modsof = document.getElementsByClassName("chego")[0];
const mobhad = document.getElementsByClassName("chega")[0];

console.log(char)

soft.addEventListener('click', () => {
  char.classList.add("sskil")
  char.classList.remove("hskil")
  soft.classList.add("dets")
  hard.classList.add("det")
  soft.classList.remove("det")
  hard.classList.remove("dets")
  modsof.classList.add("treta")
  modsof.classList.remove("treta2")
  mobhad.classList.remove("treta")
  mobhad.classList.add("treta2")
  document.querySelector('.selects').style.width = '70%'
  document.querySelector('.selects').style.opacity = '1'
  document.querySelector('.selecth').style.width = '0'
})

hard.addEventListener('click', () => {
  char.classList.remove("sskil")
  char.classList.add("hskil")
  hard.classList.add("dets")
  soft.classList.add("det")
  hard.classList.remove("det")
  soft.classList.remove("dets")
  mobhad.classList.add("treta")
  mobhad.classList.remove("treta2")
  modsof.classList.remove("treta")
  modsof.classList.add("treta2")
  document.querySelector('.selecth').style.width = '70%'
  document.querySelector('.selecth').style.opacity = '1'
  document.querySelector('.selects').style.width = '0'
})

window.addEventListener('load', () => {
  if (char.classList.contains('hskil')) {
    hard.classList.add("dets")
    soft.classList.add("det")
    hard.classList.remove("det")
    soft.classList.remove("dets")
    document.querySelector('.selecth').style.width = '70%'
    document.querySelector('.selecth').style.opacity = '1'
    document.querySelector('.selects').style.width = '0'
  }
  else {
    soft.classList.add("dets")
    hard.classList.add("det")
    soft.classList.remove("det")
    hard.classList.remove("dets")
    modsof.classList.add("treta")
    modsof.classList.remove("treta2")
    mobhad.classList.remove("treta")
    mobhad.classList.add("treta2")
    document.querySelector('.selects').style.width = '70%'
    document.querySelector('.selects').style.opacity = '1'
    document.querySelector('.selecth').style.width = '0'
  }
})

let lastcrol = 500;
const rol = document.querySelector('.scrolagem');
console.log(rol)

window.addEventListener('scroll', () => {
  const currentcrol = window.pageYOffset;

  if (currentcrol > lastcrol) {
    document.querySelector('.scrolagem').style.opacity = 1;
  }

  else {
    document.querySelector('.scrolagem').style.opacity = 0;
  }

  lastcrol = currentcrol;

})


const abrir = document.getElementById("contact");
const fechar = document.getElementById("close");
const dialog = document.getElementById("message");
const form = document.getElementById("dform");


window.addEventListener("load", () => {
  if (localStorage.getItem("modalA") === "true") {
    dialog.showModal()
    body.classList.add("none")
    dialog.classList.add("mes")
    form.style.display = 'grid'
  }
  else {
    dialog.close()
    body.classList.remove("none")
    dialog.classList.remove("mes")
    localStorage.setItem("modalA", "false")
    form.style.display = 'none'
  }
})

abrir.addEventListener("click", () => {
  dialog.showModal()
  body.classList.add("none")
  dialog.classList.add("mes")
  form.style.display = 'grid'
  localStorage.setItem("modalA", "true")
})

fechar.addEventListener("click", () => {
  dialog.close()
  body.classList.remove("none")
  dialog.classList.remove("mes")
  form.style.display = 'none'
  localStorage.setItem("modalA", "false")
})


form.addEventListener("submit", () => {

  const nome = form.nomeUS.value;
  const email = form.emailUS.value;
  const assunto = form.assunto.value;


  body.classList.remove("none")
  dialog.classList.remove("mes")
  localStorage.setItem("modalA", "false")

  dialog.close();

  form.reset();

  alert("E-mail enviado com sucesso!")
})



