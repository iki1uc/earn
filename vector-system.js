import { MIND } from './qi-iqq.js';

VECTOR_SYSTEM.transfer = function() {
    const status = this.status();
    const vektoren = status.vektoren;
    return MIND.absorb(vektoren);
};
