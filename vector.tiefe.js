// vector.tiefe.js
// Entschluss-Axiom – Tiefen-Engine

// VECTOR.TRIEB = Impuls-Axiom
function VECTOR_TRIEB(qi, iqq) {
    return (qi - iqq); // Höhe-Achse
}

// VECTOR.ENGINE = Kraft-Axiom
function VECTOR_ENGINE(qi, iqq) {
    return (qi * 0.6) + (iqq * 0.4); // Breite-Achse
}

// VECTOR.TIEFE = Entschluss-Axiom
function VECTOR_TIEFE(qi, iqq) {
    const trieb = VECTOR_TRIEB(qi, iqq);
    const engine = VECTOR_ENGINE(qi, iqq);

    // Tiefe = Entscheidung zwischen Höhe und Breite
    const tiefe = (trieb + engine) / 2;

    return {
        typ: "vector.tiefe",
        trieb,
        engine,
        tiefe,
        ausgang: tiefe
    };
}

// Export
module.exports = {
    VECTOR_TRIEB,
    VECTOR_ENGINE,
    VECTOR_TIEFE
};
