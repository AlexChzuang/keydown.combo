const comboList = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']
let keydownToPush = []
window.addEventListener('keydown', function (e) {
  keydownToPush.push(e.code)
  let input = keydownToPush.toString()
  if (input.includes(comboList)) {
    alert('安餒母湯喔！')
    keydownToPush = []
  }
})