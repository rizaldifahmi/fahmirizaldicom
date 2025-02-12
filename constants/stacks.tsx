import {
  Android,
  Bootstrap,
  Git,
  JavaScript,
  Jest,
  JQuery,
  Laravel,
  Markdown,
  MySQL,
  NextJS,
  NuxtJS,
  PHP,
  PostgreSQL,
  Prisma,
  RabbitMQ,
  ReactJS,
  Redis,
  Supabase,
  TailwindCSS,
  TypeScript,
  VueJS,
} from '@/components/shared/icons';
import { cn } from '@/lib/utils';
import type { Stack } from '@/types/stack';

export const STACKS: Stack = {
  TypeScript: <TypeScript className={cn('size-4 fill-[#3178C6]')} />,
  JavaScript: <JavaScript className={cn('size-4 fill-[#F7DF1E]')} />,
  PHP: <PHP className={cn('size-4 fill-[#777BB4]')} />,
  'Next.js': <NextJS className={cn('size-4 fill-black', 'dark:fill-white')} />,
  'React.js': <ReactJS className={cn('size-4 fill-[#61DAFB]')} />,
  'Nuxt.js': <NuxtJS className={cn('size-4 fill-[#00DC82]')} />,
  'Vue.js': <VueJS className={cn('size-4 fill-[#4FC08D]')} />,
  Laravel: <Laravel className={cn('size-4 fill-[#FF2D20]')} />,
  'Tailwind CSS': <TailwindCSS className={cn('size-4 fill-[#06B6D4]')} />,
  Markdown: <Markdown className={cn('size-4 fill-black', 'dark:fill-white')} />,
  MySQL: <MySQL className={cn('size-4 fill-[#4479A1]')} />,
  PostgreSQL: <PostgreSQL className={cn('size-4 fill-[#4169E1]')} />,
  Redis: <Redis className={cn('size-4 fill-[#FF4438]')} />,
  Prisma: (
    <Prisma className={cn('size-4 fill-[##2D3748]', 'dark:fill-white')} />
  ),
  RabbitMQ: <RabbitMQ className={cn('size-4 fill-[#FF6600]')} />,
  Jest: <Jest className={cn('size-4 fill-[#C21325]')} />,
  Git: <Git className={cn('size-4 fill-[#F05032]')} />,
  Supabase: <Supabase className={cn('size-4 fill-[#3FCF8E]')} />,
  JQuery: <JQuery className={cn('size-4 fill-[#0769AD]')} />,
  Bootstrap: <Bootstrap className={cn('size-4 fill-[#7952B3]')} />,
  Android: <Android className={cn('size-4 fill-[#34A853]')} />,
};
