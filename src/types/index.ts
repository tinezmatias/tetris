export type Board = Array<Row>;
export type Row = Array<Cell>;

export interface Cell {
  color: string;
  fixed: boolean;
  filled: boolean;
}

export enum GameStatus {
  PENDING,
  PLAYING,
  OVER,
}

export interface GameState {
  status: GameStatus;
  piece: Piece;
  position: Position;
  board: Board;
}

export interface Piece {
  color: string;
  shape: Array<Array<number>>;
}

export interface Position {
  x: number;
  y: number;
}

export enum GameActionTypes {
  START,
  RESET,
  MOVE,
  ROTATE,
}

export interface Movement {
  dx: number;
  dy: number;
}

interface StartAction {
  type: GameActionTypes.START;
  payload?: undefined;
}

interface ResetAction {
  type: GameActionTypes.RESET;
  payload?: undefined;
}

interface RotateAction {
  type: GameActionTypes.ROTATE;
  payload?: undefined;
}

interface MoveAction {
  type: GameActionTypes.MOVE;
  payload: Movement;
}

export type GameActions = StartAction | ResetAction | RotateAction | MoveAction;
