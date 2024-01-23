/**
 * 해당 함수는 객체의 모든 값이 ""이 아닌지 확인하는 함수입니다.
 *
 * @param obj (키값 string, 밸류값 number | string | boolean)
 * @returns boolean (모든 것이 ""이 아니면 true, ""이 하나라도 있으면 false)
 */
export function checkAllValuesNotEmpty(
  obj: Record<string, number | string | boolean>
): boolean {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === "") {
      return false;
    }
  }
  return true;
}
