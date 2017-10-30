const routes = [
  { path: '/dashboard',           label: 'Dashboard',     sidebar:false},
  { path: '/',                    label: 'Logout',        sidebar:false},
  { path: '/dashboard',           label: 'Übersicht',     sidebar:true,  icon: "fa fa-home" },
  { path: '/dashboard/blog',      label: 'Blog',          sidebar:true,  icon: "fa fa-rss" },
  { path: '/dashboard/newpost',   label: 'Neuer Beitrag', sidebar:true,  icon: "fa fa-paper-plane-o" }
]

export default routes