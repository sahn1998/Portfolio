import React from "react";

type SliderProps = {
  appearance?: React.CSSProperties; // Style overrides for customization
  width?: number; // Slider width
  height?: number; // Slider height
  min?: number; // Minimum value of the slider
  max?: number; // Maximum value of the slider
  step?: number; // Step size
  value: number; // Current value of the slider (controlled component)
  onValueChange: (value: number) => void; // Callback for value changes
};

export const SimpleSlider: React.FC<SliderProps> = ({
  appearance,
  width = 300,
  height = 8,
  min = 0,
  max = 100,
  step = 1,
  value,
  onValueChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onValueChange(newValue);
  };

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value} // Use value from parent state
        onChange={handleChange}
        style={{
          appearance: "none",
          width: `${width}px`,
          height: `${height}px`,
          background: "linear-gradient(to right, #4caf50, #2196f3)",
          borderRadius: "5px",
          outline: "none",
          cursor: "pointer",
          ...appearance, // Merge custom appearance styles
        }}
      />
    </div>
  );
};
