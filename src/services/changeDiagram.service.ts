import { calcTemperature, calcVL, calcVV } from '../utils/calculateInterpolate';


export function getChangeDiagram( pressure: number ) {
    
    try {
        
        const Temp = calcTemperature( pressure );
    
        if ( Math.round( Temp ) <= 30 ) return null;            
    
        const VL = calcVL( pressure );
        const VV = calcVV( pressure );
    
        const Result = {
            // 'temperatura': Math.round( Temp ),
            'specific_volume_liquid': parseFloat( VL.toFixed( 5 ) ),
            'specific_volume_vapor': parseFloat( VV.toFixed( 5 ) )
        };
    
        return Result;

    } catch (error) {
        return null;
    }

}