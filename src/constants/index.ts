export const BOARD_W = 10;
export const BOARD_H = 20;
export const BOARD_COLOR = 'transparent';

export const PIECES = {
  R: {
    color: 'red',
    shape: [[1, 1, 1]],
  },
  L: {
    color: 'green',
    shape: [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
  },
  T: {
    color: 'yellow',
    shape: [
      [1, 1, 1],
      [0, 1, 0],
    ],
  },
};
