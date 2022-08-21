import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef, useCallback } from "react";
import useImport from "../../hooks/useImport";

interface IconProps {
    name: string;
    size?: number;
    fill?: string;
    className?: string;
    stroke?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, fill = "none", className, stroke }) => {
    const { ImportedElement } = useImport(`icon/${name}`);

    if (ImportedElement) {
        return (
            <div style={{width:size}} className="transition-all ease-in-out duration-1000 ">
                <ImportedElement
                    className={className}
                    fill={fill}
                    stroke={stroke}
                    size={size}
                />
            </div>
        )
    }

    return null
}
export default Icon