import Image from 'next/image';
import Link from 'next/link';
import { Terminal } from '../../../common/terminal/Terminal';
import { OmittedProgram as Program } from '../../../../types/api/allPrograms';
import * as styles from './ListItem.css';

const Partition = () => (
  <div className={styles.partition}>
    <Image src="/sakura.svg" alt="sakura" height={12} width={12} />
    <Image src="/sakura.svg" alt="sakura" height={12} width={12} />
    <Image src="/sakura.svg" alt="sakura" height={12} width={12} />
  </div>
);

const ProgramLink = ({
  program,
  children,
}: {
  program: Program;
  children: React.ReactNode;
}) => <Link href={`./program/${program.uuid}`}>{children}</Link>;

const Text = ({ text, program }: { text: string; program: Program }) => (
  <ProgramLink program={program}>
    <div className={styles.title}>
      {text.split('')?.map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  </ProgramLink>
);

export const ListItem = ({ program }: { program: Program }) => {
  const startDate = new Date(program.startAt);
  const endDate = new Date(program.endAt);
  const Day = startDate.getDate();
  const startHour = startDate.getHours().toString().padStart(2, '0');
  const startMinute = startDate.getMinutes().toString().padStart(2, '0');
  const endHour = endDate.getHours().toString().padStart(2, '0');
  const endMinute = endDate.getMinutes().toString().padStart(2, '0');

  return (
    <Terminal barTitle={program.group.name}>
      <div className={styles.gridItem}>
        <div className={styles.imageWrapper}>
          <ProgramLink program={program}>
            <Image src={program.thumbnail} layout="fill" alt={program.title} />
          </ProgramLink>
        </div>
        <div className={styles.info}>
          <div>
            <p className={styles.programLabel}>企画名</p>
            <Text text={program.title} program={program} />
          </div>
          <Partition />
          <div className={styles.description}>
            <p className={styles.caption}>場所</p>
            <p className={styles.descriptionText}>{program.place}</p>
          </div>
          <Partition />
          <div className={styles.description}>
            <p className={styles.caption}>日時</p>
            <p className={styles.descriptionText}>
              10月{Day}日<br />
              {startHour}:{startMinute}～{endHour}:{endMinute}
            </p>
          </div>
        </div>
      </div>
    </Terminal>
  );
};
