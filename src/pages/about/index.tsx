import React, {useState} from 'react';

export const CustomComponent: React.FC = () => {
  const [val, setVal] = useState<String>('');
  const [isShow, setIsShow] = useState<Boolean>(false);
  const [arrTable, setArrTable] = useState<String[]>([]);

  const onChangeInput = e => {
    setVal(e.target.value);
  };

  const onClickExe = () => {
    const arr = [...Array(Number(val) * Number(val))].map(
      (_, index: number) => {
        return index.toString();
      },
    );

    setArrTable(arr);
    setIsShow(true);
  };

  console.log('arrTable', arrTable);
  // console.log('val', val);

  return (
    <>
      <input placeholder={'Please input number'} onChange={onChangeInput} />
      <br />
      <button onClick={onClickExe}>Exe</button>
      <br />
      <br />
      <br />
      {isShow && (
        <table>
          <tbody>
            {[...Array(Number(val))].map((_, index: number) => {
              return (
                <tr key={`first${index}`}>
                  {[...Array(Number(val))].map((_, indexSecond: number) => {
                    return (
                      <td key={`second${indexSecond}`}>
                        {arrTable[Number(indexSecond)]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2</td>
            <td>5</td>
            <td>8</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
            <td>9</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default React.memo(CustomComponent);
