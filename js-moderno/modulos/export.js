export   function input(attributes) {
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
  }

export function label(attributes) {
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
  }