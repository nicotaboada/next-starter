import { DownloadIcon, PlusIcon } from 'lucide-react'
import { type Metadata } from 'next'
import Link from 'next/link'
import { SectionHeader } from 'components/layouts/section-header'
import { Button } from 'components/ui/button'

export const metadata: Metadata = {
	title: 'Estudiantes - Next.js Enterprise',
	description: 'Gestión de estudiantes',
}

export default function StudentsPage() {
	return (
		<div className="space-y-6">
			<SectionHeader
				title="Dashboard"
				subtitle={`Welcome back`}
				actions={
					<>
						<Button variant="outline">
							<DownloadIcon className="mr-2 h-4 w-4" />
							Exportar
						</Button>
						<Button>
							<PlusIcon className="mr-2 h-4 w-4" />
							Nueva Venta
						</Button>
					</>
				}
			/>

		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			<Link
				href="/students/1"
				className="bg-card text-card-foreground block rounded-lg border p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-400 dark:hover:border-gray-600"
			>
				<h3 className="text-lg font-semibold">Total Estudiantes</h3>
				<p className="text-muted-foreground mt-2">Placeholder content</p>
				<p className="text-primary mt-1 text-sm font-medium">Ver detalles →</p>
			</Link>

			<div className="bg-card text-card-foreground rounded-lg border p-6 shadow-sm">
				<h3 className="text-lg font-semibold">Estudiantes Activos</h3>
				<p className="text-muted-foreground mt-2">Placeholder content</p>
			</div>

			<div className="bg-card text-card-foreground rounded-lg border p-6 shadow-sm">
				<h3 className="text-lg font-semibold">Nuevos este mes</h3>
				<p className="text-muted-foreground mt-2">Placeholder content</p>
			</div>
		</div>
		</div>
	)
}
