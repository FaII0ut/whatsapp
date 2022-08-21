import React, { useState, useEffect, useRef } from "react";

interface item {
  id: string;
  name: string;
}

type ButtonTypes =
  | "DefaultButton"
  | "DropButton"
  | "IconButton"
  | "ThemeToggle"
  | undefined;

interface ButtonProps {
  type: ButtonTypes;
  name: string | undefined;
  extraClasses?: string;
  icon?: string;
  disabled?: boolean;
  items?: item[];
  theme?: string;
  textClasses?: string;
  position?: string;
  onSelect: (item: any) => any;
}

const Button: React.FC<ButtonProps> = ({
  name,
  icon,
  type = "DefaultButton",
  items,
  position,
  onSelect,
  theme = "default",
  extraClasses,
  disabled,
  textClasses,
}) => {
  const ImportedButtonRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!!!type) return;

    setLoading(true);
    const importButton = async (): Promise<void> => {
      try {
        const { default: namedImport } = await import(`./${type}.tsx`);
        ImportedButtonRef.current = namedImport;
      } catch (err) {
        // throw err;
      } finally {
        setLoading(false);
      }
    };
    importButton();
  }, [type]);

  if (!loading && ImportedButtonRef.current) {
    const { current: ImportedButton } = ImportedButtonRef;
    return (
      <ImportedButton
        name={name}
        theme={theme}
        icon={icon}
        disabled={disabled}
        items={items}
        position={position}
        textClasses={textClasses}
        extraClasses={extraClasses}
        onSelect={onSelect}
      />
    );
  }
  return null;
};
export default Button;
