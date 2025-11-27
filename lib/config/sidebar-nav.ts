import {
	BookOpen,
	DollarSign,
	FileSpreadsheet,
	FileText,
	GraduationCap,
	LayoutDashboard,
	Settings,
	UserCheck,
} from 'lucide-react'
import { type NavItem } from 'types/sidebar'

/**
 * Navigation items configuration for the sidebar.
 *
 * This centralized configuration defines all navigation routes,
 * their labels (in Spanish), icons, and hierarchy.
 *
 * Items with `children` will render as accordions.
 * Items without `href` are parent-only (not directly navigable).
 *
 * Future: Add `roles` and `permissions` arrays to items for
 * role-based access control.
 *
 * @example
 * ```tsx
 * import { navigationItems } from 'lib/config/sidebar-nav'
 *
 * export function SidebarNav() {
 *   return (
 *     <nav>
 *       {navigationItems.map((item) => (
 *         <NavItem key={item.id} item={item} />
 *       ))}
 *     </nav>
 *   )
 * }
 * ```
 */
export const navigationItems: NavItem[] = [
	{
		id: 'dashboard',
		label: 'Dashboard',
		href: '/dashboard',
		icon: LayoutDashboard,
	},
	{
		id: 'students',
		label: 'Estudiantes',
		href: '/students',
		icon: GraduationCap,
	},
	{
		id: 'teachers',
		label: 'Profesores',
		href: '/teachers',
		icon: UserCheck,
	},
	{
		id: 'classes',
		label: 'Clases',
		href: '/classes',
		icon: BookOpen,
	},
	{
		id: 'finanzas',
		label: 'Finanzas',
		icon: DollarSign,
		children: [
			{
				id: 'facturacion',
				label: 'Facturación',
				href: '/finanzas/facturacion',
				icon: FileText,
			},
			{
				id: 'invoices',
				label: 'Facturas',
				href: '/finanzas/invoices',
				icon: FileSpreadsheet,
			},
		],
	},
	{
		id: 'settings',
		label: 'Configuración',
		href: '/settings',
		icon: Settings,
	},
]
