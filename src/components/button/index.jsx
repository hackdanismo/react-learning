const Button = ({ to, type = "button", className, openAsTab, children }) => {
  return to ? (
    <a href={to} role="button" {...{ className }} target={openAsTab ? "blank" : undefined}>{children}</a>
  ) : (
    <button {...{ type, className }}>{children}</button>
  )
}

export default Button