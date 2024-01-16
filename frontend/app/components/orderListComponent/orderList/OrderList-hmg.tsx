// ChildComponent.tsx
import React from 'react';

export interface DataType {
  id: number;
  name: string;
  // 추가 필드들의 타입 정의
}

interface ChildProps {
  data: DataType;
}

const ChildComponent: React.FC<ChildProps> = ({ data }) => {
  return (
    <div>
      <h3>자식 컴포넌트</h3>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      {/* 추가 필드들에 대한 UI 표시 */}
    </div>
  );
};

export default ChildComponent;