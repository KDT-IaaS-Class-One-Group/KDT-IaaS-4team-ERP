interface SendPaymentRequestOptions {
  processedData: any;
  token: string;
  endPoint: string;
  methodType: string;
}

/**
 * 결제 요청을 보내는 함수
 *
 * 사용예시)
 * const handleCartToPayment = async () => {
 * const processedData = dataProcessing(); // 데이터 가공 로직이 필수로 필요
 * const token = localStorage.getItem("token"); // 사용자 토큰 가져오기, 선언 필수로 필요
 * try {
 *  const result = await sendRequest(processedData, token);
 *  console.log('Payment Success:', result);
 *  // 추가적인 성공 처리 로직
 *  } catch (error) {
 *    // 에러 처리 로직
 *  }
 * };
 *
 *
 * @param processedData {object} - 결제 요청에 필요한 데이터
 * @param token {string} - 토큰
 * @param endPoint {string} - 결제 요청을 보낼 엔드포인트
 * @param methodType {string} - 결제 요청을 보낼 메소드 타입
 *
 * @returns 요청 함수
 */
export const sendRequest = async ({
  processedData,
  token,
  endPoint,
  methodType,
}: SendPaymentRequestOptions) => {
  try {
    const response = await fetch(endPoint, {
      method: methodType,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(processedData),
    });

    if (!response.ok) {
      throw new Error("Payment request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Payment Error:", error);
    throw error;
  }
};
