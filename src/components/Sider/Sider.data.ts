import type { MenuGroupOption, MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

function renderIcon(iconClass: string) {
  return () => h('span', { class: iconClass })
}

function renderRouterLink(route: string) {
  return () => h(RouterLink,
    { to: { name: route }, params: {} },
    { default: () => 'Sesión' },
  )
}

export const SiderItems: (MenuGroupOption | MenuOption)[] = [
  {
    label: renderRouterLink('_login'),
    key: 'auth',
    icon: renderIcon('i-carbon-login'),
  },
  {
    label: 'Guía',
    key: 'guide',
    icon: renderIcon('i-carbon-book'),
  },
]
