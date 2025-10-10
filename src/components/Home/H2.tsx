import type {PropsWithChildren} from "react";

const H2 = ({children}: PropsWithChildren) => {
    return <h2 className="text-[32px] font-extrabold">{children}</h2>
};

export default H2;