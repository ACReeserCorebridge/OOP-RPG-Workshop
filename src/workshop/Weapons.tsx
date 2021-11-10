import { IWeapon, IItem, IMeleeWeapon, IRangedWeapon, IConsumableItem, IEnchantedItem } from "../off-limits/IWeapons";

export class BareHands implements IMeleeWeapon {
  name = 'bare hands';
  damage = 1;
  meleeRange = 1;
}

export class Club implements IMeleeWeapon {
  name = 'Club';
  damage = 2;
  meleeRange = 1;
}

export class Pitchfork implements IMeleeWeapon {
  name = 'Pitchfork';
  damage = 2;
  meleeRange = 2;
}

export class Polearm implements IMeleeWeapon {
  name = 'Polearm';
  damage = 3;
  meleeRange = 2;
}

export class TapedPolearm implements IMeleeWeapon {
  name = 'Two Polearms Taped Together At One End';
  damage = 6;
  meleeRange = 2;
}

export class LamentConfiguration implements IMeleeWeapon {
  name = 'Lament Configuration';
  damage = 9;
  meleeRange = 2;
}

export class NuclearWarhead implements IWeapon {
  name = 'Nuclear Warhead';
  damage = 3;
}

export class IntercontinentalBallisticMissile implements IRangedWeapon<NuclearWarhead> {
  name = 'Intercontinental Ballistic Missile';
  damage: 0 = 0;
  projectiles = [
    new NuclearWarhead(),
    new NuclearWarhead(),
    new NuclearWarhead(),
    new NuclearWarhead(),
    new NuclearWarhead(),
    new NuclearWarhead(),
    new NuclearWarhead(),
  ];
}

export class Arrow implements IWeapon {
  name = 'Arrow';
  damage = 2;
}

export class Bow implements IRangedWeapon<Arrow> {
  name = 'Bow';
  damage: 0 = 0;
  projectiles = [
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
    new Arrow(),
  ]
}