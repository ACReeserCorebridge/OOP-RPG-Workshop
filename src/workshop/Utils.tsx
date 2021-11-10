export function RollDice(count:number, faces:number) : number{
  let min = Math.ceil(1);
  let max = Math.floor(faces);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive

}