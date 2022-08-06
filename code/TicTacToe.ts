type ReplaceItemInArr<Index extends number, Arr extends any[], Ele, NextIndex extends number = 0, NewArr extends any[] = []> = 
   Arr['length'] extends 0 
    ? NewArr 
    : Arr extends [infer First, ...infer Rest] 
      ? Index extends NextIndex ? [...NewArr, Ele, ...Rest] : 
      ReplaceItemInArr<
        Index, 
        Rest extends any[] ? Rest : [], 
        Ele, 
        [...NewArr, First]['length'] extends number ? [...NewArr, First]['length'] : 0, 
        [...NewArr, First]
      > : [...NewArr]; 

type Join<T extends string[], U extends string> = T extends [infer First, ...infer Rest] 
  ? Rest extends []
    ? First
      : First extends string
        ? Rest extends string[]
          ? `${First}${U}${Join<Rest, U>}`
          : never
        : never
      : '';

type FlatStructure<Obj extends Record<string, any>> = {
  [key in keyof Obj]: Obj[key];
};


type SignType = '❌' | '⭕️' | '🔲';

type BoardLine = [SignType, SignType, SignType];

type KeyOfBoardLine = 0 | 1 | 2;
type KeyOfBoardLines = 0 | 1 | 2;

type BoardLines = {
  [key in KeyOfBoardLines]: BoardLine;
};


type WinResult = [['⭕️', '❌' | '🔲', '❌' | '🔲'], ['❌' | '🔲', '⭕️', '❌' | '🔲'], ['❌' | '🔲', '❌' | '🔲', '⭕️']];

type TransformBoardLinesToUI<Lines extends BoardLines> = {
  [key in keyof Lines as key extends '0' | '1' | '2' ? key : never]: Lines[key] extends BoardLine ? Join<Lines[key], ' '> : [];
};

type EmptyBoardLines = [
  ['🔲', '🔲', '🔲'], 
  ['🔲', '🔲', '🔲'], 
  ['🔲', '🔲', '🔲']
];

type Board<Lines extends BoardLines = EmptyBoardLines, player extends SignType = '⭕️'> = {
  ui: TransformBoardLinesToUI<Lines>;
  lines: Lines;
  prevPlayer: player;
  nextPlayer: player extends '⭕️' ? '❌' : '⭕️';
  isEnd: Lines extends WinResult ? true : false;
  winner: Lines extends WinResult ? player : 'none';
};

type CheckDrawStepLegal<X extends KeyOfBoardLines, Y extends KeyOfBoardLine,  Lines extends BoardLines> = Lines[X][Y] extends '❌' | '⭕️' ? false : true;

type ReplaceBoardLineItem<Index extends KeyOfBoardLine, Line extends BoardLine, Sign extends SignType> = ReplaceItemInArr<Index, Line, Sign>;

type ReplaceBoardLinesItem<X extends KeyOfBoardLines, Y extends KeyOfBoardLine, Lines extends BoardLines, Sign extends SignType> = Lines extends Array<BoardLine> ? ReplaceItemInArr<X, Lines, ReplaceBoardLineItem<Y, Lines[X], Sign>> : EmptyBoardLines;

type GenerateBoardError<B extends Board<BoardLines, SignType>> = '走法不合理，请重新走棋。'

type Draw<
  X extends KeyOfBoardLines, 
  Y extends KeyOfBoardLine,  
  B extends Board<BoardLines, SignType>, 
  Sign extends B['nextPlayer'] = B['nextPlayer']
> = B['isEnd'] extends false 
      ? CheckDrawStepLegal<X, Y, B['lines']> extends true 
        ? Board<ReplaceBoardLinesItem<X, Y, B['lines'], Sign>, Sign> 
          : GenerateBoardError<B>
            : `棋盘结束啦, 不能在走啦。赢家为${B['prevPlayer']}方`;

// 初始棋盘1
type Board1 = Board<[['🔲', '🔲', '🔲'], ['🔲', '⭕️', '🔲'], ['🔲', '🔲', '🔲']]>;






type Board1UI = Board1['ui'];
type Board1Lines = Board1['lines'];

// 棋盘2
type Board2 = Draw<0, 2, Board1>;






type Board2UI = Board2['ui'];

// 棋盘3
type Board3 = Draw<0, 0, Board2>;



type Board3UI = Board3['ui'];

type Board4 = Draw<1, 0, Board3>;


type ErrorBoard = Draw<0, 0, Board4>;




// 出错的棋盘就不再下了 提示报错
// type NextError = Draw<2, 1, ErrorBoard>;

type Board4UI = Board4['ui'];


type Board5 = Draw<2, 2, Board4>;
type Board5UI = Board5['ui'];


type Board6 = Draw<2, 2, Board5>; // "棋盘结束啦, 不能在走啦。赢家为⭕️方"