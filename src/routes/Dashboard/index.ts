/**
 * @description
 * Routes are considered page level components.
 * They are the main entry point for a given route.
 *
 * This helps to easily navigate application hierarchy,
 * and understand what is a page level component ('/routes')
 * and what is a global component ('/components').
 * Global components are used across multiple routes.
 * Where as page level components are only used as a route.
 */

import { Dashboard } from './Dashboard'

// i.e. export { Dashboard, Login, Settings, User, etc... }
export { Dashboard }
