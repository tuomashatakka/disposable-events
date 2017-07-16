
export async function patchCallback (element, name, ...callbacks) {

  element.callbacks = element.callbacks || {};

  if (!element.callbacks[name]) {
    let originalCallback = element[name].bind(element)
    element.callbacks[name] = []
    element[name] = function () {
      if (!element.callbacks[name].length)
        return originalCallback.apply(element, arguments)
      else
        return element.callbacks[name].forEach(fn => fn.apply(element, arguments))
    }
  }
  else {
    for (let callback of callbacks) {
      let handler = callback.bind(element)
      element.callbacks[name].unshift(handler)
    }
  }
}

export function patchDetachCallback (element, ...fn) {
  patchCallback(element, 'remove', ...fn)
}
