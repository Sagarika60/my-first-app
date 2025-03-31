//import 'bootstrap/dist/css/bootstrap.min.css';
 import './JsxExample.css';
function JsxExample() {
    // ----------------------------------------------Using .map function----------------------------------------------------
       
          const subjects = ['Maths', 'Science', 'English', 'Hindi', 'Sanskrit'];
          const colors = ['red', 'green', 'blue', 'yellow', 'black'];
          return (
              <>
                  {
                      subjects.map((item, index) => {
                        return(
                           <p key={index}  style={{color: colors[index]}}>{item.toUpperCase()}</p>
                        )
                      })
                  }
              </>
          )
    // ----------------------------------------------Using Bootstrap----------------------------------------------------
    // const number = 50;
    // if (number % 2 == 0) {
    //     return (
    //         <p className='text text-success'>{number} is a Even number</p>
    //     )
    // } else {
    //     return (
    //         <p className='text text-danger'>{number} is a Odd number</p>
    //     )
    // }

    // ----------------------------------------------number is even or odd----------------------------------------------
    // const number = 11;
    // if (number % 2 == 0) {
    //     return (
    //         <h1>{number} is a Even number</h1>
    //     )
    // } else {
    //     return (
    //         <h1>{number} is a Odd number</h1>
    //     )
    // }

    // ----------------------------------------------number is prime or not----------------------------------------------

    // const x = 11;
    // let count = 0;
    // for (let i = 1; i <= x; i++) {
    //     if (x % i == 0) {
    //         count++;
    //     }
    // }

    // return (
    //     <>
    //         {
    //             count == 2 ? (<h1>{x} is a Prime number</h1>) : (<h1>{x} is not a Prime number</h1>)
    //         }

    //     </>
    // )
}
export default JsxExample;