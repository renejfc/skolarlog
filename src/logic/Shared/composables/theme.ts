import { darkTheme, GlobalThemeOverrides } from 'naive-ui'

const isDark = useDark()
const themeShift = useToggle(isDark)
const externalUITheme = computed(() => isDark.value ? darkTheme : null)
const themeOverrides: GlobalThemeOverrides = {}

export function useTheme() {
  return {
    isDark,
    themeShift,
    themeOverrides,
    externalUITheme,
  }
}
