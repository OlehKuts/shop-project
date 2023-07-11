export const totalPriceCounter = (arr) => {
    const output =  arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount*currentValue.finalPrice,
        0
      );
    return output
}