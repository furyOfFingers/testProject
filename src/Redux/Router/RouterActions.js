import { CHANGE_PATH } from './Consts';

/** Экшен на изменеие url
 *
 * @param {string} path Передаваемый url.
 */
export function changePathAction(path) {
  return {
    type: CHANGE_PATH,
    path: path
  };
}
