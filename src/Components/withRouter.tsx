import {NavigateFunction, Params, useLocation, useNavigate, useParams,} from "react-router-dom";
import React, {ComponentType} from "react";

export function withRouter<T>(Component: ComponentType<T>) {
    function ComponentWithRouterProp(props: T) {
        // let location = useLocation();
        // let navigate = useNavigate();
        let params = useParams();
        return (
            <Component{...props} params={params}/>
        );
    }
    return ComponentWithRouterProp;
}

export type  WithRouterType<P> = {
    params: P
}
// export type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;