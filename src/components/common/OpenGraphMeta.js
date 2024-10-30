import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const OpenGraphMeta = ({
  title,
  description,
  url,
  image,
  type = 'website',
  locale = 'de_DE',
  siteName = 'EinfachNurZocken',
  twitterCard = 'summary_large_image',
  twitterSite,
}) => {
  return (
    <Helmet>
      {/* Standard Meta-Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* Open Graph Meta-Tags */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {type && <meta property="og:type" content={type} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {locale && <meta property="og:locale" content={locale} />}
      {siteName && <meta property="og:site_name" content={siteName} />}

      {/* Twitter Card Tags */}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
    </Helmet>
  );
};

OpenGraphMeta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  locale: PropTypes.string,
  siteName: PropTypes.string,
  twitterCard: PropTypes.string,
};

export default OpenGraphMeta;
