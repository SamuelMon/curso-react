export const checkWinner = (boardToCheck, index, numTurn) => {
  if (numTurn > 4) {
    const lastPlay = boardToCheck[index];
    switch (index) {
      case 0:
        if (
          (lastPlay === boardToCheck[1] && lastPlay === boardToCheck[2]) ||
          (lastPlay === boardToCheck[4] && lastPlay === boardToCheck[8]) ||
          (lastPlay === boardToCheck[3] && lastPlay === boardToCheck[6])
        ) {
          return lastPlay;
        }
        break;
      case 1:
        if (
          (lastPlay === boardToCheck[0] && lastPlay === boardToCheck[2]) ||
          (lastPlay === boardToCheck[4] && lastPlay === boardToCheck[7])
        ) {
          return lastPlay;
        }
        break;
      case 2:
        if (
          (lastPlay === boardToCheck[1] && lastPlay === boardToCheck[0]) ||
          (lastPlay === boardToCheck[4] && lastPlay === boardToCheck[6]) ||
          (lastPlay === boardToCheck[5] && lastPlay === boardToCheck[8])
        ) {
          return lastPlay;
        }
        break;
      case 3:
        if (
          (lastPlay === boardToCheck[0] && lastPlay === boardToCheck[6]) ||
          (lastPlay === boardToCheck[4] && lastPlay === boardToCheck[5])
        ) {
          return lastPlay;
        }
        break;
      case 4:
        if (
          (lastPlay === boardToCheck[0] && lastPlay === boardToCheck[8]) ||
          (lastPlay === boardToCheck[1] && lastPlay === boardToCheck[7]) ||
          (lastPlay === boardToCheck[2] && lastPlay === boardToCheck[6]) ||
          (lastPlay === boardToCheck[3] && lastPlay === boardToCheck[5])
        ) {
          return lastPlay;
        }
        break;
      case 5:
        if (
          (lastPlay === boardToCheck[2] && lastPlay === boardToCheck[8]) ||
          (lastPlay === boardToCheck[4] && lastPlay === boardToCheck[3])
        ) {
          return lastPlay;
        }
        break;
      case 6:
        if (
          (lastPlay === boardToCheck[0] && lastPlay === boardToCheck[3]) ||
          (lastPlay === boardToCheck[4] && lastPlay === boardToCheck[2]) ||
          (lastPlay === boardToCheck[7] && lastPlay === boardToCheck[8])
        ) {
          return lastPlay;
        }
        break;
      case 7:
        if (
          (lastPlay === boardToCheck[6] && lastPlay === boardToCheck[8]) ||
          (lastPlay === boardToCheck[4] && lastPlay === boardToCheck[1])
        ) {
          return lastPlay;
        }
        break;
      case 8:
        if (
          (lastPlay === boardToCheck[0] && lastPlay === boardToCheck[4]) ||
          (lastPlay === boardToCheck[6] && lastPlay === boardToCheck[7]) ||
          (lastPlay === boardToCheck[2] && lastPlay === boardToCheck[5])
        ) {
          return lastPlay;
        }
        break;

      default:
        break;
    }
  }
  return null;
};
