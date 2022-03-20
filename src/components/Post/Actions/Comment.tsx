import { LensHubPost } from '@generated/lenshubtypes'
import { ChatAlt2Icon } from '@heroicons/react/outline'
import { humanize } from '@lib/humanize'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  post: LensHubPost
}

const Comment: React.FC<Props> = ({ post }) => {
  return (
    <motion.button whileTap={{ scale: 0.9 }}>
      <Link href={`/post/${post?.pubId}`} passHref>
        <a
          href={`/post/${post?.pubId}`}
          className="flex items-center space-x-1 text-blue-500 hover:text-blue-400"
        >
          <div className="hover:bg-blue-300 hover:bg-opacity-20 p-1.5 rounded-full">
            <ChatAlt2Icon className="w-[18px]" />
          </div>
          {post?.stats?.totalAmountOfComments > 0 && (
            <div className="text-xs">
              {humanize(post?.stats?.totalAmountOfComments)}
            </div>
          )}
        </a>
      </Link>
    </motion.button>
  )
}

export default Comment
