import checkWinner from './CheckWinners';
import { describe, it, expect } from "vitest";

describe('checkWinner', () => {
  it('returns the winner for horizontal line', () => {
    const tiles = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(checkWinner(tiles)).toEqual({ winner: 'X', combination: [0, 1, 2] });
  });

  it('returns the winner for diagonal line', () => {
    const tiles = ['O', null, null, null, 'O', null, null, null, 'O'];
    expect(checkWinner(tiles)).toEqual({ winner: 'O', combination: [0, 4, 8] });
  });

  it('returns null when there is no winner', () => {
    const tiles = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    expect(checkWinner(tiles)).toBe(null);
  });
});
