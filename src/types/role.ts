export interface Role {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    permissions: RolePermission[];
    parentRole?: Role | null;
    parentRoleId?: string | null;
    childRoles: Role[];
}

export interface Permission {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    roles: RolePermission[];
}

export interface RolePermission {
    role: Role;
    roleId: string;
    permission: Permission;
    permissionId: string;
    assignedAt: Date;
}