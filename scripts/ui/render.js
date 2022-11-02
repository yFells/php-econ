import { $ } from "./getElement.js";
/**
 * 
 * @param {string} id 
 * @param {string} content 
 */
export function render(id, content) {
  const html = $(id);
  html.innerHTML = content;
}