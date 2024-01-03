import Btn from "./Btn";
import Text from "./text";

export default function Area() {

    return (

        <>
            <Btn />
            {/* 속성 객체를 Text에서 받아온다/ */}
            <Text Str="바뀐 텍스트" />
        </>

    )

}