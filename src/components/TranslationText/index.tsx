import { useTranslation } from 'react-i18next'

export interface TranslationTextProps {
  text: string
}

const TranslationText = ({ text }: TranslationTextProps) => {
  const { t } = useTranslation()

  return t(text)
}

export default TranslationText