import type { ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export enum ButtonTypes {
    primary = "primary",
    secondary = "secondary",
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    link?: boolean;
    btnType?: ButtonTypes;
};

function getBtnClasses(theme: ButtonTypes) {
    const styleMap = {
        primary: "px-8 py-4 hover:underline border-8 border-violet-600 rounded-full",
        secondary: "font-bold text-violet-600 px-8 py-4 hover:underline",
    };

    return styleMap[theme];
}

export default function Button({ children, btnType = ButtonTypes.primary, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={((theme: ButtonTypes) => {
                return cn([getBtnClasses(theme), props.className]);
            })(btnType)}
        >
            {children}
        </button>
    );
}
