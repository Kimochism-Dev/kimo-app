import React from "react";

interface IBadge {
  label: string;
  variant?: string;
  color?: string;
}

const Badge = ({ label, variant = "primary", color = "" }: IBadge) => {
  return (
    <div className={`badge ${variant}`} style={{ color: color }}>
      {label}
    </div>
  );
};

export default Badge;
