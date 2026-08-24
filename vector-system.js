import { QI_IQQ } from './qi-iqq.js';

VECTOR_SYSTEM.transfer = function() {
    const status = this.status();
    const vektoren = status.vektoren;
    return QI_IQQ.absorb(vektoren);
};
