import betanoLogo from "../assets/images/sportsbooks/betano.png";
// import happybetLogo from "../assets/images/sportsbooks/happybet.jpg";
import merkurbetsLogo from "../assets/images/sportsbooks/merkurbets.jpg";
import winamaxLogo from "../assets/images/sportsbooks/winamax.png";
// import merkurLogo from "../assets/images/casinos/merkur.jpg";
import jackpotPiratenLogo from "../assets/images/casinos/jackpotpiraten.jpg";
import bingBongLogo from "../assets/images/casinos/bingbong.png";

import visaLogo from "../assets/images/payment/WW VISA.svg";
import mastercardLogo from "../assets/images/payment/WW Mastercard.svg";
import paypalLogo from "../assets/images/payment/WW PayPal.svg";
import skrillLogo from "../assets/images/payment/EU Skrill.svg";
import paysafecardLogo from "../assets/images/payment/WW paysafecard.svg";
import sofortLogo from "../assets/images/payment/EU Klarna Sofort.svg";
import bankLogo from "../assets/images/payment/DE U╠êberweisung.svg";
import klarnaLogo from "../assets/images/payment/EU Klarna.svg";
import trustlyLogo from "../assets/images/payment/Trustly.png";
import netellerLogo from "../assets/images/payment/neteller_logo_icon_169926.png";
import giropayLogo from "../assets/images/payment/DE Giropay.svg";
import applePayLogo from "../assets/images/payment/WW Apple Pay.svg";
import googlePayLogo from "../assets/images/payment/WW Google Pay.svg";

export const sportsbettingProvidersData = {
  betano: {
    name: "Betano",
    slug: "betano",
    title: "Betano Sportwetten Erfahrungen & Test 2024 | Ist Betano seriös?",
    metaDescription:
      "Ausführlicher Betano Sportwetten Test mit echten Erfahrungen ✓ 100% Bonus + 20€ Freiwette ✓ Wettquoten ✓ Wettangebot ✓ Jetzt informieren und profitieren!",
    ctaLink:
      "https://gml-grp.com/C.ashx?btag=a_10846b_3503c_&affid=3453&siteid=10846&adid=3503&c=",
    logo: betanoLogo,
    highlights: [
      "100% Einzahlungsbonus bis zu 80€",
      "20€ Gratiswette ohne Einzahlung",
      "Riesiges Livewetten-Angebot",
      "Deutsche Lizenz und Sicherheit",
    ],
    bonus: {
      type: "100% Einzahlungsbonus + 20€ Freiwette",
      maxBonus: "100€ (80€ Einzahlungsbonus + 20€ Freiwette)",
      freiwette: "20€ Freiwette ohne Einzahlung",
      minDeposit: "10€",
      maxDeposit: "80€",
      wageringRequirements: "5x Bonus + Einzahlung",
      oddsRequirement:
        "1.65 (für Bonusguthaben) - keine Mindestquote für die Freiwette",
      timeframe: "90 Tage (ab Gutschrift)",
      validity: "1x pro Haushalt",
      availableIn: ["Deutschland"],
    },
    ratings: [
      { category: "Bonusangebote & Promotionen", score: 5 },
      { category: "Wettquoten", score: 4 },
      { category: "Sportarten- & Wettangebot", score: 5 },
      { category: "Zahlungsmethoden", score: 5 },
      { category: "Kundensupport", score: 4 },
      { category: "Wettsteuer & Gebühren", score: 1 },
      { category: "Mobile App & Optimierung", score: 5 },
      { category: "Treueprogramme & VIP-Services", score: 4 },
      { category: "Cash-Out-Funktion", score: 5 },
    ],
    faqs: [
      {
        question: "Ist Betano seriös und sicher?",
        answer:
          "Ja, Betano ist ein seriöser Anbieter. Der Buchmacher verfügt über eine deutsche Lizenz und unterliegt somit den strengen Auflagen der deutschen Glücksspielbehörde. Zudem setzt Betano auf moderne Sicherheitsstandards und verschlüsselt sämtliche Datenübertragungen.",
      },
      {
        question: "Gibt es einen Betano Bonus für Neukunden?",
        answer:
          "Ja, Betano bietet neuen Kunden einen attraktiven Willkommensbonus. Der Buchmacher verdoppelt die erste Einzahlung bis zu einem Betrag von 80€. Zusätzlich erhalten Neukunden eine 20€ Gratiswette ohne Einzahlung.",
      },
      {
        question: "Welche Sportarten bietet Betano an?",
        answer:
          "Betano überzeugt mit einem breiten Wettangebot und bietet zahlreiche Sportarten an. Neben Fußball, Tennis und Basketball können Kunden auch auf Randsportarten wie Tischtennis, Darts oder eSports wetten.",
      },
      {
        question: "Kann ich bei Betano auch mobil wetten?",
        answer:
          "Ja, Betano verfügt über eine benutzerfreundliche App, die es Kunden ermöglicht, auch unterwegs zu wetten. Die App ist sowohl für iOS als auch für Android verfügbar und bietet alle Funktionen der Desktop-Version.",
      },
      {
        question: "Wie erreiche ich den Betano Kundensupport?",
        answer:
          "Der Betano Kundensupport steht Kunden per Live-Chat, E-Mail und Telefon zur Verfügung. Der Live-Chat ist die schnellste und einfachste Möglichkeit, um Hilfe zu erhalten. Alternativ können Kunden auch eine E-Mail schreiben.",
      },
      {
        question: "Muss ich bei Betano Wettsteuer zahlen?",
        answer:
          "Ja, bei Betano fällt die deutsche Wettsteuer in Höhe von 5% an. Diese wird bei jeder platzierten Wette automatisch vom Einsatz abgezogen. Kunden sollten dies bei der Wettabgabe berücksichtigen.",
      },
      {
        question: "Bietet Betano eine Cash-Out-Funktion an?",
        answer:
          "Ja, Betano bietet eine Cash-Out-Funktion an, mit der Kunden ihre Wetten vorzeitig auswerten können. Dadurch haben Kunden die Möglichkeit, ihre Gewinne zu sichern oder Verluste zu minimieren, bevor das Ereignis beendet ist.",
      },
    ],
    paymentMethods: [
      { name: "Visa", logo: visaLogo },
      { name: "Mastercard", logo: mastercardLogo },
      { name: "PayPal", logo: paypalLogo },
      { name: "Skrill", logo: skrillLogo },
      {
        name: "Paysafecard",
        logo: paysafecardLogo,
      },
      {
        name: "Sofortüberweisung",
        logo: sofortLogo,
      },
      { name: "Trustly", logo: trustlyLogo },
      { name: "Apple Pay", logo: applePayLogo },
      { name: "Google Pay", logo: googlePayLogo },
    ],
    overview: {
      foundingYear: "2016",
      licence:
        "Malta Gaming Authority (MGA), zusätzlich deutsche Lizenz gemäß dem neuen Glücksspielstaatsvertrag",
      specialFeatures: [
        "Umfangreiches Live-Wetten-Angebot",
        "Innovative Funktionen wie Bet Mentor und Match Combo",
        "Cash-Out-Funktion",
        "Mobile App für iOS und Android",
      ],
      website: "www.betano.de",
      security: ["SSL-Verschlüsselung", "Responsible Gaming Maßnahmen"],
      description:
        "Betano gehört zur Kaizen Gaming International Ltd., einem Unternehmen mit langjähriger Erfahrung in der iGaming-Branche. Der Anbieter legt großen Wert auf Transparenz und Spielerschutz, was sich in seinen umfangreichen Maßnahmen zur Förderung von verantwortungsbewusstem Spielen widerspiegelt.",
    },
    pros: [
      "Attraktiver Willkommensbonus mit 100% bis zu 80€ und 20€ Freiwette ohne Einzahlung",
      "Breites Wettangebot mit vielfältigen Sportarten und Spezialwetten",
      "Benutzerfreundliche Mobile App für iOS und Android",
      "Sichere und schnelle Auszahlungen ohne Gebühren",
      "Innovative Funktionen wie Bet Mentor und Match Combo",
      "Umfangreiches Treueprogramm für Stammkunden",
      "Flexible Cash-Out-Optionen für mehr Kontrolle",
    ],
    cons: [
      "Wettsteuer von 5% wird auf Gewinne umgelegt",
      "Telefonischer Kundensupport nicht rund um die Uhr verfügbar",
      "Auswahl bei Auszahlungsoptionen könnte größer sein",
    ],
  },
  merkurbets: {
    name: "Merkur Bets",
    slug: "merkurbets",
    title: "Merkur Bets Erfahrungen & Test 2024 | Ist Merkur Bets seriös?",
    metaDescription:
      "Ausführlicher Merkur Bets Test mit echten Erfahrungen ✓ 25€ Freiwette ab 1€ Einzahlung ✓ Wettsteuer übernommen ✓ Jetzt informieren und profitieren!",
    ctaLink:
      "https://media.cashpointpartners.com/C.ashx?btag=a_8433b_2360c_&affid=4834&siteid=8433&adid=2360&c=",
    logo: merkurbetsLogo,
    highlights: [
      "25€ Freiwette ab 1€ Einzahlung",
      "Wettsteuer wird vom Anbieter übernommen, volle Gewinne ohne Abzüge",
      "Quickbet: Blitzschnelle Wetten ideal für Livewetten",
      "Bet Builder: Erstelle individuelle Wetten nach deinen Vorlieben",
      "Kombi Boost: Bis zu 30% zusätzlichen Gewinn bei Kombiwetten",
      "Benutzerfreundliche Mobile App für iOS und Android",
      "Sichere und schnelle Ein- und Auszahlungen ohne Gebühren",
      "3er-Kombi-Versicherung: Bis zu 75€ Cashback als Freiwette bei verlorenen Kombiwetten",
    ],
    bonus: {
      type: "25€ Freiwette ab 1€ Einzahlung + 100% Cashback bis zu 75€ als Freiwette",
      maxBonus: "100€ (25 € Freiwette + 75 € Cashback)",
      freiwette: "25€ Freiwette ab 1€ Einzahlung",
      minDeposit:
        "1€ für die 25€ Freiwette; 10€ für die risikofreie Kombiwette",
      maxDeposit: "Keine Angabe",
      wageringRequirements:
        "Gewinne aus Freiwetten müssen einmal umgesetzt werden",
      oddsRequirement: "Mindestquote von 1,50 für die risikofreie Kombiwette",
      timeframe: "Freiwetten sind 7 Tage nach Gutschrift gültig",
      validity: "1x pro Haushalt",
      availableIn: ["Deutschland"],
    },
    ratings: [
      { category: "Bonusangebote & Promotionen", score: 5 },
      { category: "Wettquoten", score: 4 },
      { category: "Sportarten- & Wettangebot", score: 4 },
      { category: "Zahlungsmethoden", score: 5 },
      { category: "Kundensupport", score: 4 },
      { category: "Wettsteuer & Gebühren", score: 5 },
      { category: "Mobile App & Optimierung", score: 5 },
      { category: "Treueprogramme & VIP-Services", score: 4 },
      { category: "Cash-Out-Funktion", score: 5 },
    ],
    faqs: [
      {
        question: "Ist Merkur Bets ein seriöser Anbieter?",
        answer:
          "Ja, Merkur Bets ist Teil der Gauselmann Gruppe, einem etablierten deutschen Unternehmen mit langer Tradition in der Glücksspielbranche. Der Anbieter verfügt über eine deutsche Sportwetten-Lizenz und setzt auf hohe Sicherheitsstandards.",
      },
      {
        question: "Wie erhalte ich die 25€ Freiwette ab 1€ Einzahlung?",
        answer:
          "Nach der Registrierung auf der Merkur Bets Webseite und einer Mindesteinzahlung von 1€ wird Ihnen die 25€ Freiwette automatisch gutgeschrieben.",
      },
      {
        question: "Muss ich die Wettsteuer bei Merkur Bets zahlen?",
        answer:
          "Nein, die gesetzliche Wettsteuer von 5% wird vollständig vom Anbieter übernommen. Ihre Gewinne werden nicht durch die Steuer gemindert.",
      },
      {
        question: "Bietet Merkur Bets eine Mobile App an?",
        answer:
          "Ja, Merkur Bets bietet eine benutzerfreundliche App für iOS und Android an, die alle Funktionen der Desktop-Version beinhaltet. Mit der App können Sie jederzeit und überall bequem Wetten platzieren.",
      },
      {
        question: "Welche Zahlungsmethoden stehen zur Verfügung?",
        answer:
          "Sie können Ein- und Auszahlungen über verschiedene Methoden tätigen, darunter Kreditkarten, E-Wallets wie PayPal, Banküberweisungen und Prepaid-Karten. Alle Transaktionen sind sicher und schnell abgewickelt, ohne zusätzliche Gebühren.",
      },
      {
        question: "Was ist der Bet Builder?",
        answer:
          "Der Bet Builder ist eine Funktion, mit der Sie verschiedene Wettmärkte innerhalb eines Spiels kombinieren können, um Ihre individuelle Wunschwette zu erstellen. Dies ermöglicht es Ihnen, komplexe Wettstrategien zu verfolgen und maßgeschneiderte Wetten zu platzieren.",
      },
      {
        question: "Wie funktioniert der Kombi Boost?",
        answer:
          "Beim Kombi Boost erhalten Sie bis zu 30% zusätzlichen Gewinn auf Ihre Kombiwetten. Je mehr Auswahlen Sie kombinieren, desto höher fällt Ihr Bonus aus, was Ihre Gewinnchancen erheblich steigert.",
      },
      {
        question: "Gibt es eine Cash-Out-Funktion?",
        answer:
          "Ja, Merkur Bets bietet eine Cash-Out-Funktion an, mit der Sie Wetten vorzeitig auszahlen lassen können. Teilweiser oder automatischer Cash-Out sind jedoch nicht verfügbar, wodurch die Flexibilität etwas eingeschränkt ist.",
      },
    ],
    paymentMethods: [
      { name: "Visa", logo: visaLogo },
      { name: "Mastercard", logo: mastercardLogo },
      { name: "PayPal", logo: paypalLogo },
      { name: "Skrill", logo: skrillLogo },
      {
        name: "Paysafecard",
        logo: paysafecardLogo,
      },
      {
        name: "Sofortüberweisung",
        logo: sofortLogo,
      },
      { name: "Banküberweisung", logo: bankLogo },
    ],
    overview: {
      foundingYear: "2016",
      licence: "Deutsche Sportwetten-Lizenz gemäß Glücksspielstaatsvertrag",
      specialFeatures: [
        "25€ Freiwette ab 1€ Einzahlung",
        "Wettsteuer wird vom Anbieter übernommen",
        "exklusive Features wie Quickbet und Bet Builder",
      ],
      website: "www.merkurbets.de",
      security: [
        "SSL-Verschlüsselung",
        "Maßnahmen zum verantwortungsbewussten Spielen",
      ],
      description: "",
    },
    pros: [
      "25€ Freiwette ab 1€ Einzahlung – starte sofort mit minimalem Einsatz",
      "Wettsteuer wird vom Anbieter übernommen – volle Gewinne ohne Abzüge",
      "100% Cashback bis zu 75€ als Freiwette bei verlorener erster Kombiwette",
      "Innovative Features wie Quickbet, Bet Builder und Kombi Boost",
      "Breites Wettangebot mit vielen Sportarten und Spezialwetten",
      "Sichere und schnelle Ein- und Auszahlungen ohne Gebühren",
      "Benutzerfreundliche Mobile App für iOS und Android",
    ],
    cons: [
      "Kundensupport nicht rund um die Uhr erreichbar",
      "Keine teilweisen oder automatischen Cash-Outs verfügbar",
      "VIP-Services könnten ausgebaut werden",
      "Limitierte Zahlungsmethoden für Auszahlungen im Vergleich zu einigen Konkurrenten",
    ],
  },
  winamax: {
    name: "Winamax",
    slug: "winamax",
    title:
      "Winamax Sportwetten: Bis zu 100 € Freebets, steuerfrei wetten & Live-Streams erleben",
    metaDescription:
      "Winamax im Test: 100 € Freebets als Willkommensbonus, steuerfreie Wetten, umfangreiche Live-Streams & innovative Funktionen. Jetzt anmelden und profitieren!",
    ctaLink:
      "https://www.winamax.de/registration/landing/Default?language=DE&banid=73017",
    logo: winamaxLogo,
    highlights: [
      "Steuerfreie Wetten: Winamax übernimmt die Wettsteuer für dich",
      "Live-Streaming: Tausende Sportevents in Echtzeit verfolgen",
      "VIP-Programm: Treuepunkte für exklusive Prämien und Freebets",
    ],
    bonus: {
      type: "Bis zu 100€ in Freebets",
      maxBonus: "100€ in Freebets",
      freiwette: "Bis zu 100€",
      minDeposit: "10€",
      maxDeposit: "100€",
      wageringRequirements: "Einzahlung 1x umsetzen, max. 100€ Umsatz",
      oddsRequirement: "Mindestquote von 1,05",
      timeframe: "Kein Zeitlimit",
      validity: "1x pro Haushalt",
      availableIn: ["Deutschland"],
    },
    ratings: [
      { category: "Bonusangebote & Promotionen", score: 5 },
      { category: "Wettquoten", score: 4 },
      { category: "Sportarten- & Wettangebot", score: 5 },
      { category: "Zahlungsmethoden", score: 5 },
      { category: "Kundensupport", score: 5 },
      { category: "Wettsteuer & Gebühren", score: 5 },
      { category: "Mobile App & Optimierung", score: 5 },
      { category: "Treueprogramme & VIP-Services", score: 5 },
      { category: "Cash-Out-Funktion", score: 5 },
    ],
    faqs: [
      {
        question: "Ist Winamax ein seriöser Anbieter?",
        answer:
          "Ja, Winamax ist ein seriöser Anbieter, der über eine Lizenz des Regierungspräsidiums Darmstadt verfügt. Der Anbieter unterliegt den strengen Auflagen der deutschen Glücksspielbehörde und setzt auf hohe Sicherheitsstandards.",
      },
      {
        question: "Welchen Willkommensbonus bietet Winamax?",
        answer:
          "Winamax bietet neuen Kunden bis zu 100€ in Freebets als Willkommensbonus. Um den Bonus zu erhalten, müssen du eine Mindesteinzahlung von 10€ tätigen. Nach der ersten Einzahlung erhältst du 100 % des Betrags (bis zu 100 €) als Freebets.",
      },
      {
        question: "Muss ich die Wettsteuer bei Winamax zahlen?",
        answer:
          "Nein, bei Winamax sind alle Wetten steuerfrei. Der Anbieter übernimmt die Wettsteuer für dich, sodass du deine Gewinne ohne Abzüge erhältst.",
      },
      {
        question: "Bietet Winamax Live-Streaming an?",
        answer:
          "Ja, Winamax bietet ein umfangreiches Live-Streaming-Angebot, das es dir ermöglicht, tausende Sportevents in Echtzeit zu verfolgen. So verpasst du keine spannende Partie mehr und kannst deine Wetten live verfolgen.",
      },
      {
        question: "Welche Zahlungsmethoden stehen bei Winamax zur Verfügung?",
        answer:
          "Winamax unterstützt eine Vielzahl von Zahlungsmethoden, darunter Kreditkarten, E-Wallets wie PayPal, Banküberweisungen, Apple Pay, Neteller und Klarna. Ein- und Auszahlungen sind in der Regel gebührenfrei und schnell bearbeitet.",
      },
    ],
    paymentMethods: [
      { name: "Visa", logo: visaLogo },
      { name: "Mastercard", logo: mastercardLogo },
      { name: "PayPal", logo: paypalLogo },
      { name: "Skrill", logo: skrillLogo },
      { name: "Banküberweisung", logo: bankLogo },
      { name: "Apple Pay", logo: applePayLogo },
      { name: "Neteller", logo: netellerLogo },
      { name: "Klarna", logo: klarnaLogo },
    ],
    overview: {
      foundingYear: "1999",
      licence: "Regierungspräsidium Darmstadt, Deutschland",
      specialFeatures: [
        "Steuerfreie Wetten",
        "MyMatch-Funktion",
        "Live-Streaming",
      ],
      website: "www.winamax.de",
      security: ["IT-Audits", "SSL-Verschlüsselung", "Spielerschutz"],
      description:
        "Winamax ist einer der innovativsten Sportwetten-Anbieter auf dem Markt, der seinen Nutzern seit Jahren ein erstklassiges Wetterlebnis bietet. Mit steuerfreien Wetten, einem großzügigen Willkommensbonus und innovativen Funktionen wie MyMatch gehört Winamax zu den Vorreitern der Branche. Der Anbieter zeichnet sich zudem durch eine umfangreiche Spielauswahl, attraktive Quoten und ein VIP-Programm mit exklusiven Prämien aus.",
    },
    pros: [
      "Steuerfreie Wetten – volle Gewinne ohne Abzüge",
      "Bis zu 100 € Freebets als Willkommensbonus",
      "Umfangreiches Live-Streaming-Angebot",
    ],
    cons: ["Kein Online-Poker für deutsche Nutzer verfügbar"],
  },
};

export const onlineCasinoProvidersData = {
  // betano: {
  //   name: "Betano",
  //   slug: "betano",
  //   title: "Betano Slots Erfahrungen & Test 2024 | Ist Betano seriös?",
  //   metaDescription:
  //     "Ausführlicher Betano Slots Test mit echten Erfahrungen ✓ 100% Einzahlungsbonus bis zu 100€ + 150 Freispiele ✓ Große Spielauswahl ✓ Jetzt informieren und profitieren!",
  //   ctaLink: "https://www.betano.com/de/",
  //   logo: betanoLogo,
  //   highlights: [
  //     "100% Bonus bis zu 100€ auf deine erste Einzahlung",
  //     "Bis zu 150 Freispiele für spannende Slot-Spiele",
  //     "Eine riesige Auswahl an Spielen, wie z.B. Play'n'Go & Novomatic",
  //     "Sichere und schnelle EIn- und Auszahlungen",
  //     "Top Casino-Erlebnis auf allen Geräten",
  //   ],
  //   bonus: {
  //     type: "100% Einzahlungsbonus + 150 Freispiele",
  //     maxBonus: "100€ + 150 Freispiele",
  //     freispiele: "150 Freispiele",
  //     minDeposit: "10€",
  //     maxDeposit: "100€",
  //     maxWager: "1€ pro Spin",
  //     wageringRequirements: "35x Bonus",
  //     timeframe: "30 Tage (ab Gutschrift)",
  //     validity: "1x pro Haushalt",
  //     availableIn: ["Deutschland"],
  //   },
  //   ratings: [
  //     { category: "Bonusangebote & Promotionen", score: 5 },
  //     { category: "Spielauswahl", score: 3 },
  //     { category: "Kundensupport", score: 5 },
  //     { category: "Treueprogramme", score: 5 },
  //     { category: "Auszahlungsbedingungen", score: 5 },
  //   ],
  //   faqs: [
  //     {
  //       question: "Ist Betano seriös und sicher?",
  //       answer:
  //         "Ja, Betano ist ein seriöses Casino mit einer Lizenz der Malta Gaming Authority und einer deutschen Lizenz gemäß dem Glücksspielstaatsvertrag. Der Anbieter setzt auf moderne Sicherheitsstandards und fördert verantwortungsvolles Spielen.",
  //     },
  //     {
  //       question: "Welche Boni bietet Betano für Neukunden?",
  //       answer:
  //         "Neukunden erhalten einen 100% Einzahlungsbonus bis zu 100€ sowie bis zu 150 Freispiele für ausgewählte Slot-Spiele. Diese Boni helfen dir, mit einem größeren Guthaben in die Casino-Welt einzusteigen.",
  //     },
  //     {
  //       question: "Welche Spiele bietet Betano an?",
  //       answer:
  //         "Betano bietet eine breite Palette an Spielen, darunter hunderte Slots von Anbietern wie Play’n GO, Novomatic und Gamomat, klassische Tischspiele wie Blackjack und Roulette sowie ein Live-Casino mit echten Dealern.",
  //     },
  //     {
  //       question: "Kann ich bei Betano auch mobil spielen?",
  //       answer:
  //         "Ja, Betano verfügt über eine benutzerfreundliche App für iOS und Android, die es dir ermöglicht, auch unterwegs problemlos zu spielen. Die mobile Webseite ist ebenfalls optimiert und bietet alle Funktionen der Desktop-Version.",
  //     },
  //     {
  //       question: "Wie erreiche ich den Betano Kundensupport?",
  //       answer:
  //         "Der Kundensupport ist über Live-Chat, E-Mail und Telefon erreichbar. Der Live-Chat ist die schnellste Möglichkeit, um Hilfe zu erhalten, während E-Mail und Telefon ebenfalls zur Verfügung stehen.",
  //     },
  //     {
  //       question: "Welche Zahlungsmethoden stehen bei Betano zur Verfügung?",
  //       answer:
  //         "Betano unterstützt eine Vielzahl von Zahlungsmethoden, darunter Visa, Mastercard, PayPal, Skrill, Paysafecard, Sofortüberweisung und Banküberweisung. Ein- und Auszahlungen sind in der Regel gebührenfrei und schnell bearbeitet.",
  //     },
  //     {
  //       question: "Gibt es bei Betano ein Treueprogramm?",
  //       answer:
  //         "Ja, Betano bietet ein umfangreiches Treueprogramm, in dem du für jede Spielrunde Punkte sammelst, die du gegen Boni, Gratiswetten oder andere Prämien eintauschen kannst. Zudem gibt es VIP-Services für besonders aktive Kunden mit exklusiven Vorteilen.",
  //     },
  //     {
  //       question: "Sind die Auszahlungen bei Betano schnell?",
  //       answer:
  //         "Ja, Auszahlungen werden in der Regel innerhalb von 24 bis 48 Stunden bearbeitet. Die Bearbeitungszeit kann je nach gewählter Zahlungsmethode variieren, ist jedoch insgesamt sehr zuverlässig und zügig.",
  //     },
  //   ],
  //   paymentMethods: [
  //     { name: "Visa", logo: visaLogo },
  //     { name: "Mastercard", logo: mastercardLogo },
  //     { name: "PayPal", logo: paypalLogo },
  //     { name: "Skrill", logo: skrillLogo },
  //     {
  //       name: "Paysafecard",
  //       logo: paysafecardLogo,
  //     },
  //     {
  //       name: "Sofortüberweisung",
  //       logo: sofortLogo,
  //     },
  //     { name: "Banküberweisung", logo: bankLogo },
  //   ],
  //   overview: {
  //     foundingYear: "2016",
  //     licence:
  //       "Malta Gaming Authority (MGA), Deutsche Lizenz gemäß Glücksspielstaatsvertrag",
  //     specialFeatures: [
  //       "Umfangreiches Slot-Angebot",
  //       "Exklusive Spiele",
  //       "Schnelle Auszahlungen",
  //       "Mobile App",
  //     ],
  //     website: "www.betano.com",
  //     security: ["SSL-Verschlüsselung", "Responsible Gaming Maßnahmen"],
  //     description:
  //       "Betano gehört zur Kaizen Gaming International Ltd., einem renommierten Unternehmen mit langjähriger Erfahrung in der iGaming-Branche. Der Anbieter legt großen Wert auf Transparenz und Spielerschutz, was sich in seinen umfangreichen Maßnahmen zur Förderung von verantwortungsbewusstem Spielen widerspiegelt.",
  //   },
  //   pros: [
  //     "Attraktiver Willkommensbonus: 100% Einzahlungsbonus bis zu 100€ + bis zu 150 Freispiele",
  //     "Große Spielauswahl: Hunderte Slots, Tischspiele und Live-Casino-Angebote von Top-Anbietern",
  //     "Benutzerfreundliche Mobile App: Verfügbar für iOS und Android",
  //     "Sichere und schnelle Ein- und Auszahlungen: Vielfältige Zahlungsmethoden ohne Gebühren",
  //     "Deutsche Lizenz: Höchste Sicherheitsstandards gemäß deutschem Glücksspielstaatsvertrag",
  //     "Exklusive Spiele: Bekannte Titel von Play’n GO, Novomatic und Gamomat",
  //     "Umfangreiches Treueprogramm: VIP-Programme und regelmäßige Promotionen für Bestandskunden",
  //   ],
  //   cons: [
  //     "Spielauswahl im Vergleich zu Konkurrenz begrenzt: Weniger Tischspiele und Live-Casino-Optionen als einige Mitbewerber",
  //     "Umsatzbedingungen beim Bonus: Hohe Umsatzanforderungen könnten abschreckend wirken",
  //     "Keine 24/7 Telefon-Hotline: Support ist nicht rund um die Uhr telefonisch erreichbar",
  //   ],
  // },
  jackpotPiraten: {
    name: "JackpotPiraten",
    slug: "jackpotpiraten",
    title:
      "JackpotPiraten Online-Spielothek: 100% Bonus bis 100 € + 50 Freispiele im Test",
    metaDescription:
      "JackpotPiraten im Test: 100 % Bonus bis 100 € + 50 Freispiele, deutsche Lizenz, über 620 Slots. Jetzt spannende Abenteuer erleben und gewinnen!",
    ctaLink:
      "https://cjih.boell.jackpotpiraten.de/ts/i5544453/tsc?typ=r&amc=networks.cap.526088.535942.CRT-GYr1T0Y",
    logo: jackpotPiratenLogo,
    pros: [
      "Attraktiver Willkommensbonus mit fairen Bedingungen",
      "Über 620 Slots von renommierten Anbietern",
      "Blitz-Auszahlungen und PayPal als Zahlungsmethode",
    ],
    cons: ["Keine Live-Casino-Spiele"],
    overview: {
      foundingYear: "2020",
      licence: "GGL (Deutschland)",
      specialFeatures: [
        "Große Auswahl an Slots von Top-Anbietern",
        "Benutzerfreundliche mobile Plattform",
        "Sichere und schnelle Auszahlungen",
        "Umfangreiches Treueprogramm für Stammkunden",
      ],
      website: "jackpotpiraten.com",
      security: ["SSL-Verschlüsselung", "Responsible Gaming Maßnahmen"],
      description:
        "JackpotPiraten, gegründet von zwei Branchengrößen – der Gauselmann Gruppe und Novomatic –, ist eine der ersten legalen Online-Spielotheken in Deutschland. Mit über 620 Slots, einer deutschen Lizenz der Gemeinsamen Glücksspielbehörde der Länder (GGL) und einer benutzerfreundlichen Plattform bietet JackpotPiraten ein abgerundetes Spielerlebnis.",
    },
    highlights: [
      "Über 620 Spiele von Top-Entwicklern wie Merkur, Novomatic und Pragmatic Play",
      "Deutsche Lizenz für maximale Sicherheit",
      "Blitz-Auszahlungen innerhalb von 24 Stunden",
    ],
    bonus: {
      type: "50 Freispiele + 100€ Einzahlungsbonus (100%)",
      maxBonus: "100€ + 50 Freispiele",
      freispiele: "50 Freispiele für „Book of Ra Deluxe“",
      minDeposit: "1€",
      maxDeposit: "100€",
      maxWager: "1€ pro Spin",
      wageringRequirements: "30x Bonus",
      timeframe: "30 Tage (ab Gutschrift)",
      validity: "1x pro Haushalt",
      availableIn: ["Deutschland"],
    },
    ratings: [
      { category: "Bonusangebote & Promotionen", score: 4 },
      { category: "Spielauswahl", score: 3 },
      { category: "Kundensupport", score: 5 },
      { category: "Treueprogramme", score: 5 },
      { category: "Auszahlungsbedingungen", score: 5 },
    ],
    faqs: [
      {
        question: "Ist JackpotPiraten legal?",
        answer:
          "Ja, JackpotPiraten besitzt eine deutsche Lizenz der GGL und erfüllt alle gesetzlichen Vorgaben.",
      },
      {
        question: "Wie hoch ist der Willkommensbonus?",
        answer:
          "Der Bonus beträgt 100 % bis zu 100 € sowie 50 Freispiele für „Book of Ra Deluxe“.",
      },
      {
        question: "Welche Zahlungsmethoden bietet JackpotPiraten?",
        answer:
          "PayPal, Klarna, Trustly, Visa, Mastercard, Skrill und viele weitere sichere Methoden.",
      },
      {
        question: "Was kann ich bei JackpotPiraten spielen?",
        answer:
          "Über 620 Slots, darunter Klassiker wie Book of Ra Deluxe und moderne Hits wie Big Bass Bonanza.",
      },
      {
        question: "Wie schnell sind Auszahlungen?",
        answer:
          "Dank der Blitz-Auszahlung sind Gewinne innerhalb von 24 Stunden auf deinem Konto verfügbar.",
      },
    ],
    paymentMethods: [
      { name: "PayPal", logo: paypalLogo },
      { name: "Sofortüberweisung", logo: sofortLogo },
      { name: "Klarna", logo: klarnaLogo },
      { name: "Trustly", logo: trustlyLogo },
      { name: "Visa", logo: visaLogo },
      { name: "Mastercard", logo: mastercardLogo },
      { name: "Skrill", logo: skrillLogo },
      { name: "Neteller", logo: netellerLogo },
    ],
  },
  bingBong: {
    name: "Bing Bong",
    slug: "bing-bong",
    title:
      "Bing Bong Online-Spielothek: Attraktive Boni & über 650 Slots im Test",
    metaDescription:
      "Bing Bong im Test: 100 % Bonus bis 100 € + 50 Freispiele, deutsche Lizenz, über 650 Slots von Merkur, Novomatic & Co. Jetzt mehr erfahren!",
    ctaLink:
      "https://opwu.grass.bingbong.de/ts/i5044752/tsc?typ=r&amc=networks.cap.526088.535942.CRTBbxuBVCq",
    logo: bingBongLogo,
    highlights: [
      "Über 650 Slots von Top-Entwicklern wie Merkus, Novomatic und Pragmatic Play",
      "PayPal als beliebte Zahlungsmethode",
      "Mobile App für iOS und Android",
    ],
    bonus: {
      type: "50 Freispiele + 100€ Einzahlungsbonus (100%)",
      maxBonus: "100€ + 50 Freispiele",
      freispiele: "50 Freispiele für „Book of Ra Deluxe“",
      minDeposit: "1€",
      maxDeposit: "100€ (für maximalen Bonus)",
      maxWager: "1€ pro Spin",
      wageringRequirements: "30x Bonus",
      timeframe: "30 Tage (ab Gutschrift)",
      validity: "1x pro Haushalt",
      availableIn: ["Deutschland"],
    },
    ratings: [
      { category: "Bonusangebote & Promotionen", score: 4 },
      { category: "Spielauswahl", score: 3 },
      { category: "Kundensupport", score: 5 },
      { category: "Treueprogramme", score: 5 },
      { category: "Auszahlungsbedingungen", score: 5 },
    ],
    faqs: [
      {
        question: "Ist Bing Bong legal?",
        answer:
          "Ja, Bing Bong besitzt eine deutsche Lizenz der GGL und erfüllt alle gesetzlichen Vorgaben.",
      },
      {
        question: "Wie hoch ist der Willkommensbonus?",
        answer:
          "Der Bonus beträgt 100 % bis zu 100 € sowie 50 Freispiele für „Book of Ra Deluxe“.",
      },
      {
        question: "Welche Zahlungsmethoden bietet Bing Bong?",
        answer:
          "PayPal, Klarna, Trustly, Visa, Mastercard, Skrill und viele weitere sichere Methoden.",
      },
      {
        question: "Was kann ich bei Bing Bong spielen?",
        answer:
          "Über 650 Slots, darunter Klassiker wie Book of Ra Deluxe und moderne Hits wie Sweet Bonanza.",
      },
      {
        question: "Wie schnell sind Auszahlungen?",
        answer:
          "Dank der Blitz-Auszahlung sind Gewinne innerhalb von 24 Stunden auf deinem Konto verfügbar.",
      },
    ],
    paymentMethods: [
      { name: "PayPal", logo: paypalLogo },
      { name: "Sofortüberweisung", logo: sofortLogo },
      { name: "Giropay", logo: giropayLogo },
      { name: "Trustly", logo: trustlyLogo },
      { name: "Visa", logo: visaLogo },
      { name: "Mastercard", logo: mastercardLogo },
      { name: "Klarna", logo: klarnaLogo },
      { name: "Skrill", logo: skrillLogo },
      { name: "Neteller", logo: netellerLogo },
    ],
    overview: {
      foundingYear: "2024",
      licence: "Gemeinsame Glücksspielbehörde der Länder (GGL), Deutschland",
      specialFeatures: [
        "Breites Spielangebot mit über 650 Slots",
        "PayPal als Zahlungsmethode",
        "Blitz-Auszahlungen innerhalb von 24 Stunden",
        "Mobile App für iOS und Android",
      ],
      website: "bingbong.de",
      security: ["SSL-Verschlüsselung", "Responsible Gaming Maßnahmen"],
      description:
        "Bing Bong wurde 2024 gegründet und gehört zu den wenigen Online-Spielotheken in Deutschland mit einer Lizenz der Gemeinsamen Glücksspielbehörde der Länder (GGL). Dies garantiert ein sicheres und faires Spielerlebnis. Neben der rechtlichen Sicherheit punktet der Anbieter mit einem modernen Design, einer intuitiven Navigation und innovativen Features wie Blitz-Auszahlungen innerhalb von 24 Stunden.",
    },
    pros: [
      "Attraktiver Willkommensbonus mit fairen Bedingungen",
      "Über 650 Spiele von renommierten Anbietern",
      "Sichere Ein- und Auszahlungen mit PayPal und weiteren Methoden",
    ],
    cons: [
      "Fokus liegt ausschließlich auf Slots, keine Tischspiele oder Live-Casino",
    ],
  },
};
