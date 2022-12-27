import styles from "./Button.module.css"

type Button = {
  size?: string
  variant?: string
  loading?: boolean
  fullWidth?: boolean
  children?: string
}

export const Button = ({size, variant, loading, fullWidth, children}: Button) => {
  const classNameList = [styles.button]

  if(size) classNameList.push(styles[`size-${size}`])
  if(variant) classNameList.push(styles[`variant-${variant}`])
  if(loading) classNameList.push(styles["loading"])
  if(fullWidth) classNameList.push(styles["full-width"])

  const classNames = classNameList.join(" ")

  return (
    <button className={classNames}>
      {children}
    </button>
  )
}