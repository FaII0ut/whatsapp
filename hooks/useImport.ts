import React, { useEffect, useRef, useState } from "react";
interface item {
    id: string,
    name: string,
}

interface Blo {
    size?: number; 
    fill?: string;
    stroke?: string;
    className?: string;
    type?: string | undefined;
    name?: string;
    extraClasses?: string;
    icon?: string;
    disabled?: boolean;
    items?: item[];
    theme?: string;
    onSelect?: (item: any) => any;

}

interface UseDynamicSVGImportOptions {
    onCompleted?: (
        name: string,
        ImportedElement: React.FC<Blo> | undefined
    ) => void;
    onError?: (err: Error) => void;
}

export default function useImport(
    name: string,
    options: UseDynamicSVGImportOptions = {}
) {
    const ImportedIconRef = useRef<React.FC<Blo>>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();

    const { onCompleted, onError } = options;
    useEffect(() => {
        const importIcon = async (): Promise<void> => {
            try {
                ImportedIconRef.current = (
                    await import(`../components/${name}`)
                    // await import(`${name}`)
                ).default;
                onCompleted?.(name, ImportedIconRef.current);
            } catch (err:any) {
                onError?.(err);
                setError(err);
                console.log(err)
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name, onCompleted, onError]);

    return { error, loading, ImportedElement: ImportedIconRef.current };
}