
/**
 * 
 * @param {ui} string 
 * @returns {string}
 */
export const html = (strings, ...values) => String.raw({ raw: strings }, ...values);