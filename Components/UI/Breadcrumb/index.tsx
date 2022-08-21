import React from 'react'
import Link from 'next/link'
type BreadcrumbRoute = {
  label: string,
  src: string
}
interface Breadcrumbprops {
  paths: BreadcrumbRoute[]
}
function Breadcrumb({ paths }: Breadcrumbprops) {
  return (
    <ul className="flex items-center">
      {paths.map((path, index) => {
        return index === paths.length - 1 ?
          <li key={index} className="text-gray-400">{path.label}</li> :
          <li key={index} >
            <Link href={path.src}>
              {path.label}
            </Link>
            <span className="mx-2">/</span>
          </li>
      })}
    </ul>
  )
}

export default Breadcrumb