//varに直すと最後のxは２になる
//varは関数スコープ, letはブロックスコープ

{
  let x = 1
  x;
  {
    let x = 2
    x;
  }
  x
}