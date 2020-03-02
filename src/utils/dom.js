export function getElmComputedStyle(elm, pseudoElm, cssProp) {
  return window.getComputedStyle(elm, pseudoElm).getPropertyValue(cssProp)
}

export function toggleClassName(elm, className) {
  const isClassIncluded = elm.className.includes(className)

  if (isClassIncluded) {
    elm.classList.remove("open")
  } else {
    elm.classList.add("open")
  }
}
