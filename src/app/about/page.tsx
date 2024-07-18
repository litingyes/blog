import { IconWork } from '@/components/icons/work'
import { IconZoom } from '@/components/icons/zoom'
import { transformDateStringToDisplayDate } from '@/utils/date'

const PRESENT = 'present'

const WORKS = [
  {
    company: 'ZOOM',
    icon: <IconZoom />,
    onboarding: transformDateStringToDisplayDate('2023-07-03'),
    resignation: PRESENT,
    position: 'R & D Engineer',
  },
]

export default function AboutPage() {
  return (
    <div className="px-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
        </div>
        <div className="rounded-xl border border-solid border-gray-200 p-4">
          <div className="flex items-center gap-2 font-semibold text-slate-600">
            <IconWork />
            <span>Work experience</span>
          </div>
          <ul className="mt-4">
            {WORKS.map(work => (
              <li className="flex items-center gap-4" key={work.onboarding}>
                <i className="text-4xl">
                  {work.icon}
                </i>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-slate-950">{work.company}</span>
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <span>{work.onboarding}</span>
                      <span>-</span>
                      <span>{work.resignation}</span>
                    </span>
                  </div>
                  <div className="text-sm text-slate-600">{work.position}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
