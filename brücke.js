// bücke.js

// QI = Erkenntnis
// IQQ = Weis
// Continuum = Zugang durch Qualität

function QI(erkenntnis) {
    return erkenntnis; // QI↑
}

function IQQ(weis) {
    return weis; // IQQ↑
}

function continuumZugang(qi, iqq) {
    const summe = qi + iqq;

    // VECTOR entscheidet den Zugang
    if (summe > 0) {
        return "Continuum geöffnet";
    } else {
        return "Continuum geschlossen";
    }
}

// Export für dein Repo
module.exports = {
    QI,
    IQQ,
    continuumZugang
};
