// vector.schlag.js
// Impuls-Vektor – der Moment-Schlag

// QI = Reinheit des Tatbestands
function QI(rolle, ort, home) {
    return rolle + ort + home;
}

// IQQ = Reinheit des Vorgangs
function IQQ(suite, bildung) {
    return suite + bildung;
}

// VECTOR.SCHLAG = Momentimpuls (QI * IQQ) / 9
function VECTOR_SCHLAG(qi, iqq) {
    const impuls = (qi * iqq) / 9;

    return {
        typ: "vector.schlag",
        impuls,
        ausgang: impuls
    };
}

// Export
module.exports = {
    QI,
    IQQ,
    VECTOR_SCHLAG
};
