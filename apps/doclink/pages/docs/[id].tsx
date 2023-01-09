import React from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';

const contents = [
  {
    _id: '1',
    menuId: '1',
    title: 'Example 1',
    context: `- xcode-select --install`,
    notes: [],
    media: {},
    isSecret: true,
  },
  {
    _id: '2',
    title: 'XCode',
    menuId: '2',
    context: `- xcode-select --install \n`,
    notes: [],
    media: {},
    isSecret: true,
  },
  {
    _id: '3',
    title: 'Homebrew',
    menuId: '2',
    context: `- /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" <br/>
    - brew -v`,
    notes: ['bitgii hicheel deer utas oroldood bai'],
    media: {},
    isSecret: true,
  },
  {
    _id: '3',
    title: 'Node',
    menuId: '2',
    context: `- https://nodejs.org/en/ (Install Stable version) <br/>
    - nvm (optional) : https://github.com/nvm-sh/nvm`,
    notes: [],
    media: {},
    isSecret: true,
  },
  {
    _id: '3',
    title: 'Git',
    menuId: '2',
    context: `- brew install git`,
    notes: [],
    media: {},
    isSecret: true,
  },
  {
    _id: '3',
    title: 'VSCode',
    menuId: '2',
    context: `https://code.visualstudio.com/docs?dv=osx`,
    notes: ['bitgii hicheel deer utas oroldood bai'],
    media: {},
    isSecret: true,
  },
  {
    _id: '3',
    title: 'MongoDB',
    menuId: '2',
    context: `- brew tap mongodb/brew <br/>
    - brew tap | grep mongodb <br/>
    - brew install mongodb-community@4.4 <br/>
    - brew services start mongodb-community@4.4 <br/>
    - Install MongoDB Compass<br/>
    - https://www.mongodb.com/try/download/compass <br/>`,
    notes: [],
    media: {},
    isSecret: true,
  },
];

type Props = {
  _id: string;
  menuId: string;
  title: string;
  context: string;
  notes: Array<string>;
  media: Object;
  isSecret: boolean;
};

export const Content = ({ _id, title, context, notes, media }: Props) => (
  <>
    <h3
      id={title.split(' ').join('-')}
      className="group flex whitespace-pre-wrap -ml-4 pl-4 text-[##e2e8f0]"
    >
      <a
        href={'#' + title.split(' ').join('-')}
        className="absolute -ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100"
        aria-label="Anchor"
      >
        <div className="w-6 h-6 text-slate-400 ring-1 ring-slate-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-slate-900/10 hover:shadow hover:text-slate-700 dark:bg-slate-700 dark:text-slate-300 dark:shadow-none dark:ring-0">
          <svg width="12" height="12" fill="none" aria-hidden="true">
            <path
              d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
      </a>
      <span className="text-[#e2e8f0] text-xl">{title}</span>
    </h3>
    <p
      className="mt-2 text-lg text-slate-700 dark:text-slate-400"
      dangerouslySetInnerHTML={{ __html: context }}
    />
    <ul>
      {_.map(notes, (note) => (
        <li className="mt-2 text-lg text-slate-700 dark:text-slate-400 list-disc">
          {note}
        </li>
      ))}
    </ul>
  </>
);

export default () => {
  const router = useRouter();
  const { id } = router.query || {};
  return (
    <div className="lg:pl-[19.5rem]">
      <h3 className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
        {id}
      </h3>
      <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        {contents
          .filter((content) => content.menuId === id)
          .map((content) => (
            <Content {...content} />
          ))}
        {_.chain(contents)
          .filter((content) => content.menuId === id)
          .map((content) => (
            <Content {...content} />
          ))}
      </div>
    </div>
  );
};
