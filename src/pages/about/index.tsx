import useDeviceDetector from 'components/hook/detext';
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
  const {isSp} = useDeviceDetector();

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
      console.log('event Start', e);

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
        console.log('event End', e.target.innerHTML);

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

  const onTouchStart = (e: any) => {
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
  };

  const onTouchEnd = (event: any) => {
    try {
      const currentId_X = Math.round(
        (Number(event.target.style.top.replace('px', '')) - 50) / 40,
      );

      const currentId_Y = Math.round(
        (Number(event.target.style.left.replace('px', '')) - 50) / 40,
      );

      const box = document.getElementById(`${currentId_X}_${currentId_Y}`);

      if (!box) {
        event.target.style.top = position.x * 40 + 50 + 'px';
        event.target.style.left = position.y * 40 + 50 + 'px';

        return;
      }

      const tempArr = [...arrTable];

      tempArr[position.x][position.y] = Number(box.innerHTML);
      tempArr[currentId_X][currentId_Y] = position.val;
      setArrTable(tempArr);

      box.style.top = currentId_X * 40 + 50 + 'px';
      box.style.left = currentId_Y * 40 + 50 + 'px';

      event.target.style.top = position.x * 40 + 50 + 'px';
      event.target.style.left = position.y * 40 + 50 + 'px';
    } catch (error) {
      throw new Error(error);
    }
  };

  const onTouchMove = (event: any) => {
    try {
      let touchLocation;
      if (isSp) {
        touchLocation = event.targetTouches[0];
      } else {
        touchLocation = event;
      }

      const box = document.getElementById(`${position.x}_${position.y}`);
      // const box = document.getElementById(`test`);

      // assign box new coordinates based on the touch.
      box.style.left = touchLocation.pageX - 20 + 'px';
      box.style.top = touchLocation.pageY - 20 + 'px';
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
      {isShow &&
        [...Array(Number(val.current))].map((_, i: number) => {
          return [...Array(Number(val.current))].map((_, j: number) => {
            return (
              <div
                style={{
                  border: '1px solid',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: i * 40 + 50 + 'px',
                  left: j * 40 + 50 + 'px',
                  height: '40px',
                  width: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={`items${i}${j}`}
                id={`${i}_${j}`}
                draggable={true}
                onDragStart={handleOnDrag}
                onDrop={handleOnDrop}
                onDragOver={allowDrop}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {arrTable[Number(i)][Number(j)]}
              </div>
            );
          });
        })}
    </>
  );
};

export default React.memo(CustomComponent);
