export type TranslationsProps = {
  en_US: LanguageProps,
  pt_BR: LanguageProps,
  es_ES: LanguageProps,
};

export type LanguageProps = {
  page_title: (userName: string) => string,
  about_me: string,
  get_on_github: string,
};

export type OptionsProps = {
  user: UserProps,
  background: BackgroundProps,
  buttons: ButtonsProps,
  networks: NetworkProps[],
};

export type UserProps = {
  language: string,
  name: string,
  bio: string,
  github_username: string,
};

export type BackgroundProps = {
  color: string,
  image: string,
};

export type ButtonsProps = {
  color: string,
  hover_color: string,
  text_color: string,
};

export type NetworkProps = {
  name: string,
  url: string,
  icon: string,
};

export type NetworkItemProps = {
  name: string,
  url: string,
  icon: string,
  buttonColor: string,
  textColor: string,
  textHoverColor: string,
};

export type CreditsProps = {
  language: string,
};

export type MainContainerParams = {
  bgColor: string,
  bgImage: string,
};

export type NetworkItemContainerParams = {
  buttonColor: string,
  textHoverColor: string,
};

export type NetworkItemNetworkLinkParams = {
  textColor: string,
};
