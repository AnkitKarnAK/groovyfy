import { AnalyticsWrapper } from './components/analytics';
import '@/styles/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<title>Next.js</title>
			</head>
			<body>
				{children}
				<AnalyticsWrapper />
			</body>
		</html>
	);
}
