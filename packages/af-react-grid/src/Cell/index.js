import React, {
    cloneElement,
    useContext,
    useRef,
    useEffect,
    useMemo,
    useState,
    isValidElement
} from "react";

import { RootContext, TypeContext } from "../contexts";
import { ByType, ElementRefProp } from "../constants";

const ADDITIONAL_INLINE_STYLES = {
    /* If exact width/height is known, flexBasis may be erased */
    flexBasis: "auto",
    
    /* We must take boxSizing into account to render borders, paddings, scrollbars, etc. */
    boxSizing: "border-box"
}

const useDefaultCellKey = () => {
    const keyRef = useRef();
    if( !keyRef.current ){
        keyRef.current = Math.random().toString(36).slice(-7);
    }
    return keyRef.current;
}

const Cell = ({ children: SingleChild, cellKey }) => {

    if( !isValidElement( SingleChild ) ){
        throw new Error( "Cell must have one child" );
    }

    const { style: providedStyle } = SingleChild.props;

    const cellRef = useRef();
    const GridModel = useContext( RootContext );
    const type = useContext( TypeContext );
    const defaultCellKey = useDefaultCellKey();
    const finalCellKey = cellKey || defaultCellKey;
    const [ curDimension, setCurDimension ] = useState( GridModel.get( finalCellKey ) );

    useEffect(() => {
        const up = () => setCurDimension( GridModel.get( finalCellKey ) );
        const evt = `@cell/${finalCellKey}`;
        GridModel.on( evt, up );
        return () => {
            GridModel.off( evt, up );
        }
    }, [ finalCellKey ]);

    useEffect(() => {
        GridModel.registerCell( finalCellKey, type, cellRef );
        return () => {
            GridModel.unregisterCell( finalCellKey );
        }
    }, [ type, finalCellKey ]);

    const style = useMemo(() => {

        if( curDimension === undefined ){
            return providedStyle;
        }

        return {
            ...providedStyle,
            ...ADDITIONAL_INLINE_STYLES,
            [ByType[type].cssSizeProp]: curDimension
        }
    }, [ curDimension, providedStyle ]);

    return cloneElement( SingleChild, { [ElementRefProp]: finalCellKey, style, ref: cellRef });
}

export default Cell;