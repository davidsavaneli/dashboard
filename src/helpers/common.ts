export const getCssColorVariable = (
  color:
    | 'primary'
    | 'primaryLight'
    | 'secondary'
    | 'dark'
    | 'medium'
    | 'light'
    | 'success'
    | 'error'
    | 'info'
    | 'warning',
) => {
  const root = document.documentElement
  const cssVarName = `--color-${color}`
  return getComputedStyle(root).getPropertyValue(cssVarName).trim()
}