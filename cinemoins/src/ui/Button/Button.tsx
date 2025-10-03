import "./Button.css"
import clsx from "clsx"

interface ButtonProps{
    name: string;
    variant: "primary" | "secondary";
    disabled?: boolean;
}

export const Button = ({ name, variant, disabled = false}: ButtonProps) => {
    return <button className={clsx("button", `button--${variant}`)} disabled={disabled}
    > {name} </button>;

}