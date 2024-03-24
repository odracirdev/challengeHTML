const button = document.getElementById('confetti')
const canvas = document.getElementById('custom_canvas')

const jsConfetti = new JSConfetti({ canvas })

button.addEventListener('click', () => {
  jsConfetti.addConfetti()
})