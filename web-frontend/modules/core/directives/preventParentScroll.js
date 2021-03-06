/**
 * Because the scroll directive uses the wheel event it prevents all other elements
 * being able to scroll. This directive can be used on a child element that supports
 * scrolling, it makes sure that scrolling works and so that it doesn't scroll the
 * parent.
 */
export default {
  bind(el) {
    el.preventParentScrollDirectiveEvent = (event) => {
      event.stopPropagation()
    }
    el.addEventListener('wheel', el.preventParentScrollDirectiveEvent)
  },
  unbind(el) {
    el.removeEventListener('wheel', el.preventParentScrollDirectiveEvent)
  },
}
