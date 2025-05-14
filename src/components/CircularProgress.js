import React from 'react';

const CircularProgress = ({ percentage }) => {
  const radius = 90;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percentage / 100 * circumference);
  const fillColor = getColor(percentage);

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="lightgray"
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={fillColor}
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        style={{ strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: offset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x={radius}
        y={radius + 10}
        fontSize="24px" // Increased font size
        textAnchor="middle"
        fill="black"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

function getColor(percentage) {
  if (percentage <= 25) return '#ff0000';
  else if (percentage <= 50) return '#ffff00';
  else if (percentage <= 75) return '#00ff00';
  else return '#0000ff';
}

export default CircularProgress;