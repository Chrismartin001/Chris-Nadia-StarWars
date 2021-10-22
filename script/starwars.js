function openNav() {
  if (x.matches) {
    document.getElementById("Sidenav").style.width = "20%";
  } else {
    document.getElementById("Sidenav").style.width = "100%";
  }
}

let x = window.matchMedia("(min-width: 768px)");

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
}
