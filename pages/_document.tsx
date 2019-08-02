import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html>
				<Head>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link rel="stylesheet" href="/_next/static/style.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
