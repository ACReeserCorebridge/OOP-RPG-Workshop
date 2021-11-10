import { Bow, Club, IntercontinentalBallisticMissile, LamentConfiguration, Pitchfork, Polearm, TapedPolearm } from "./Weapons";
import { AvocadoToast, FoodCrumb, Godsmite, UsefulAmulet, UselessAmulet } from "./Items";
import { IItem } from "../off-limits/IWeapons";
import { CharacterClass } from "./Class";

function shuffle<T>(array: Array<T>): Array<T> {
  if (array.length > 0) {
    let index: number = array.length;
    let random: number = 0;
    while (index != 0) {
      random = Math.floor(Math.random() * index);
      index--;

      [array[index], array[random]] = [array[random], array[index]];
    }
    return array;
  }
  return new Array<T>();
}

// possible hero names
const names: string[] = shuffle<string>([
  "Conan",
  "Yul Brynner",
  "Frodo",
  "Neo",
  "Heroic Dalek",
  "Alex Reeser",
]);

// gets random possible hero name
export function GetRandomName(): string {
  return names.length > 0 ? names.pop()! : "George Foreman";
}

// gets a list of class-specific items
export function GetItemsInTreasureChests(): IItem[] {
  let items: IItem[] = [];

  recentClasses.forEach((c) => {
    items.push(c.getRandomItem());
  });

  return items;
}

// class definitions
export const Classes: CharacterClass[] = [
  new CharacterClass(
    "Warrior",
    "😡",
    10,
    10,
    [new Pitchfork(), new Polearm(), new TapedPolearm()],
    [new UselessAmulet(), new FoodCrumb(), new AvocadoToast()]
  ),
  new CharacterClass(
    "Cleric",
    "😇",
    6,
    10,
    [
      new Club(),
      new Pitchfork(),
      new Polearm(),
      new TapedPolearm(),
      new LamentConfiguration(),
    ],
    [
      new Godsmite(),
      new AvocadoToast(),
      new UsefulAmulet(),
      new UselessAmulet(),
    ]
  ),
  new CharacterClass(
    "Mage",
    "🧙‍♂️",
    3,
    10,
    [new IntercontinentalBallisticMissile(), new Bow()],
    [new Godsmite(), new UsefulAmulet()]
  ),
  new CharacterClass(
    "Thief",
    "😎",
    4,
    10,
    [
      new Club(),
      new Pitchfork(),
      new Polearm(),
      new TapedPolearm(),
      new LamentConfiguration(),
      new Bow(),
      new IntercontinentalBallisticMissile(),
    ],
    [new UselessAmulet(), new FoodCrumb(), new AvocadoToast()]
  ),
];

let recentClasses: CharacterClass[] = [];

export function GetRandomClass(): CharacterClass {
  let chosen: CharacterClass = Classes[Math.floor(Math.random() * Classes.length)];
  recentClasses.push(chosen);
  return chosen;
}
