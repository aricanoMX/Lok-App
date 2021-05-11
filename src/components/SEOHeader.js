import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHeader = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content="Project Lok" />
      <meta property="og:description" content="Project Lok" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="https://tracker-51735.web.app/" />
      <meta property="og:site_name" content="Project Lok" />
      <meta property="og:locale" content="es_EN" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Project Lok" />
      <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      <meta name="twitter:description" content="Project Lok" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TU_USER" />
      <meta name="twitter:creator" content="@TU_USER" />
      <meta name="twitter:title" content="Project Lok" />
    </Helmet>
  );
};

export default SEOHeader;
