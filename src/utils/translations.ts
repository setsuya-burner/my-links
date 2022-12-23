import {
  TranslationsProps,
} from './types';

const translations: TranslationsProps = {
  en_US: {
    page_title: (userName: string) => `${userName}'s MyLinks`,
    about_me: 'About me',
    get_on_github: 'Get yours on my GitHub!',
  },
  pt_BR: {
    page_title: (userName: string) => `MyLinks de ${userName}`,
    about_me: 'Sobre mim',
    get_on_github: 'Consiga o seu no meu GitHub!',
  },
  es_ES: {
    page_title: (userName: string) => `MyLinks de ${userName}`,
    about_me: 'Acerca de mí',
    get_on_github: '¡Consigue el tuyo en mi GitHub!',
  },
};

export default translations;