import type { MenuGroupOption, MenuOption } from 'naive-ui'

function renderIcon(iconClass: string) {
  return () => h('span', { class: iconClass })
}

export const SiderItems: (MenuGroupOption | MenuOption)[] = [
  {
    label: 'Guide',
    key: 'guide',
    icon: renderIcon('i-carbon-book'),
  },
]
