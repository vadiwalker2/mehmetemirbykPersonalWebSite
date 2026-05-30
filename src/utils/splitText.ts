export function splitTextToChars(element: Element) {
  const text = element.textContent || ''
  element.textContent = ''
  
  text.split('').forEach((char) => {
    const span = document.createElement('span')
    span.textContent = char === ' ' ? '\u00A0' : char
    span.style.display = 'inline-block'
    span.style.overflow = 'hidden'
    element.appendChild(span)
  })
  
  return element.querySelectorAll('span')
}
