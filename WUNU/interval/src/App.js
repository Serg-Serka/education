import React from 'react';

function App() {

    const [res1, setRes1] = React.useState([]);
    const [res2, setRes2] = React.useState([]);

    const [res3, setRes3] = React.useState([]);
    const [res4, setRes4] = React.useState([]);

    // ([3,8] - [0,4]) /([ -1,1] - [-3,3]) - [0,3] * [-2,2]
    // [3,4] - (([5,6] /[2,3] + [0,8]) / [-1,1] - [2,3])

    let intervals1 = [
        [3, 8],
        [0, 4],
        [-1, 1],
        [-3, 3],
        [0, 3],
        [-2, 2]
    ];

    let intervals2 = [
        [3, 4],
        [5, 6],
        [2, 3],
        [0, 8],
        [-1, 1],
        [2, 3]
    ];

    const add = (a, b) => {
        return [a[0] + b[0], a[1] + b[1]];
    };

    const deduct = (a, b) => {
        return [a[0] - b[1], a[1] - b[0]];
    };

    const multiply = (a, b) => {
        return [
            Math.min(a[0] * b[0], a[0] * b[1], a[1] * b[0], a[1] * b[1]),
            Math.max(a[0] * b[0], a[0] * b[1], a[1] * b[0], a[1] * b[1])
        ];
    };

    const divide = (a, b) => {
        return [
            Math.min(a[0] / b[0], a[0] / b[1], a[1] / b[0], a[1] / b[1]),
            Math.max(a[0] / b[0], a[0] / b[1], a[1] / b[0], a[1] / b[1])
        ];
    };

    const calculate = () => {
        setRes1(
            divide(
                deduct(intervals1[0], intervals1[1]),
                deduct(
                    deduct(intervals1[2], intervals1[3]),
                    multiply(intervals1[4], intervals1[5])
                )
            )
        );

        setRes2(
            deduct(
                intervals2[0],
                deduct(
                    divide(
                        add(
                            divide(intervals2[1], intervals2[2]),
                            intervals2[3]
                        ),
                        intervals2[4]
                    ),
                    intervals2[5]
                )
            )
        );

        setRes3(
            deduct(res1, [-3, 3])
        );

        setRes4(
            deduct(res2, [-3, 3])
        );
    };


  return (
      <div className="App">
          <button onClick={calculate} style={{borderColor: 'black'}}>Calculate</button>

          <h2>Res1:</h2>
          <span>[{res1[0]};{res1[1]}]</span>

          <h2>Res2:</h2>
          <span>[{res2[0]};{res2[1]}]</span>

          <h2>Res1 after deduction:</h2>
          <span>[{res3[0]};{res3[1]}]</span>

          <h2>Res2 after deduction:</h2>
          <span>[{res4[0]};{res4[1]}]</span>
      </div>
  );
}

export default App;
