import { StoreType } from "../../store/type";
import { childrenElementType } from "./type";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const AccessComponent = ({ children }: childrenElementType) => {

    const value = useSelector<StoreType, string>((state) => state.inputDataUserName.name);

    if(!value.length) {
        return <Navigate replace to="/" />
    }
        
    return children;
}
