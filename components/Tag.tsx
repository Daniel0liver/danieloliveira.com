import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-color hover:text-blue-600 dark:text-primary-color-dark dark:hover:text-yellow-300">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
