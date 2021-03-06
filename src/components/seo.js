import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, image }) {
  const data = useStaticQuery(seoMetadata);
  const seo = data.allMarkdownRemark.edges[0].node.frontmatter;

  const metaDescription = description || seo.description;
  const metaImage = image || seo.image.publicURL;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${seo.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: seo.keywords.join(','),
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: 'og:image:width',
          content: 512,
        },
        {
          property: 'og:image:height',
          content: 512,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: seo.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'pt-br',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default React.memo(SEO);

const seoMetadata = graphql`
query {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/seo\\\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          description
          image {
            publicURL
          }
          keywords
        }
      }
    }
  }
}
`;
