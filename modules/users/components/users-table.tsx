'use client'

import { useQuery } from '@apollo/client/react'
import type { User } from 'types/user'
import { GET_USERS } from '../graphql/queries'

interface GetUsersResponse {
	getUsers: User[]
}

/**
 * UsersTable component that displays a list of users in a table format.
 * Fetches user data from GraphQL API and handles loading and error states.
 *
 * @returns A table component displaying users or loading/error states
 */
export function UsersTable() {
	const res = useQuery<GetUsersResponse>(GET_USERS)
	const { loading, error, data } = res
	if (loading) {
		return (
			<div className="flex items-center justify-center p-8">
				<div className="text-gray-600 dark:text-gray-400">
					Cargando usuarios...
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="flex items-center justify-center p-8">
				<div className="text-red-600 dark:text-red-400">
					Error: {error.message}
				</div>
			</div>
		)
	}

	if (!data?.getUsers || data.getUsers.length === 0) {
		return (
			<div className="flex items-center justify-center p-8">
				<div className="text-gray-600 dark:text-gray-400">
					No hay usuarios disponibles
				</div>
			</div>
		)
	}

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
				<thead className="bg-gray-50 dark:bg-gray-800">
					<tr>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
						>
							ID
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
						>
							Nombre
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
						>
							Email
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
						>
							Usuario
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400"
						>
							Teléfono
						</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
					{data.getUsers.map((user) => (
						<tr
							key={user.id}
							className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
						>
							<td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
								{user.id}
							</td>
							<td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-gray-100">
								{user.name}
							</td>
							<td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
								{user.email}
							</td>
							<td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
								{user.username || '-'}
							</td>
							<td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
								{user.phone || '-'}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
