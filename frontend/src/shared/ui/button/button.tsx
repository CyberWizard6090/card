


import "./button.scss";

type IButton = {
  readonly children: string | string[];
  readonly Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  readonly disabled?: boolean;
  readonly className?: string;
  readonly onClick?: () => void | any;
};

export const Button = ({
  children,
  Icon,

  disabled = false,
  className,
  onClick,
}: IButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "button  button-theme"
      }
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};
