import React from 'react';
import {
  FaAmazon,
  FaArtstation,
  FaBandcamp,
  FaBattleNet,
  FaBehance,
  FaDailymotion,
  FaDeviantart,
  FaDiscord,
  FaFacebookSquare,
  FaFlickr,
  FaGithub,
  FaInstagram,
  FaKickstarter,
  FaLastfmSquare,
  FaLinkedin,
  FaMedium,
  FaPatreon,
  FaPaypal,
  FaPinterest,
  FaPlaystation,
  FaReddit,
  FaSpotify,
  FaSteam,
  FaTelegram,
  FaTiktok,
  FaTumblr,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  FaXbox,
  FaYoutube,
} from 'react-icons/fa';

import {
  NetworkItemProps,
} from '../../utils/types';

import {
  Container,
  NetworkLink,
  NetworkName,
} from './styles';

const NetworkItem = ({
  name,
  url,
  icon,
  buttonColor,
  textColor,
  textHoverColor,
} : NetworkItemProps) => {
  const getIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case 'amazon':
        return (<FaAmazon />);
      case 'artstation':
        return (<FaArtstation />);
      case 'bandcamp':
        return (<FaBandcamp />);
      case 'battlenet':
        return (<FaBattleNet />);
      case 'behance':
        return (<FaBehance />);
      case 'dailymotion':
        return (<FaDailymotion />);
      case 'deviantart':
        return (<FaDeviantart />);
      case 'discord':
        return (<FaDiscord />);
      case 'facebook':
        return (<FaFacebookSquare />);
      case 'flickr':
        return (<FaFlickr />);
      case 'github':
        return (<FaGithub />);
      case 'instagram':
        return (<FaInstagram />);
      case 'kickstarter':
        return (<FaKickstarter />);
      case 'lastfm':
        return (<FaLastfmSquare />);
      case 'linkedin':
        return (<FaLinkedin />);
      case 'medium':
        return (<FaMedium />);
      case 'patreon':
        return (<FaPatreon />);
      case 'paypal':
        return (<FaPaypal />);
      case 'pinterest':
        return (<FaPinterest />);
      case 'playstation':
        return (<FaPlaystation />);
      case 'reddit':
        return (<FaReddit />);
      case 'spotify':
        return (<FaSpotify />);
      case 'steam':
        return (<FaSteam />);
      case 'telegram':
        return (<FaTelegram />);
      case 'tiktok':
        return (<FaTiktok />);
      case 'tumblr':
        return (<FaTumblr />);
      case 'twitch':
        return (<FaTwitch />);
      case 'twitter':
        return (<FaTwitter />);
      case 'whatsapp':
        return (<FaWhatsapp />);
      case 'xbox':
        return (<FaXbox />);
      case 'youtube':
        return (<FaYoutube />);
      default:
        return '';
    }
  };

  return (
    <Container
      buttonColor={buttonColor}
      textHoverColor={textHoverColor}
    >
      <NetworkLink
        textColor={textColor}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <NetworkName>
          {getIcon(icon)}<span>{name}</span>
        </NetworkName>
      </NetworkLink>
    </Container>
  );
}

export default NetworkItem;
