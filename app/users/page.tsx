import { Metadata } from 'next'
import { UsersTable } from 'modules/users/components/users-table'

export const metadata: Metadata = {
	title: 'Usuarios - Next.js Enterprise',
	description: 'Lista de usuarios del sistema',
}

/**
 * Users page component that displays a table of all users.
 * This is a server component that wraps the client-side UsersTable component.
 *
 * @returns The users page with a table of users
 */
export default function UsersPage() {
	return (
		<main className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
						Usuarios
					</h1>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
						Lista completa de usuarios del sistema
					</p>
				</div>
				<div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
					<UsersTable />
				</div>
			</div>
		</main>
	)
}
