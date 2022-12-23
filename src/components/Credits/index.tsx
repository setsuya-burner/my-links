import React from 'react';
import {
  FiGithub,
} from 'react-icons/fi';

import translations from '../../utils/translations';

import {
  CreditsProps,
  TranslationsProps,
} from '../../utils/types';

import {
  Container,
} from './styles';

const Credits = ({
  language,
} : CreditsProps) => {
  return (
    <Container>
      <a
        href="https://github.com/setsuya/my-links"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub /><span>{translations[language as keyof TranslationsProps].get_on_github}</span>
      </a>
    </Container>
  );
}

export default Credits;
