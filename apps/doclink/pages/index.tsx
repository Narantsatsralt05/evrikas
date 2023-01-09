import React from 'react';
import { useState } from 'react';
import { MockData } from '../utils/MockData';

export function Index() {
  const data = MockData.filter((el) => el.parentId === 'main');
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {data &&
          data.map((el: any) => {
            return <Element element={el} key={el._id} />;
          })}
      </div>
    </div>
  );
}

export const Element = ({ element }) => {
  const [data, setData] = useState<any>([]);
  const [isShow, setIsShow] = useState(false);
  const handlerClick = () => {
    setIsShow(!isShow);
    if (data.length === 0)
      setData(MockData.filter((el) => el.parentId === element._id));
  };
  return (
    <div
      style={{
        borderBottom: '1px solid gray',
        borderTop: '1px solid gray',
        width: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          gap: '6px',
        }}
        onClick={handlerClick}
      >
        <div>{element.name}</div>
      </div>
      {isShow && (
        <div
          style={
            data.length !== 0
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '6px',
                }
              : {}
          }
        >
          {data?.map((el: any) => (
            <Element key={el._id} element={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
