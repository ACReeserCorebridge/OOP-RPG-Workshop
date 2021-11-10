import { IConsumableItem, IEnchantedItem, IItem } from "../off-limits/IWeapons";

export class UselessAmulet implements IItem {
    name = 'Useless Amulet';
}

export class FoodCrumb implements IConsumableItem {
    name = 'Crumb of Bread';
    healthBonus = 1;
}

export class AvocadoToast implements IConsumableItem {
    name = 'Avocado Toast';
    healthBonus = 4;
}

export class UsefulAmulet implements IEnchantedItem {
    name = 'Useful Amulet';
    partyHealthBonus = 1;
    fireDamage = 1;
}

export class Godsmite implements IEnchantedItem {
    name = 'Godsmite'
    partyHealthBonus = 4;
    fireDamage = 3;
}