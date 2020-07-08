import * as React from "react";

export interface CheckboxProps {
  label: string;
  handleCheckboxChange: (label: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Checkbox: React.SFC<CheckboxProps> = (props) => {
  const { label, handleCheckboxChange, className, style } = props;
  const [isChecked, setChecked] = React.useState(false);

  const toggleCheckboxChange = () => {
    setChecked(!isChecked);
    handleCheckboxChange(label);
  };

  return (
    <div className={className} style={style}>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
        />
        <span className="checkmark">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
