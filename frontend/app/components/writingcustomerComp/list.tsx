// 인터페이스 정의
interface MyInterface {
    list1: string;
    list2: string;
    list3: string;
    list4: string;
    
  }

export default function List({list1, list2, list3, list4}:MyInterface) {
    return (

        <div> 
            <div>{list1}</div>
        
            <div>{list2}</div>

            <div>{list3}</div>

            <div>{list4}</div>

        </div>

    )


}