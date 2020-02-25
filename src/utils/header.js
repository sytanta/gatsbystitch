export const stickyClass = "opaque"

export default function checkStickyElm(
  stickyElmID,
  referenceElmID
) {
  if (!stickyElmID || !referenceElmID) {
    return
  }

  const scroll =
    window.requestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60)
    }

  const stickyElm = document.getElementById(stickyElmID)
  const referenceElm = document.getElementById(referenceElmID)

  loop(stickyElm, referenceElm, scroll)
}

function loop(stickyElm, referenceElm, scrollFn) {
  if (isElementOutOfViewport(referenceElm)) {
    stickyElm.classList.add(stickyClass)
  } else {
    stickyElm.classList.remove(stickyClass)
  }

  scrollFn(loop.bind(this, stickyElm, referenceElm, scrollFn))
}

function isElementOutOfViewport(el) {
  const rect = el.getBoundingClientRect()

  return rect.top <= 0 && rect.bottom <= 0
}
