

export const isObject = (obj: any): boolean  => {
    if (typeof obj !== 'object' || obj === null) {
        return false
    }

    let props = obj
    while (Object.getPrototypeOf(props) !== null) {
        props = Object.getPrototypeOf(props)
    }

    return Object.getPrototypeOf(obj) === props
}

export const  warning =  (message: string): void  => {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message)
    }
    /* eslint-enable no-console */
    try {
      throw new Error(message)
    } catch (e) { //
    }
}

