
// Constantes base (extraídas del gráfico)
const P1 = 0.05;
const P2 = 10.0;

// Líquido saturado (lado izquierdo del triángulo)
const vl1 = 0.00105;
const vl2 = 0.0035;

// Vapor saturado (lado derecho del triángulo)
const vv1 = 30.0;
const vv2 = 0.0035;

// Temperatura
const T1 = 30;
const T2 = 500;

function calculateInterpolate( x1: number, x2: number, y1: number, y2: number, x: number): number {
    
    return y1 + ( ( y2 - y1 ) / ( x2 - x1 ) ) * ( x - x1 );

}

export function calcTemperature( pressure: number ) {
    
    return calculateInterpolate( P1, P2, T1, T2, pressure );

}

export function calcVL( pressure: number) {
    
    return calculateInterpolate( P1, P2, vl1, vl2, pressure );

}

export function calcVV( pressure: number ) {
    
    return calculateInterpolate( P1, P2, vv1, vv2, pressure );

}