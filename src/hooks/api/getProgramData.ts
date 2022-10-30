import { Response } from '../../types/api/program';

export const getProgramData = async (uuid: string) => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_API_ROOT ?? ''}program/${uuid}`),
  );
  const program = (await res.json()) as Response;

  return program;
};
