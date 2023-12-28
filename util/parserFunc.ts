export default async function a(jsonPath: string): Promise<any> {
  try {
    const response = await fetch(jsonPath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error('Error fetching or parsing the JSON file:', e);
  }
}

// 예제 사용법:
// a('path/to/your/jsonfile.json').then(data => {
//   console.log(data); // 여기서 'data'는 JSON 파일의 내용을 담은 객체입니다.
// });