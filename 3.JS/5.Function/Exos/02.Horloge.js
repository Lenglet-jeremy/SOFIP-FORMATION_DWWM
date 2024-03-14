// let heure = -1;
// let minute = -1;
// let seconde = -1;

// do {
//   heure = Number(prompt("Veuillez saisir une heure."));
// } while (heure < 0 || heure > 24);

// do {
//   minute = Number(prompt("Veuillez saisir une minute."));
// } while (minute < 0 || minute > 60);

// do {
//   seconde = Number(prompt("Veuillez saisir une seconde."));
// } while (seconde < 0 || seconde > 60);

// const Horloge = {
//   m_heure: 0,
//   m_minute: 0,
//   m_seconde: 0,

//   computeNextSecond: function (heure, minute, seconde) {
//     seconde++;
//     if (seconde % 60 === 0 && seconde !== 0) {
//       this.m_minute = minute++;
//       this.m_seconde = seconde = 0;
//     }
//     if (minute % 60 === 0 && minute !== 0) {
//       this.m_heure = heure++;
//       this.m_minute = minute = 0;
//     }
//     if (heure % 24 === 0 && heure !== 0) {
//       this.m_heure = heure = 0;
//     }
//     this.m_seconde = seconde;
//     this.m_minute = minute;
//     this.m_heure = heure;

//     console.log(
//       this.m_heure +
//         " heures" +
//         this.m_minute +
//         " minutes" +
//         this.m_seconde +
//         " secondes"
//     );
//   },
// };

// Horloge.m_heure = heure;
// Horloge.m_minute = minute;
// Horloge.m_seconde = seconde;
// Horloge.computeNextSecond(heure, minute, seconde);

let heure = -1;
let minute = -1;
let seconde = -1;

do {
  heure = Number(prompt("Veuillez saisir une heure."));
} while (heure < 0 || heure > 24);

do {
  minute = Number(prompt("Veuillez saisir une minute."));
} while (minute < 0 || minute > 60);

do {
  seconde = Number(prompt("Veuillez saisir une seconde."));
} while (seconde < 0 || seconde > 60);

const Horloge = {
  m_heure: 0,
  m_minute: 0,
  m_seconde: 0,

  computeNextSecond: function (heure, minute, seconde) {
    seconde++;
    if (seconde > 59) {
      this.m_minute = minute++;
      this.m_seconde = seconde = 0;
    }
    if (minute > 59) {
      this.m_heure = heure++;
      this.m_minute = minute = 0;
    }
    if (heure > 23) {
      this.m_heure = heure = 0;
    }
    this.m_seconde = seconde;
    this.m_minute = minute;
    this.m_heure = heure;

    console.log(
      this.m_heure +
        " heures" +
        this.m_minute +
        " minutes" +
        this.m_seconde +
        " secondes"
    );
  },
};

Horloge.m_heure = heure;
Horloge.m_minute = minute;
Horloge.m_seconde = seconde;
Horloge.computeNextSecond(heure, minute, seconde);
