import React from "react"
import { Helmet } from "react-helmet"

const MetadataI9 = ({metadata}) => {
	return (
		<Helmet>
			<meta charset="utf-8" />
			<meta name="theme-color" content="#000000" />
      <meta name="robots" content="noindex" />
			<title>{metadata.title}</title>
			<link rel="shortcut icon" href="https://i.forbesimg.com/favicon.ico" />
			<link rel="canonical" href={metadata.canonicalUrl} />
			<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
			<meta name="referrer" content="origin-when-cross-origin" />
			<meta name="description" itemprop="description" content={metadata.description} />
			<meta name="keywords" content={metadata.keywords} />
			<meta name="apple-itunes-app" content="app-id=588647136" />
			<meta property="og:site_name" content="Forbes" />
			<meta property="og:title" content={metadata.title} />
			<meta property="og:type" content="article" />
			<meta property="og:url" content={metadata.canonicalUrl} />
			<meta property="og:image" content={metadata.imageUrl} />
			<meta property="og:description" content={metadata.description} />
			<meta property="fb:app_id" content="123694841080850" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@forbes" />
			<meta name="twitter:image" content={metadata.imageUrl} />
			<meta name="twitter:title" content={metadata.title} />
			<meta name="twitter:description" content={metadata.description} />
			<meta itemprop="thumbnailURL" content={metadata.imageUrl} />
			<script type="application/ld+json">
				{`
					{
						"@context": "http://schema.org",
						"@type": "WebPage",
						"name": "${metadata.title}",
						"description": "${metadata.description}",
						"url": "${metadata.canonicalUrl}",
						"image": {
							"@type": "ImageObject",
							"url": "${metadata.imageUrl}"
						},
						"publisher": {
							"@type": "Organization",
							"name": "Forbes"
						}
					}
				`}
			</script>
		</Helmet>
	);
}

export default MetadataI9;