import { IConsumableItem, IEnchantedItem } from "../../off-limits/IWeapons";

export class DivinePotion implements IConsumableItem {
    name = "Divine Potion";
    image = '/assets/potion.png';
    healthBonus = 10;
}