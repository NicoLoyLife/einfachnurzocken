import { max } from "date-fns";

export const Providers = [
  {
    id: 1,
    name: "Betano",
    url: "https://www.betano.de/",
    section: ["Sportwetten", "Slots"],
  },
  {
    id: 2,
    name: "Happybet",
    url: "https://www.hpybet.com/",
    section: ["Sportwetten", "Slots"],
  },
];

export const SlotsBonus = [
  {
    id: 1,
    provider: 1,
    bonus_type: "100% Einzahlungsbonus + bis zu 150 Freispiele",
    max_bonus: "100€ + 150 Freispiele",
    min_deposit: "10€",
    wagering: "35x Bonus",
    max_stake: "1€ pro Spin",
    time_limit: "30 Tage (ab Gutschrift)",
    validity: "1x pro Haushalt",
    available_in: ["Deutschland"],
    url: "https://www.betano.de/",
  },
];

export const SportwettenBonus = [
  {
    id: 1,
    provider: 1,
    bonus_type: "100% Einzahlungsbonus + Gratiswette",
    max_bonus: "100€ (80€ Einzahlungsbonus + 20€ Gratiswette)",
    min_deposit: "10€",
    max_deposit: "80€ einzahlen + 100€ Bonus erhalten + 20€ Gratiswette = 200€",
    wagering: "5x Bonus + Einzahlung",
    min_odds: "1.65 (Bonusguthaben), keine min. Quote (Gratiswette)",
    time_limit: "90 Tage (ab Gutschrift)",
    validity: "1x pro Haushalt",
    available_in: ["Deutschland"],
  },
  {
    id: 2,
    provider: 2,
    bonus_type: "150% Einzahlungsbonus",
    max_bonus: "100€",
    min_deposit: "10€",
    max_deposit: "67€ einzahlen + 100€ Bonus erhalten = 167€",
    wagering: "1x Einzahlung + 6x Bonus",
    min_odds: "2.00 (Bonusguthaben)",
    time_limit: "90 Tage (ab Gutschrift)",
    validity: "1x pro Haushalt",
    available_in: ["Deutschland", "Österreich"],
  }
];
