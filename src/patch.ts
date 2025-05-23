
export async function patchCallback (element: any, name: string, ...callbacks: CallableFunction[]) {

  element.callbacks = element.callbacks || {};

  if (!element.callbacks[name]) {
    let originalCallback = element[name].bind(element)
    element.callbacks[name] = []
    element[name] = function () {
      if (!element.callbacks[name].length)
        return originalCallback.apply(element, arguments)
      else
        return element.callbacks[name].forEach((fn: { apply: (arg0: any, arg1: IArguments) => any; }) => fn.apply(element, arguments))
    }
  }
  else {
    for (let callback of callbacks) {
      let handler = callback.bind(element)
      element.callbacks[name].unshift(handler)
    }
  }
}

export function patchDetachCallback (element: any, ...fn: any[]) {
  patchCallback(element, 'remove', ...fn)
}
