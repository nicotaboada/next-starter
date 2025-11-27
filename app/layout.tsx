import 'styles/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { AppHeader } from 'components/layouts/app-header'
import { AppLayout } from 'components/layouts/app-layout'
import { AppSidebar } from 'components/layouts/app-sidebar'
import { SidebarInset, SidebarProvider } from 'components/ui/sidebar'
import { Toaster } from 'components/ui/sonner'
import { ApolloWrapper } from 'lib/apollo/apollo-wrapper'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<ApolloWrapper>
						<SidebarProvider>
							<AppSidebar />
							<SidebarInset>
								<AppHeader />
								<AppLayout>{children}</AppLayout>
							</SidebarInset>
						</SidebarProvider>
						<Toaster />
					</ApolloWrapper>
				</ThemeProvider>
			</body>
		</html>
	)
}
