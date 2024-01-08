// 인터페이스 정의
interface MyInterface {
    title: string;
    content: string;
    btn: string;
    image: string;
    submit: string;

}

export default function Write({ title, content, btn, image, submit }: MyInterface) {
    return (

        <div>
            <div>{title}</div>

            <div>{content}</div>

            <div>{btn}</div>

            <div>{image}</div>

            <div>{submit}</div>

        </div>

    )


}