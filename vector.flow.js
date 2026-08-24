// vector.flow.js
// FLOW = Energiefluss zwischen QI und IQQ

function QI(rolle, ort, home) {
    return rolle + ort + home;
}

function IQQ(suite, bildung) {
    return suite + bildung;
}

function ENGINE(qi, iqq) {
    return qi * 0.6 + iqq * 0.4;
}

// FLOW-Wert (0–1)
function FLOW(qi, iqq) {
    const engine = ENGINE(qi, iqq);
    const flow = Math.min(1, Math.max(0, engine / 100));
    const stabilität = 1 - Math.abs(flow - 0.5);

    return { flow, stabilität };
}

// Potender (steigend)
function potenderVector(qi, iqq) {
    const { flow } = FLOW(qi, iqq);
    const engine = ENGINE(qi, iqq);
    const richtung = engine + (qi - iqq);

    return {
        typ: "potender",
        flow,
        engine,
        richtung,
        ausgang: engine + richtung
    };
}

// Abfall (fallend)
function abfallVector(qi, iqq) {
    const { flow } = FLOW(qi, iqq);
    const engine = ENGINE(qi, iqq);
    const richtung = engine - (qi + iqq);

    return {
        typ: "abfall",
        flow,
        engine,
        richtung,
        ausgang: engine + richtung
    };
}

module.exports = {
    QI,
    IQQ,
    ENGINE,
    FLOW,
    potenderVector,
    abfallVector
};
