import React, { useEffect, useState } from 'react'


const usePermission = () => {
    // const permissions = useStoreState((state: State<StoreModel>) => state.user.permissions);
    // const setPermissions = useStoreActions(
    //     (action: Actions<StoreModel>) => action.user.setPermissions
    // );
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [checking, setChecking] = useState<boolean>(true);

    // useEffect(() => {
    //     setPermissions(["1","2","3","4"])
    // }, [])

    const getAccess = (req: string[], condition: string): boolean => {
        const permissions = ["1","2","3","4"]
        if ((!req || !req.length)) {
            return true;
        }
        if (!permissions.length) {
            return false;
        }``
        if (condition == "AND") {
            const found = permissions.every((r) => req.includes(r));
            return found;
        } else if (condition == "OR") {
            const found = permissions.some((r) => req.includes(r));
            return found;
        }
        return false

    };
    const checkPermission =  (requiredPermissions: string[], condition:string = "OR"):boolean => {
        const approve = getAccess(requiredPermissions, condition);
        setHasPermission(approve);
        setChecking(false)
        return approve
    };

    return {
        checkPermission, hasPermission, checking
    };
}

export default usePermission