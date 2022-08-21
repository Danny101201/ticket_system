/* eslint-disable react/display-name */
import { SVGProps, memo } from 'react'
import MenuIcon from './menu.svg'

export const MenuIconSvg = memo((props: SVGProps<SVGSVGElement>) => (<MenuIcon {...props} />));