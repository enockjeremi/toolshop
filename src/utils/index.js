export const totalSum = (array) => {
  if(Array.isArray(array)){
    return array.reduce((prev, next) => prev + next, 0);

  }
  return 'Is not Array!';
}

export const isEmpytArray = (array) => !Array.isArray(array) || array.length === 0;
