import { type ReactNode } from 'react'

interface AppLayoutProps {
	children: ReactNode
}

/**
 * Layout wrapper for application pages.
 *
 * Provides consistent spacing and flex layout for all app sections.
 * This component wraps the main content area inside the SidebarInset.
 *
 * @example
 * ```tsx
 * import { AppLayout } from 'components/layouts/app-layout'
 *
 * export default function DashboardPage() {
 *   return (
 *     <AppLayout>
 *       <h1>Dashboard</h1>
 *       <p>Content here...</p>
 *     </AppLayout>
 *   )
 * }
 * ```
 */
export function AppLayout({ children }: AppLayoutProps) {
	return <div className="flex flex-1 flex-col gap-4">{children}</div>
}
