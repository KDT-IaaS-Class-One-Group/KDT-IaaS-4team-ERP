/**
 * popLastIndex
 * url을 추출하여 마지막 인덱스를 반환하는 함수
 *
 * @example
 * useEffect(() => {
 *  const urlLastIndex = urlLastIndexPop();
 *  console.log(urlLastIndex);
 * },[]); // 마운트 될 때 실행
 *
 * @param {string} lastIndex
 * @returns {string} reviewId
 */
export const urlLastIndexPop = () => {
  const lastIndex = window.location.pathname.split("/").pop();
  return lastIndex;
};
