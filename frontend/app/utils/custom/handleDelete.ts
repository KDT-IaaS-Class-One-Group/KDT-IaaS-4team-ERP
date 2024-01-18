/**
 * 해당 id를 가진 element를 삭제하는 행동함수입니다.
 *
 * @param {string} index - 삭제할 element의 id
 * @returns {void} - 해당 id를 가진 element를 삭제한다.
 */
const handleDelete = (index: number) => {
  const indexString = index.toString();
  const element = document.getElementById(indexString);
  if (element) {
    element.remove();
  }
};
export default handleDelete;
