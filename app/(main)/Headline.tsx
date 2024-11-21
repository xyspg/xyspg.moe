'use client'

import {motion} from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import {SparkleIcon} from '~/assets'
import {SocialLink} from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group font-mono">
      <span className="font-mono">&lt;</span>Developer
      <span className="font-mono">/&gt;</span>
      <span
        className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500"/>
    </span>
  )
}

function Designer() {
  return (
    <span className="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5">
      <span
        className="pointer-events-none absolute inset-0 border border-teal-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-teal-400/90">
        <span
          className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-teal-700 bg-zinc-50 dark:border-teal-400"/>
        <span
          className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-teal-700 bg-zinc-50 dark:border-teal-400"/>
        <span
          className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-teal-700 bg-zinc-50 dark:border-teal-400"/>
        <span
          className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-teal-700 bg-zinc-50 dark:border-teal-400"/>
      </span>
      Video Editor
    </span>
  )
}

function OCD() {
  return (
    <span className="group">
      {/*<SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />*/}
      <span>Hi, I'm xyspg 👋</span>
    </span>
  )
}

function Founder() {
  return (
    <span className="group">
      {/*<AppleIcon className="mr-1 inline-flex pb-1 " />*/}
      {/*<span>a student studying computer science at New York university</span>*/}
    </span>
  )
}

export function Headline() {
  return (
    <div className="max-w-3xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        {/*<Developer />, <Designer />,*/}
        {/*<br />*/}
        <OCD/> <Founder/>
      </motion.h1>
      <motion.p
        className="text-md mt-6 text-zinc-600 dark:text-zinc-400"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          An undergraduate student studying Computer Science at&nbsp;
          <a
          className="text-[#57068c] font-bold"
          href="https://nyu.edu"
          target="_blank"
          rel="noreferrer noopener">
            New York University
          </a>
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{opacity: 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://x.com/xyspgUwU"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://github.com/xyspg"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://t.me/yhn04b009"
          aria-label="我的 Telegram"
          platform="telegram"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅"/>
        <SocialLink
          href="mailto:combo@xyspg.moe"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
