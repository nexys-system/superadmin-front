const superAdminBase = '';

const toRouteSuperAdmin = (s: string) => superAdminBase + s;

export const SuperAdmin = {
  base: superAdminBase,
  instance: toRouteSuperAdmin('/instance'),
  permission: toRouteSuperAdmin('/permission'),
  entity: toRouteSuperAdmin('/entity')
};

export const Public = { logout: '/logout' };
