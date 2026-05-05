export function merge(c1: number[], c2: number[], c3: number[]): number[] {
  const result: number[] = [];

  let i = 0;
  let j = c2.length - 1; // สำคัญ!
  let k = 0;

  while (i < c1.length || j >= 0 || k < c3.length) {
    const v1 = i < c1.length ? c1[i]! : Infinity;
    const v2 = j >= 0 ? c2[j]! : Infinity;
    const v3 = k < c3.length ? c3[k]! : Infinity;

    const min = Math.min(v1, v2, v3);

    result.push(min);

    if (min === v1) i++;
    else if (min === v2) j--;
    else k++;
  }

  return result;
}

if (require.main === module) {
  console.log(
    merge([1,4,7], [10,8,6,2], [3,5,9])
  );
}