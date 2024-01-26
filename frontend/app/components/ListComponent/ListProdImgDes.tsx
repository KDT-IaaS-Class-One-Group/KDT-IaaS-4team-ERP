import Image from "next/image";

/**
 * 리스트에 쓰이는 상품 이미지와 설명을 렌더링하는 컴포넌트입니다. , imgage태그의 기본 크기는 85px로 되어 있습니다.
 * 
 * @param prodImgUrl : 상품 이미지 url
 * @param prodDescription : 상품 설명
 * @param ImageSize : 상품 이미지의 크기 (기본값 85)
 * @returns : 상품 이미지와 설명을 렌더링합니다.
 */
export default function ListProdImgDes(prodImgUrl: string, prodDescription: string, ImageSize: number = 85) {
  return(
    <div className='flex justify-start items-center gap-6 w-2/5 h-full p-1'>
        <Image alt='' src={prodImgUrl} width={ImageSize} height={ImageSize} />
        <p className='productSub text-xs h-20 w-1/2 flex items-center'>{prodDescription}</p>
    </div>
  );
}