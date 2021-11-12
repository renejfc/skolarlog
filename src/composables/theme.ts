import { darkTheme } from 'naive-ui'

const isDark = useDark()
const themeShift = useToggle(isDark)
const externalUITheme = computed(() => isDark.value ? darkTheme : null)

export function useTheme() {
  return {
    isDark,
    themeShift,
    externalUITheme,
  }
}
