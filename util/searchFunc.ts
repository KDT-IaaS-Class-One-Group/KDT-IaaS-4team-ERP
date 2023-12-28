export default function b(obj: Record<string, unknown>, key: string): string | null {
  if (obj.hasOwnProperty(key)) {
    return String(obj[key]);
  } else {
    return null; // key가 없을 경우 null 반환
  }
}

// 예제 사용법:
// const exampleObj = { field: 'value', otherKey: 123 };
// const result = b(exampleObj, 'field');
// console.log(result); // 'value' 출력