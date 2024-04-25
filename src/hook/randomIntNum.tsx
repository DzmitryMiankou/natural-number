export const useRandomInt = ({ min, max }: { min: number; max: number }) => {
  function randomInteger(min: number, max: number): number {
    const rand: number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  let n1: number = 0;
  let n2: number = 0;

  for (let i = 0; n2 === n1; i++) {
    n1 = randomInteger(min, max);
    n2 = randomInteger(min, max);
  }

  const resultNumbers: {
    [key: number]: Array<number>;
  } = {
    [n1]: [],
    [n2]: [],
  };

  function pushInArr(el: number) {
    let l = el;
    let n = 2;

    function getFactorization() {
      if (l % n !== 0) {
        n = n + 1;
      }
      if (l % n === 0) {
        resultNumbers[el].push(n);
        l = l / n;
        getFactorization();
      }
    }
    getFactorization();
    /* for (let i: number = 2; i <= res; i++) { let res: number = el;
      if (res % i === 0) {
        //console.log(i);
        res = res / i;
        resultNumbers[el].push(i);
      }
    }*/
  }

  pushInArr(n1);
  pushInArr(n2);
  return resultNumbers;
};
