import { calcTemperature, calcVL, calcVV } from '../utils/calculateInterpolate';


export function getChangeDiagram( pressure: number ) {
    
    try {
        
        const Temp = calcTemperature( pressure );
    
        const roundTemp = Math.round( Temp );
    
        const VL = calcVL( pressure );
        const VV = calcVV( pressure );
    
        const Result = {
            // 'specific_volume_liquid': ( roundTemp <= 30 ) ? null : parseFloat( VL.toFixed( 5 ) ),
            // 'specific_volume_vapor': ( roundTemp <= 30 ) ? null : parseFloat( VV.toFixed( 5 ) )
            'specific_volume_liquid': parseFloat( VL.toFixed( 5 ) ),
            'specific_volume_vapor': parseFloat( VV.toFixed( 5 ) )
        };
    
        return Result;

    } catch (error) {
        return null;
    }

}