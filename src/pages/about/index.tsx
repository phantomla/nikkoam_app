import React, {useCallback, useRef, useState} from 'react';

export const CustomComponent: React.FC = () => {
  const val = useRef<String>('');
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    val: 0,
  });
  const [isShow, setIsShow] = useState<Boolean>(false);
  const [arrTable, setArrTable] = useState<number[][]>([]);

  const onChangeInput = useCallback((e: any) => {
    try {
      if (!e.target.value) return;
      val.current = e.target.value;
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const onClickExe = useCallback(() => {
    try {
      if (!val.current) return;
      const arr = [...Array(Number(val.current))].map((_, i: number) => {
        return [...Array(Number(val.current))].map((_, j: number) => {
          if (j % 2 === 0) {
            return j * Number(val.current) + i + 1;
          } else {
            return (j + 1) * Number(val.current) - i;
          }
        }, []);
      }, []);

      setArrTable(arr);
      setIsShow(true);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const handleOnDrag = React.useCallback((e: any) => {
    try {
      const id: string = e.target.id;
      const arr = id.split('_');
      setPosition({
        x: Number(arr[0]),
        y: Number(arr[1]),
        val: Number(e.target.innerHTML),
      });
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const handleOnDrop = React.useCallback(
    (e: any) => {
      try {
        const id: string = e.target.id;
        const arr = id.split('_');
        const value = e.target.innerHTML;
        const tempArr = [...arrTable];

        tempArr[position.x][position.y] = Number(value);
        tempArr[arr[0]][arr[1]] = position.val;
        setArrTable(tempArr);
      } catch (error) {
        throw new Error(error);
      }
    },
    [arrTable, position],
  );

  const allowDrop = (e: any) => {
    try {
      e.preventDefault();
    } catch (error) {
      throw new Error(error);
    }
  };

  const onEnterEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      if (event.key === 'Enter') {
        onClickExe();
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const onKeyDownEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      if (event.key === 'Enter') {
        onClickExe();
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <input
        placeholder={'Please input number'}
        onChange={onChangeInput}
        onKeyUp={onEnterEvent}
        onKeyDown={onKeyDownEvent}
        type="number"
      />
      <br />
      <button onClick={onClickExe}>Exe</button>
      <br />
      <br />
      <br />
      {
        isShow &&
          // <table>
          //   <tbody>
          [...Array(Number(val.current))].map((_, i: number) => {
            return (
              <tr key={`first${i}`}>
                {[...Array(Number(val.current))].map((_, j: number) => {
                  return (
                    <td
                      style={{
                        border: '1px solid',
                        padding: '10px',
                        textAlign: 'center',
                      }}
                      key={`second${j}`}
                      id={`${i}_${j}`}
                      draggable={true}
                      onDragStart={handleOnDrag}
                      onDrop={handleOnDrop}
                      onDragOver={allowDrop}
                    >
                      {arrTable[Number(i)][Number(j)]}
                    </td>
                  );
                })}
              </tr>
            );
          })
        //   </tbody>
        // </table>
      }
      <td draggable={true}>12312323</td>
      <span draggable={true}>12312323</span>
    </>
  );
};

export default React.memo(CustomComponent);
