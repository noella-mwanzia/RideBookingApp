import { Roles } from "./roles.interface"

export interface User{
  
  displayName: string,
  email: string, 
  phone: number,
  uId: string, 
  id: string,
  roles: Roles,
  createdOn: Date

}