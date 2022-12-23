import React, {
  useState,
  useEffect,
} from 'react';
import {
  Helmet,
  HelmetProvider,
} from 'react-helmet-async';

import Loader from './components/Loader';
import NetworkItem from './components/NetworkItem';
import Credits from './components/Credits';

import defaultOptions from './utils/defaultOptions';
import translations from './utils/translations';

import {
  OptionsProps,
  NetworkProps,
  TranslationsProps,
} from './utils/types';

import {
  Container,
  Contents,
  User,
  Title,
  Bio,
  BioTitleTab,
  Networks,
} from './styles';

const App = () => {
  const [optionsData, setOptionsData] = useState<OptionsProps>(defaultOptions);
  const [loadingData, setLoadingData] = useState<boolean>(true);

  useEffect(() => {
    fetch('options.json')
      .then((data) => data.json())
      .then((json) => {
        setOptionsData(json);

        setTimeout(() => setLoadingData(false), 1500);
      });
  }, []);

  return (
    <>
      {loadingData ? (
        <Loader />
      ) : (
        <HelmetProvider>
          <Container
            bgColor={optionsData.background.color}
            bgImage={optionsData.background.image}
          >
            <Helmet>
              <title>{translations[optionsData.user.language as keyof TranslationsProps].page_title(optionsData.user.name)}</title>
              <meta
                name="og:image"
                content={`https://${optionsData.user.github_username}.github.io/my-links/share_banner.png`}
              />
              <meta
                name="og:description"
                content={`${optionsData.user.name}'s social networks links.`}
              />
              <meta
                name="og:url"
                content={`https://${optionsData.user.github_username}.github.io/my-links`}
              />
              <meta
                name="og:title"
                content={`${optionsData.user.name}'s MyLinks.`}
              />
            </Helmet>
            <Contents>
              <User>
                <Title>
                  {translations[optionsData.user.language as keyof TranslationsProps].page_title(optionsData.user.name)}
                </Title>
                {optionsData.user.bio && (
                  <Bio>
                    <BioTitleTab>
                      {translations[optionsData.user.language as keyof TranslationsProps].about_me}
                    </BioTitleTab>
                    {optionsData.user.bio}
                  </Bio>
                )}
              </User>
              <Networks>
                {optionsData.networks.map((network: NetworkProps, index: number) => {
                  return (
                    <NetworkItem
                      key={`network_${index}`}
                      name={network.name}
                      url={network.url}
                      icon={network.icon}
                      buttonColor={optionsData.buttons.color}
                      textColor={optionsData.buttons.text_color}
                      textHoverColor={optionsData.buttons.hover_color}
                    />
                  );
                })}
              </Networks>
            </Contents>
            <Credits
              language={optionsData.user.language}
            />
          </Container>
        </HelmetProvider>
      )}
    </>
  );
};

export default App;
