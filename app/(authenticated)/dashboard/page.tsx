import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getUser } from 'lib/supabase/auth'

export const metadata: Metadata = {
	title: 'Dashboard - Next.js Enterprise',
	description: 'Your personal dashboard',
}

/**
 * Dashboard page component.
 * This is a protected route that requires authentication.
 * If the user is not authenticated, they will be redirected to the login page.
 *
 * Currently shows placeholder content that will be expanded in future PRDs.
 *
 * @returns The dashboard page with placeholder content
 */
export default async function DashboardPage() {
	const user = await getUser()

	if (!user) {
		redirect('/login')
	}

	return (
		<main className="bg-gray min-h-screen dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
						Dashboard
					</h1>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
						Welcome back, {user.email}
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-lg border-2 border-dashed border-gray-300 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
						<div className="flex h-32 items-center justify-center">
							<div className="text-center">
								<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
									🚧 Protected Route
								</p>
								<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
									This page requires authentication
								</p>
							</div>
						</div>
					</div>

					<div className="rounded-lg border-2 border-dashed border-gray-300 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
						<div className="flex h-32 items-center justify-center">
							<div className="text-center">
								<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
									✅ Auth Status
								</p>
								<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
									You are authenticated
								</p>
							</div>
						</div>
					</div>

					<div className="rounded-lg border-2 border-dashed border-gray-300 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
						<div className="flex h-32 items-center justify-center">
							<div className="text-center">
								<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
									📊 Dashboard Content
								</p>
								<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
									To be implemented
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-8">
					<div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
						<h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
							User Information
						</h2>
						<dl className="space-y-2">
							<div>
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									Email
								</dt>
								<dd className="text-sm text-gray-900 dark:text-white">
									{user.email}
								</dd>
							</div>
							<div>
								<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
									User ID
								</dt>
								<dd className="text-sm text-gray-900 dark:text-white">
									{user.id}
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</main>
	)
}
