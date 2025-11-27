import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from './lib/supabase/middleware'

/**
 * Next.js Middleware to protect routes that require authentication.
 * This middleware runs on the Edge Runtime before requests reach your pages.
 *
 * Flow:
 * 1. Creates a Supabase client configured for middleware
 * 2. Checks if the user has an active session
 * 3. If accessing protected routes without auth, redirects to login
 * 4. Preserves the original URL to redirect back after login
 * 5. Automatically refreshes expired sessions
 *
 * Protected routes:
 * - /dashboard and all its subroutes
 *
 * Public routes (no auth required):
 * - / (landing page)
 * - /login
 * - Static files and API routes
 *
 * @param request - The incoming Next.js request
 * @returns NextResponse - Either allows the request or redirects to login
 */
export async function middleware(request: NextRequest) {
	const { supabase, response } = await createClient(request)

	// Refresh session if expired - required for Server Components
	const {
		data: { session },
	} = await supabase.auth.getSession()

	// Check if trying to access protected routes without authentication
	if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
		// Redirect to login with the original URL to return after auth
		const redirectUrl = new URL('/login', request.url)
		redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname)
		return NextResponse.redirect(redirectUrl)
	}

	// Allow the request to proceed
	return response
}

/**
 * Matcher configuration to specify which routes the middleware should run on.
 *
 * This middleware will run on all routes EXCEPT:
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - favicon.ico (favicon file)
 * - Images and other static assets (.svg, .png, .jpg, .jpeg, .gif, .webp)
 * - api routes (if you have any)
 * - login page (to avoid redirect loops)
 * - root page (/) - public landing page
 *
 * Note: The regex pattern matches all routes except those listed above.
 * This ensures the middleware runs on /dashboard and its subroutes.
 */
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - Static assets (svg, png, jpg, jpeg, gif, webp)
		 * - api (API routes)
		 * - login (login page)
		 * - Root path (/)
		 */
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api|login|^/$).*)',
	],
}
