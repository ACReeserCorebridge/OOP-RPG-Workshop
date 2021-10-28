# OOP-RPG
Programming workshop with OOP and TTRPG

## Setup
```
git clone
npm i
npm start
```

## The "Game"

OOP-RPG is a unit test disguised as a very quick text game that pits four heroes against **_BOSS DRAGON_**. The heroes start with an item, discover another in a chest, and are then sent to do battle with **_BOSS DRAGON_**. **_BOSS DRAGON_** has 100 hit points, while each hero has only 5.

## The Problem

OOP-RPG's main game loop works, but it's missing exciting content. You are tasked with programming interesting items and weapons, and with refactoring and implementing logic in the character classes.

> **You are only allowed to modify files inside the workshop folder.**

### Step 1: Starting Items

Create one or more item classes and assign instances to the variables `WarriorStartItem`, `ClericStartItem`, etc. Use the item interfaces to make these items useful in the fight against **_BOSS DRAGON_**.

### Step 2: Items in Chests

Create one or more item classes and assign instances to the function `GetItemsInTreasureChests`. Use the item interfaces to make these items useful in the fight against **_BOSS DRAGON_**.

### Step 3: Characters

1. Refactor the classes in `Characters.tsx` for maximum code reuse. Make `Characters.tsx` as short and as clean as possible!
1. Customize the `chooseAction` function of the character classes to maximize their effectiveness in combat against **_BOSS DRAGON_**.
1. Bonus: Customize the `getASCIIStatus` function to return a unique character per class and 'X' when dead

## Completing the Test

The test is complete when your useful weapon, item, and character classes result in a combat VICTORY against the dastardly **_BOSS DRAGON_**.

Create a branch and a Pull Request to submit your code, and take a screenshot or video of your VICTORY test run.

> **All submissions should be original code written by you; no copy-paste, please.**

## BONUS CHALLENGE

Show us the PRETTIEST UI and win a cash prize! Submit a secondary PR with gorgeous graphics or UX and you may win a $35 gift card! 

1. Again, your code and graphics should be 100% original
1. This UI PR may change any code in the repo in service of beauty