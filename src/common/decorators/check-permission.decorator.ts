import { SetMetadata } from '@nestjs/common';
//import { Reflector } from '@nestjs/core';

export const IS_CHECK_PERMISSION_KEY = 'isCheckPermission';
export const SkipPermission = () => SetMetadata(IS_CHECK_PERMISSION_KEY, true);


