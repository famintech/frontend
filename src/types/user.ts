import { Role } from './role';

export interface User {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  createdAt: Date;
  updatedAt: Date;
  passwordResetToken?: string | null;
  passwordResetExpires?: Date | null;
  twoFactorSecret?: string | null;
  isTwoFactorEnabled: boolean;
  roles: Role[];
}