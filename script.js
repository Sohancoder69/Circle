const arr = [
  "Arvind",
  "Arnav",
  "Navesh",
  "Ramesh",
  "Rajhiv",
  "Rabt"
]

setInterval(() => {
  const random = arr[(Math.floor((Math.random() * Date.now()) % arr.length))]
  const startbtn = document.getElementById("startbtn")
  const stopbtn = document.getElementById('stopbtn')
  const slowbtn = document.getElementById('slowbtn')
  const fastbtn = document.getElementById('fastbtn')
  const body = document.getElementById("circle-body")

  const ballbtn = document.getElementById("ball")

  startbtn.addEventListener("click", function () {
    ballbtn.style.animationPlayState = "running"
  })

  stopbtn.addEventListener("click", function () {
    ballbtn.style.animationPlayState = "paused"
    Name.style.animationPlayState = "paused"
  })

  slowbtn.addEventListener("click", function () {
    ballbtn.style.animationDuration = "5s"
  })

  fastbtn.addEventListener("click", function () {
    ballbtn.style.animationDuration = "1s"
  })

  document.addEventListener('keydown', event => {
    switch (event.key) {
      case "ArrowUp":
        ballbtn.style.animationDuration = "1s";
        break;
      case "ArrowDown":
        ballbtn.style.animationDuration = "5s";
        break;
    }
  })

  const Name = document.getElementById('name')
  Name.style.color = "red"
  let top = Math.floor((Math.random() * 70) % 70)
  Name.style.position = "absolute"
  Name.style.top = `${top}%`
  document.getElementById('name').textContent = random
}, 2000);


function zoomProperty(x) {
  let zoom = window.getComputedStyle(document.getElementById('ball')).zoom
  zoom = zoom.replace(/\D/g, "")
  zoom = parseFloat(zoom)
  if (x == 1) {
    zoom = zoom + 2;
    document.getElementById("ball").style.zoom = zoom + "0%"
  }
  else {
    zoom = zoom - 2;
    document.getElementById("ball").style.zoom = zoom + "0%"
  }
}



