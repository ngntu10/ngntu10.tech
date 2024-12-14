import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'

const EXPERIENCES = [
  {
    org: 'Spiraledge',
    url: 'https://spiraledge.com',
    logo: '/static/images/spiraledge.png',
    start: 'Nov 2024',
    end: 'Present',
    title: 'Software Engineer',
    icon: 'man-technologist',
    event: 'career-spiraledge',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Developed <strong>microservices architectures</strong> for backend systems for{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://practyce.com">
              PRACTYCE
            </a>{' '}
            , ensuring scalability, modularity, and efficient resource utilization
          </li>
          <li>
            Built and revamped responsive interfaces with <strong>Angular</strong>, focusing on
            reusable components, API integration for a seamless user experience
          </li>
          <li>
            Built and <strong>optimized payment gateway integrations</strong> to handle{' '}
            <strong>secure transactions</strong> and <strong>real-time data synchronization</strong>{' '}
            with <strong>external banking systems</strong>
          </li>
        </ul>
      )
    },
  },
  {
    org: 'University of Information Technology',
    url: 'https://www.uit.edu.vn/',
    logo: '/static/images/uit-logo.jpg',
    start: 'Sep 2022',
    end: 'Jul 2026(Expected)',
    title: 'Student',
    icon: 'man-student',
    event: 'career-uit',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Honorable Mention, The 2023 <strong>ICPC Vietnam National Programming Contest</strong>
          </li>
          <li>
            Active participant in the UIT ACM/ICPC programming community, focusing on competitive
            coding challenges and team-based problem-solving exercises.
          </li>
          <li>
            <strong>Member of the Technical Team</strong> at{' '}
            <strong>The 2023 WebDev Hackathon | WebDev Adventure</strong>,{' '}
            <strong>developed</strong> specific features for{' '}
            <strong>adventure.webdevstudios.org</strong> to be used in an{' '}
            <strong>onsite contest setting</strong>
          </li>
          <li>
            Participated in multiple workshops and training sessions focused on the latest{' '}
            <strong>web development technologies</strong> and <strong>best practices</strong>
          </li>
        </ul>
      )
    },
  },
]

export function CareerTimeline() {
  return (
    <ul className="m-0 list-none p-0">
      {EXPERIENCES.map((exp, idx) => (
        <li key={exp.url} className="m-0 p-0">
          <TimelineItem exp={exp} last={idx === EXPERIENCES.length - 1} />
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({ exp, last }: { exp: (typeof EXPERIENCES)[0]; last?: boolean }) {
  let { org, title, icon, url, logo, start, end, event, details: Details } = exp
  return (
    <div
      className={clsx(
        'group/timeline-item',
        'relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3',
        'cursor-pointer bg-transparent transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
        !last && [
          'before:absolute before:left-9 before:top-15',
          'before:h-full before:w-px',
          'before:bg-gray-300 dark:before:bg-gray-500',
        ]
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="h-12 w-12 shrink-0 rounded-md"
        style={{ objectFit: 'contain' }}
        width={200}
        height={200}
      />
      <details className="w-full [&_.minus]:open:block [&_.plus]:open:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-expand`}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-collapse`}
          />
          <div className="flex flex-col">
            <div className="line-clamp-1 text-xs tabular-nums text-gray-500 dark:text-gray-400">
              <span>{start}</span> – <span>{end}</span>
            </div>
            <Link
              href={url}
              className="line-clamp-1 w-fit font-semibold text-gray-900 no-underline hover:text-gray-900 dark:text-white dark:hover:text-white"
            >
              <GrowingUnderline data-umami-event={event}>{org}</GrowingUnderline>
            </Link>
            <div className="flex items-center gap-1 pt-1 text-sm text-gray-700 dark:text-gray-200">
              <Twemoji emoji={icon} className="!-mt-1" />
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-base">
          <Details />
        </div>
      </details>
    </div>
  )
}
