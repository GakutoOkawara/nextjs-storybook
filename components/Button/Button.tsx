import React from "react"
import styles from "./Button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "large"
  variant?: "outlined" | "attention"
  fullWidth?: boolean
  children?: React.ReactNode
}

export const Button = ({size, variant, fullWidth, children, ...props}: ButtonProps) => {
  const classNameList = [styles.button]

  if(size) classNameList.push(styles[`size-${size}`])
  if(variant) classNameList.push(styles[`variant-${variant}`])
  if(fullWidth) classNameList.push(styles["full-width"])

  const classNames = classNameList.join(" ")

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  )
}