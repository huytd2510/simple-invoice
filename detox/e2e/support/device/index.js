import i18n from 'i18next'

export const changeLanguage = async language => {
  await i18n.changeLanguage(language)
}
