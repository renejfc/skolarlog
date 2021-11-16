enum suffixes {
  GMAIL = '@gmail.com',
  OUTLOOK = '@outlook.com',
  HOTMAIL = '@hotmail.com',
  PROTONMAIL = '@protonmail.com'
}

export function useAutoComplete() {
  const autoEmailOptions = (val: string) => computed(() => [...Object.values(suffixes)].map((suffix) => {
    const prefix = val.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    }
  })).value

  const getShow = (val: string) => () => val.length > 2 && !val.includes('@')

  return {
    autoEmailOptions,
    getShow,
  }
}
