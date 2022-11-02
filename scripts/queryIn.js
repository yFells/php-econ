
/**
 * 
 * @param {String} url 
 * @param {object} options
 * @param {string} options.method
 * @param {object} options.body
 * @param {object} options.headers 
 * @returns 
 */
export async function query(url, {extraHeaders, body, method, ...args} = {}) {
  try {
    const response = await fetch(url, {
      method: method || "GET",
      headers: {
        ...extraHeaders,
      },
      body
    });
    return {
      data: await response.json(),
      error: null,
    }
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: error,
    }
  }

}
