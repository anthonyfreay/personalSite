import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Anthony Freay';
const SITE_TITLE = 'Anthony Freay | Photographer & Software Engineer';
const SITE_DESCRIPTION = 'NYC-based photographer and software engineer. Explore portraits, concerts, and events captured by Anthony Freay.';
const SITE_URL = 'https://anthonyfreay.com';
// Use an existing public image as the default social preview
const DEFAULT_IMAGE_PATH = '/covers/live_cover.jpg';
const DEFAULT_IMAGE_ABS = `${SITE_URL}${DEFAULT_IMAGE_PATH}`;
const DEFAULT_TWITTER = '@anthonyfreay';

const DefaultSEO = () => {
    const location = useLocation();
    const canonicalUrl = `${SITE_URL}${location.pathname || '/'}`;

    return (
        <Helmet prioritizeSeoTags>
            {/* Basic */}
            <title>{SITE_TITLE}</title>
            <meta name="description" content={SITE_DESCRIPTION} />
            <meta name="author" content="Anthony Freay" />
            <link rel="canonical" href={canonicalUrl} />
            <link rel="icon" href="/favicon.ico" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={SITE_TITLE} />
            <meta property="og:description" content={SITE_DESCRIPTION} />
            <meta property="og:image" content={DEFAULT_IMAGE_ABS} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image:alt" content="Anthony Freay — Photographer & Software Engineer" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={SITE_TITLE} />
            <meta name="twitter:description" content={SITE_DESCRIPTION} />
            <meta name="twitter:image" content={DEFAULT_IMAGE_ABS} />
            <meta name="twitter:creator" content={DEFAULT_TWITTER} />

            {/* Schema.org: Person */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Person',
                    name: 'Anthony Freay',
                    url: SITE_URL,
                    image: DEFAULT_IMAGE_ABS,
                    jobTitle: 'Photographer, Software Engineer',
                    description:
                        'NYC-based photographer and creative technologist capturing portraits, concerts, and events.',
                    worksFor: {
                        '@type': 'Organization',
                        name: 'BNY',
                    },
                    sameAs: [
                        'https://www.instagram.com/anthonyfreay/',
                        'https://www.linkedin.com/in/anthonyfreay/',
                        'https://x.com/anthonyfreay',
                    ],
                    knowsAbout: ['Photography', 'Software Engineering', 'Design', 'Technology'],
                })}
            </script>

            {/* Schema.org: WebSite */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    url: `${SITE_URL}/`,
                    name: SITE_NAME,
                    alternateName: 'Anthony Freay Photography',
                    publisher: {
                        '@type': 'Person',
                        name: 'Anthony Freay',
                    },
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: `${SITE_URL}/search?q={search_term_string}`,
                        'query-input': 'required name=search_term_string',
                    },
                })}
            </script>

            {/* Schema.org: VisualArtwork */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'VisualArtwork',
                    name: 'Selected Works by Anthony Freay',
                    creator: {
                        '@type': 'Person',
                        name: 'Anthony Freay',
                        url: SITE_URL,
                    },
                    artMedium: 'Digital Photography',
                    artform: 'Photography',
                    genre: ['Portrait', 'Concert', 'Event'],
                    image: [
                        `${SITE_URL}/covers/people_cover.jpg`,
                        `${SITE_URL}/covers/live_cover.jpg`,
                        `${SITE_URL}/covers/events_cover.jpg`,
                    ],
                    url: `${SITE_URL}/work`,
                    description:
                        'A collection of original photography work by Anthony Freay, showcasing portraits, concerts, and NYC events.',
                })}
            </script>
        </Helmet>
    );
};

export default DefaultSEO;
